"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import products from "../../../../data/product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addToCart } from "@/store/slices/cartSlice";
import useAxios from "@/hook/useAxios";
import axiosSecure from "@/hook/useAxios";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  images: string[];
  rating: number;
  featured: boolean;
}

export default function ProductDetails() {
  const params = useParams();
  const { productId } = params;
  const dispatch = useDispatch<AppDispatch>();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  

  // Convert productId to string and match with product.id
  const product = products.find((p) => p.id === String(productId));

  if (!product) {
    return (
      <div className="p-10 mt-24 text-center">
        <h1 className="text-2xl font-bold text-black">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    try {
      await axiosSecure.post("/cart");

      const res = await axiosSecure.post("/cart/add", {
        productId: product.id,
        quantity: 1,
        size: selectedSize,
        image: product.images,
        userId: null, // Assuming userId is handled server-side via cookies
      })
      console.log("Cart updated:", res.data);

      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        images: product.images,
        selectedSize: selectedSize

      }));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }

  };

  return (
    <section className="max-w-7xl mx-auto px-6 mt-24 py-12 grid md:grid-cols-2 gap-10">
      {/* Left - Product Image */}
      <div className="flex justify-center items-start">
       
          <Image
            src={product.images[0]}
            alt={`${product.title} image`}
            width={200}
            height={250}
            className="rounded-lg shadow-lg object-cover"
          />
        
      </div>

      {/* Right - Product Info */}
      <div>
        <h1 className="text-4xl font-bold mb-4 text-black">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
            ))}
          </div>
          <span className="text-gray-600">({product.rating})</span>
        </div>

        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-3xl font-semibold text-red-500 mb-6">
          ${product.price}
        </p>

        {/* Sizes */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2 text-black">Sizes</h2>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border rounded-md px-4 py-2 hover:bg-gray-100 text-black ${selectedSize === size ? "bg-gray-200 font-bold" : ""
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2 text-black">Colors</h2>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map((color) => (
              <span
                key={color}
                className="px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-gray-100 text-black"
              >
                {color}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
