import { NextResponse } from "next/server";
import ImageKit from "imagekit";
import Product from "@/models/Product";
import { dbConnect } from "@/lib/db";

// Initialize ImageKit
const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

// POST: Add new product
export async function POST(req: Request) {
  try {
    await dbConnect();
    const contentType = req.headers.get("content-type") || "";
    let id, title, description, price, category, subcategory, sizes, colors, rating, featured, files, uploadedImages: string[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      id = formData.get("id")?.toString();
      title = formData.get("title")?.toString();
      description = formData.get("description")?.toString() || "";
      price = Number(formData.get("price"));
      category = formData.get("category")?.toString();
      subcategory = formData.get("subcategory")?.toString() || "";
      sizes = JSON.parse(formData.get("sizes")?.toString() || "[]");
      colors = JSON.parse(formData.get("colors")?.toString() || "[]");
      rating = Number(formData.get("rating") || 0);
      featured = formData.get("featured") === "true";
      files = formData.getAll("images") as File[];
      if (!files || files.length === 0) {
        console.warn("No images uploaded");
      }
      // Upload images to ImageKit with error handling
      uploadedImages = [];
      for (const file of files) {
        if (!(file instanceof File)) continue; // safeguard
        try {
          const buffer = Buffer.from(await file.arrayBuffer());
          const uploaded = await imagekit.upload({
            file: buffer,
            fileName: file.name,
            folder: "/products",
          });
          uploadedImages.push(uploaded.url);
        } catch (imgErr: any) {
          console.error(`Image upload failed for file ${file.name}:`, imgErr);
          return NextResponse.json({ error: `Image upload failed: ${imgErr.message}` }, { status: 500 });
        }
      }
    } else if (contentType.includes("application/json")) {
      const body = await req.json();
      id = body.id;
      title = body.title;
      description = body.description || "";
      price = Number(body.price);
      category = body.category;
      subcategory = body.subcategory || "";
      sizes = body.sizes || [];
      colors = body.colors || [];
      rating = Number(body.rating || 0);
      featured = !!body.featured;
      uploadedImages = body.images || [];
    } else {
      return NextResponse.json({ error: "Unsupported Content-Type" }, { status: 415 });
    }

    if (!id || !title || !price || !category) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // Save product in DB with error handling
    let newProduct;
    try {
      newProduct = await Product.create({
        id,
        title,
        description,
        price,
        category,
        subcategory,
        sizes,
        colors,
        images: uploadedImages,
        rating,
        featured,
      });
    } catch (dbErr: any) {
      console.error("Product creation failed:", dbErr);
      return NextResponse.json({ error: `Product creation failed: ${dbErr.message}` }, { status: 500 });
    }
    console.log("Product created:", newProduct);
    return NextResponse.json({ product: newProduct }, { status: 201 });
  } catch (err: any) {
    console.error("Error in POST /api/products (outer):", err);
    return NextResponse.json({ error: `Unexpected error: ${err.message}` }, { status: 500 });
  }
}
