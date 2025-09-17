"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";

const banners = [
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    title: "Elevate Your Style",
    desc: "Discover the latest trends in men's and women's fashion. Quality clothing for every occasion.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob3BwaW5nfGVufDB8fDB8fHww",
    title: "New Season Arrivals",
    desc: "Upgrade your wardrobe with our latest collection designed for modern living.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    title: "Exclusive Deals",
    desc: "Shop your favorite styles with exclusive discounts and offers today.",
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[80vh]"
    >
      {banners.map((banner, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-full">
            {/* Background image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                {banner.title}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl">
                {banner.desc}
              </p>
              <Link
                href="/shop"
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
