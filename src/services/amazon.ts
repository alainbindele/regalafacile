import { Product } from '../types';

// Tag di affiliazione Amazon dalle variabili d'ambiente
const AFFILIATE_TAG = import.meta.env.VITE_AMAZON_AFFILIATE_TAG || 'tuo-tag-affiliato-20';
const AMAZON_ACCESS_KEY = import.meta.env.VITE_AMAZON_ACCESS_KEY || '';
const AMAZON_SECRET_KEY = import.meta.env.VITE_AMAZON_SECRET_KEY || '';
const AMAZON_ASSOCIATE_TAG = import.meta.env.VITE_AMAZON_ASSOCIATE_TAG || AFFILIATE_TAG;

export class AmazonService {
  // Prodotti demo per la dimostrazione
  private demoProducts: Product[] = [
    {
      id: '1',
      title: 'iPhone 15 Pro 128GB - Titanio Naturale',
      price: '€1.239,00',
      originalPrice: '€1.399,00',
      rating: 4.5,
      reviewCount: 2847,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
      affiliateLink: `https://amazon.it/dp/B0CHX1W2RE?tag=${AFFILIATE_TAG}`,
      prime: true,
      category: 'Elettronica'
    },
    {
      id: '2',
      title: 'Samsung Galaxy S24 Ultra 256GB',
      price: '€1.099,00',
      rating: 4.4,
      reviewCount: 1923,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop',
      affiliateLink: `https://amazon.it/dp/B0CMDRCZBX?tag=${AFFILIATE_TAG}`,
      prime: true,
      category: 'Elettronica'
    },
    {
      id: '3',
      title: 'Google Pixel 8 Pro 128GB',
      price: '€799,00',
      originalPrice: '€899,00',
      rating: 4.3,
      reviewCount: 1456,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
      affiliateLink: `https://amazon.it/dp/B0CGTNPFZD?tag=${AFFILIATE_TAG}`,
      prime: true,
      category: 'Elettronica'
    },
    {
      id: '4',
      title: 'Nike Air Max 270 Scarpe Running',
      price: '€129,99',
      originalPrice: '€149,99',
      rating: 4.6,
      reviewCount: 3421,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      affiliateLink: `https://amazon.it/dp/B07XQXZXJG?tag=${AFFILIATE_TAG}`,
      prime: true,
      category: 'Scarpe e borse'
    },
    {
      id: '5',
      title: 'Adidas Ultraboost 22 Running',
      price: '€159,95',
      rating: 4.5,
      reviewCount: 2156,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop',
      affiliateLink: `https://amazon.it/dp/B09TQGPZJM?tag=${AFFILIATE_TAG}`,
      prime: true,
      category: 'Scarpe e borse'
    },
    {
      id: '6',
      title: 'MacBook Air M2 13" 256GB',
      price: '€1.249,00',
      originalPrice: '€1.399,00',
      rating: 4.7,
      reviewCount: 1834,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
      affiliateLink: `https://amazon.it/dp/B0B3C2R8MP?tag=${AFFILIATE_TAG}`,
      prime: true,
      category: 'Informatica'
    }
  ];

  async searchProducts(query: string, category?: string, priceRange?: { min?: number; max?: number }): Promise<Product[]> {
    // Simula una chiamata API con delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    let filteredProducts = [...this.demoProducts];

    // Filtra per categoria se specificata
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase().includes(category.toLowerCase()) ||
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filtra per range di prezzo se specificato
    if (priceRange) {
      filteredProducts = filteredProducts.filter(product => {
        const price = parseFloat(product.price.replace(/[€.,]/g, ''));
        const min = priceRange.min || 0;
        const max = priceRange.max || Infinity;
        return price >= min && price <= max;
      });
    }

    // Se non ci sono risultati specifici, restituisci alcuni prodotti casuali
    if (filteredProducts.length === 0) {
      filteredProducts = this.demoProducts.slice(0, 3);
    }

    return filteredProducts.slice(0, 6); // Massimo 6 risultati
  }

  generateAffiliateLink(productId: string): string {
    return `https://amazon.it/dp/${productId}?tag=${AFFILIATE_TAG}`;
  }
}

export const amazonService = new AmazonService();