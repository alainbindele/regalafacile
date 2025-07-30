import React from 'react';
import { Star, Truck } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-amazon-yellow text-amazon-yellow" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-amazon-yellow/50 text-amazon-yellow" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg card-shadow p-4 hover:scale-105 transition-transform duration-200">
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md"
        />
        {product.prime && (
          <div className="absolute top-2 right-2 bg-amazon-blue text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
            <Truck className="w-3 h-3" />
            Prime
          </div>
        )}
      </div>

      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
        {product.title}
      </h3>

      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center">
          {renderStars(product.rating)}
        </div>
        <span className="text-sm text-gray-600">({product.reviewCount.toLocaleString()})</span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl font-bold text-amazon-orange">{product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
        )}
      </div>

      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center btn-amazon"
      >
        Vedi su Amazon
      </a>
    </div>
  );
};