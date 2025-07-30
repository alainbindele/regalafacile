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
      stars.push(<Star key={i} className="w-4 h-4 star-filled" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 star-filled opacity-50" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 star-empty" />);
    }

    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        {product.prime && (
          <div className="product-badge-prime">
            <Truck className="w-3 h-3" />
            Prime
          </div>
        )}
      </div>

      <h3 className="product-title">
        {product.title}
      </h3>

      <div className="product-rating">
        <div className="product-stars">
          {renderStars(product.rating)}
        </div>
        <span className="product-reviews">({product.reviewCount.toLocaleString()})</span>
      </div>

      <div className="product-price-container">
        <span className="product-price">{product.price}</span>
        {product.originalPrice && (
          <>
            <span className="product-original-price">{product.originalPrice}</span>
            <span className="product-discount-badge">
              SCONTO
            </span>
          </>
        )}
      </div>

      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{ width: '100%' }}
      >
        Vedi su Amazon
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};