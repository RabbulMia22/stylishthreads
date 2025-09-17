import React from 'react';
import Link from "next/link";
import products from '../data/product';
import HeroSlider from './HeroSlider';
import ProductCard from './ProductsCard';

const HomePage = () => {
  

  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <div className="mt-2 w-16 h-1 bg-primary-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Shop By Category</h2>
            <div className="mt-2 w-16 h-1 bg-primary-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Men's Category */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Men's Collection" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-3">Men's Collection</h3>
                <Link 
                  href="/products/men" 
                  className="bg-white text-gray-900 hover:bg-primary-500 hover:text-white font-medium py-2 px-5 rounded-md transition duration-300 w-max"
                >
                  Shop Men
                </Link>
              </div>
            </div>
            
            {/* Women's Category */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-3">Women's Collection</h3>
                <Link 
                  href="/products/women" 
                  className="bg-white text-gray-900 hover:bg-primary-500 hover:text-white font-medium py-2 px-5 rounded-md transition duration-300 w-max"
                >
                  Shop Women
                </Link>
              </div>
            </div>
            {/* Kid's Category */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1511733897353-5b04f82435a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMHNob3BwaW5nfGVufDB8fDB8fHww" 
                alt="Women's Collection" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-3">Women's Collection</h3>
                <Link 
                  href="/products/women" 
                  className="bg-white text-gray-900 hover:bg-primary-500 hover:text-white font-medium py-2 px-5 rounded-md transition duration-300 w-max"
                >
                  Shop Women
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 