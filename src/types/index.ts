export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  affiliateLink: string;
  prime: boolean;
  category: string;
}

export interface SearchQuery {
  original: string;
  transformed: string;
  category?: string;
  priceRange?: {
    min?: number;
    max?: number;
  };
  keywords: string[];
}

export interface OpenAIResponse {
  query: string;
  category: string;
  priceRange?: {
    min?: number;
    max?: number;
  };
  keywords: string[];
}