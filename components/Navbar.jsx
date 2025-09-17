"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch, FiHeart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Shops from "./Shops";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          LUSION
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Shops />

          <Link href="/product" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
            Product
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/pages" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
            Pages
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/buy-now" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
            Buy Now
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Right Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-5 relative">
          <div className="relative">
            {showSearch ? (
              <FiX size={20} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300" onClick={toggleSearch} />
            ) : (
              <FiSearch size={20} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300" onClick={toggleSearch} />
            )}

            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 200 }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-2 right-10 bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative w-full md:w-52">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-64 px-4 py-2 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-gray-50"
                    />
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <FiUser size={20} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300" />

          <div className="relative">
            <FiHeart size={20} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>

          <div className="relative">
            <FiShoppingCart size={20} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <FiMenu size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="md:hidden fixed top-0 left-0 w-80 h-full bg-white shadow-xl z-40 p-6 flex flex-col space-y-6"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LUSION
                </div>
                <button onClick={toggleDrawer} className="p-1">
                  <FiX size={24} className="text-gray-500" />
                </button>
              </div>

              <Link href="/" onClick={toggleDrawer} className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200">Home</Link>
              <div className="py-2"><Shops /></div>
              <Link href="/product" onClick={toggleDrawer} className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200">Product</Link>
              <Link href="/pages" onClick={toggleDrawer} className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200">Pages</Link>
              <Link href="/blog" onClick={toggleDrawer} className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200">Blog</Link>
              <Link href="/buy-now" onClick={toggleDrawer} className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200">Buy Now</Link>

              <div className="pt-8 border-t border-gray-100 mt-auto flex justify-around">
                <div className="flex flex-col items-center">
                  <FiUser size={20} className="text-gray-600 mb-1" />
                  <span className="text-xs text-gray-500">Account</span>
                </div>
                <div className="flex flex-col items-center relative">
                  <FiHeart size={20} className="text-gray-600 mb-1" />
                  <span className="text-xs text-gray-500">Wishlist</span>
                  <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
                </div>
                <div className="flex flex-col items-center relative">
                  <FiShoppingCart size={20} className="text-gray-600 mb-1" />
                  <span className="text-xs text-gray-500">Cart</span>
                  <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              onClick={toggleDrawer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30 md:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
