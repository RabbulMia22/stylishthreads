"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosShirt, IoIosWoman, IoIosMan, IoIosBody,  } from "react-icons/io";
import { IoWalk, IoFootsteps } from "react-icons/io5";
import { GiLargeDress } from "react-icons/gi";
import { FaTshirt, FaChild } from "react-icons/fa";

function Products() {
  const menuItems = [  
    { label: "Shoes", link: "/shoes", icon: <IoFootsteps className="text-purple-500" /> },
    { label: "T-Shirts", link: "/tshirts", icon: <FaTshirt className="text-red-500" /> },
    { label: "Pants", link: "/pants", icon: <IoIosBody className="text-indigo-500" /> },
    { label: "Dresses", link: "/dresses", icon: <GiLargeDress className="text-rose-500" /> },
    { label: "Accessories", link: "/accessories", icon: <IoIosShirt className="text-amber-500" /> },
  ];

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="group relative"
      ref={dropdownRef}
      onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setOpen(false) : undefined}
    >
      {/* Desktop: Shop Text */}
      <span className="text-gray-800  transition-colors duration-200 font-medium px-3 py-2 rounded-lg cursor-default hidden md:inline-flex items-center hover:text-blue-600">
        Product
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        
      </span>
      

      {/* Mobile: Clickable area for both text and icon */}
      <button
        onClick={() => isMobile && setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full md:hidden gap-1 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="text-gray-800 font-medium">Product</span>
        <IoIosArrowDown
          className={`text-gray-800 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`${isMobile ? "relative mt-2" : "absolute left-0 mt-3"} z-50`}
          >
            {/* Curved top element */}
            <div className="absolute -top-2 left-6 w-5 h-4 overflow-hidden z-40">
              <div className="w-4 h-4 bg-white rounded-b-full shadow-md transform rotate-180"></div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden w-72 backdrop-blur-sm bg-opacity-95">
              {/* Header with icon and title */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-3 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-xl shadow-sm">
                    <IoIosShirt className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-800">Products Categories</h3>
                    <p className="text-xs text-gray-500">Browse our collections</p>
                  </div>
                </div>
              </div>
              
              {/* Search box */}
              
              
              {/* Menu items with scroll for many options */}
              <div className="max-h-80 overflow-y-auto py-2 custom-scrollbar">
                <ul className="space-y-1 px-2">
                  {menuItems.map(({ label, link, icon }) => (
                    <motion.li 
                      key={label}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href={link}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 rounded-xl group"
                      >
                        <span className="mr-3 text-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-200">
                          {icon}
                        </span>
                        <span className="text-sm font-medium">{label}</span>
                        <svg 
                          className="ml-auto h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Footer with call to action */}
              <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
                <button className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  View All Categories
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c5c5c5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
}

export default Products;