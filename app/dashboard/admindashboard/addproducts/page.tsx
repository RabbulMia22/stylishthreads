"use client";

import { useImageUpload } from "@/hook/useImageUpload";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios, {AxiosResponse} from "axios";

interface ProductFormData {
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  images: FileList;
  rating: number;
}

function AddProductsPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control
  } = useForm<ProductFormData>();
  
  const { fileInputRef, progress, uploadedUrl, handleUpload } = useImageUpload();


 const onSubmit = async (data: ProductFormData) => {
  
  try {
   const imagesArray = Array.isArray(uploadedUrl)
  ? uploadedUrl.filter((url) => url) 
  : uploadedUrl
    ? [uploadedUrl]
    : [];

if (imagesArray.length === 0) {
  alert("Please upload at least one image before submitting.");
  return;
}
    const productData = {
      ...data,
      id: Date.now().toString(), 
      price: Number(data.price),
      rating: Number(data.rating),
      images: imagesArray,
    };
    console.log(productData);
    const response: AxiosResponse<any> = await axios.post("/api/products", productData);
    console.log("Product added:", response.data);
    alert("Product added successfully!");
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

  const inputClasses =
    "w-full border p-2 rounded text-black placeholder-black";

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-">
      <h1 className="text-2xl font-bold mb-6 text-black">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1 text-black">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            placeholder="Enter product title"
            className={inputClasses}
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1 text-black">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Enter product description"
            className={inputClasses}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1 text-black">Price</label>
          <input
            type="number"
            step="0.01"
            placeholder="Enter product price"
            {...register("price", { required: "Price is required", min: 0 })}
            className={inputClasses}
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1 text-black">Category</label>
          <input
            placeholder="Enter product category"
            {...register("category", { required: "Category is required" })}
            className={inputClasses}
          />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>

        {/* Subcategory */}
        <div>
          <label className="block font-medium mb-1 text-black">Subcategory</label>
          <input
            placeholder="Enter product subcategory"
            {...register("subcategory")}
            className={inputClasses}
          />
        </div>

        {/* Sizes */}
        <div>
          <label className="block font-medium mb-1 text-black">Sizes (comma separated)</label>
          <input
            placeholder="e.g. S, M, L, XL"
            {...register("sizes", {
              setValueAs: (v) => v.split(",").map((s: any) => s.trim()),
            })}
            className={inputClasses}
          />
        </div>

        {/* Colors */}
        <div>
          <label className="block font-medium mb-1 text-black">Colors (comma separated)</label>
          <input
            placeholder="e.g. Red, Blue, Green"
            {...register("colors", {
              setValueAs: (v) => v.split(",").map((c: any) => c.trim()),
            })}
            className={inputClasses}
          />
        </div>

        {/* Images */}
        <div>
          <label className="block font-medium mb-1 text-black">Images</label>
          <div>
            <Controller
              name="images"
              control={control}
              render={({ field }) => (
                <input
                  type="file"
                  ref={(e) => {
                    field.ref(e);
                    fileInputRef.current = e;
                  }}
                  onChange={(e) => field.onChange(e.target.files)}
                  multiple
                />
              )}
            />
            <button
              type="button"
              onClick={async (e) => {
                e.preventDefault();
                await handleUpload();
              }}
              className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 mt-2"
            >
              Upload
            </button>
            <div>
              Progress: <progress value={progress} max={100}></progress>
            </div>
            {uploadedUrl && <img src={uploadedUrl} alt="Uploaded" className="w-40 mt-2" />}
          </div>
          {errors.images && <p className="text-red-500">{errors.images.message}</p>}
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium mb-1 text-black">Rating</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            placeholder="Enter rating (0-5)"
            {...register("rating")}
            className={inputClasses}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductsPage;
