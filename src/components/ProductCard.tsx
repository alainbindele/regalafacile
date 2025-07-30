import React from 'react';
import { Star, Truck, ExternalLink, Heart } from 'lucide-react';
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
    <div className="group product-card">
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        {product.prime && (
          <div className="absolute top-3 left-3 badge-prime">
            <Truck className="w-3 h-3" />
            Prime
          </div>
        )}
      </div>

      <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 min-h-[3rem] text-lg group-hover:text-blue-700 transition-colors">
        {product.title}
      </h3>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center">
          {renderStars(product.rating)}
        </div>
        <span className="text-sm text-gray-500 font-medium">({product.reviewCount.toLocaleString()})</span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl font-bold text-gray-900">{product.price}</span>
        {product.originalPrice && (
          <>
            <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
            <span className="badge-discount">
              SCONTO
            </span>
          </>
        )}
      </div>

      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full group/btn"
      >
        Vedi su Amazon
        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};