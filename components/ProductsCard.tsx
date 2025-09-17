import React from 'react';
import Link from "next/link";
import { Star, StarHalf } from 'lucide-react';

const ProductCard = ({ product }: { product: any }) => {
  const { id, title, price, images, rating, category } = product;

  const renderStars = (rating: number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // full star
      stars.push(<Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    } else if (rating >= i - 0.5) {
      // half star
      stars.push(<StarHalf key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    } else {
      // empty star
      stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
    }
  }

  return stars;
};

  return (

    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-2 left-2 bg-[#F05252] text-white px-2 py-1 rounded text-xs font-medium capitalize">
            {category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-gray-900 font-medium text-sm mb-1 group-hover:text-primary-500 transition-colors">
            {title}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {renderStars(rating)}
            </div>
            <span className="ml-2 text-sm text-gray-500">{rating}</span>
          </div>
          <p className="text-primary-500 font-semibold">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 