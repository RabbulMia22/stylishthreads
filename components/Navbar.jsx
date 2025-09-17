"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX, FiUser, FiHeart, FiShoppingCart, FiSearch, FiHeadphones } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Shops from "./Shops";
import Products from "./Products";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
            {/* Top Announcement Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2 px-4 text-center">
                🎉 Free shipping on all orders over $50! Limited time offer. Shop now →
            </div>

            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    FASHIONHUB
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <div className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
                        <Shops />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </div>
                    <div className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
                        <Products />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </div>


                    <Link href="/new-arrivals" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
                        New Arrivals
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>


                </div>

                {/* Right Icons - Desktop */}
                <div className="hidden md:flex items-center space-x-5">
                    {/* Search */}
                    <div className="relative">
                        <div className="relative w-64">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                    </div>



                    {/* User Account */}
                    <div className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <FiUser size={20} className="mr-1" />
                    </div>

                    {/* Wishlist */}
                    <div className="relative flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <FiHeart size={20} className="mr-1" />

                    </div>

                    {/* Cart */}
                    <div className="relative flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <FiShoppingCart size={20} className="mr-1" />

                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center space-x-4">
                    <FiSearch size={20} className="text-gray-700" />
                    <FiShoppingCart size={20} className="text-gray-700 relative">
                        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
                    </FiShoppingCart>
                    <button onClick={toggleDrawer} className="p-2 rounded-lg hover:bg-gray-100">
                        {isOpen ? <FiX size={24} className="text-gray-700" /> : <FiMenu size={24} className="text-gray-700" />}
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
                            className="md:hidden fixed top-0 left-0 w-80 h-full bg-white shadow-xl z-50 flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    FASHIONHUB
                                </div>
                                <button onClick={toggleDrawer} className="p-2 rounded-lg hover:bg-gray-100">
                                    <FiX size={20} className="text-gray-500" />
                                </button>
                            </div>

                            {/* Search Bar */}
                            <div className="p-4 border-b border-gray-200">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-4 py-3 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex-1 overflow-y-auto p-5 space-y-1">
                                <Link href="/" onClick={toggleDrawer} className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors">
                                    Home
                                </Link>

                                <div className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
                                    <Shops />
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </div>
                                <div className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
                                    <Products />
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </div>
                                <Link href="/new-arrivals" onClick={toggleDrawer} className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors">
                                    New Arrivals
                                </Link>

                                <div className="border-t border-gray-200 my-3"></div>
                                <Link href="/login" onClick={toggleDrawer} className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors">
                                    Login
                                </Link>
                            </div>

                            {/* Footer Actions */}
                            <div className="p-5 border-t border-gray-200 bg-gray-50">
                                <div className="grid grid-cols-4 gap-3">
                                    <div className="flex flex-col items-center p-2 text-gray-600">
                                        <FiUser size={20} className="mb-1" />
                                        <span className="text-xs">Account</span>
                                    </div>
                                    <div className="flex flex-col items-center p-2 text-gray-600 relative">
                                        <FiHeart size={20} className="mb-1" />
                                        <span className="text-xs">Wishlist</span>
                                        <span className="absolute top-0 right-4 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
                                    </div>
                                    <div className="flex flex-col items-center p-2 text-gray-600 relative">
                                        <FiShoppingCart size={20} className="mb-1" />
                                        <span className="text-xs">Cart</span>
                                        <span className="absolute top-0 right-4 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
                                    </div>
                                    <div className="flex flex-col items-center p-2 text-gray-600">
                                        <FiHeadphones size={20} className="mb-1" />
                                        <span className="text-xs">Support</span>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="mt-4 text-center text-xs text-gray-500">
                                    <p>Need help? Call us at 1-800-FASHION</p>
                                    <p>Mon-Fri 9AM-6PM EST</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Backdrop */}
                        <motion.div
                            onClick={toggleDrawer}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black z-40 md:hidden"
                        />
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;