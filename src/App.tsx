import { useState, useEffect } from 'react';
import { ShoppingCart, Settings, Zap } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { ProductCard } from './components/ProductCard';
import { QueryTransformation } from './components/QueryTransformation';
import { ApiKeyModal } from './components/ApiKeyModal';
import { OpenAIService } from './services/openai';
import { amazonService } from './services/amazon';
import { Product, SearchQuery } from './types';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState<SearchQuery | null>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiModal, setShowApiModal] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const handleSaveApiKey = (newApiKey: string) => {
    setApiKey(newApiKey);
    localStorage.setItem('openai_api_key', newApiKey);
  };

  const handleSearch = async (userQuery: string) => {
    if (!apiKey) {
      setShowApiModal(true);
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const openaiService = new OpenAIService(apiKey);
      const aiResponse = await openaiService.transformQuery(userQuery);
      
      const query: SearchQuery = {
        original: userQuery,
        transformed: aiResponse.query,
        category: aiResponse.category,
        priceRange: aiResponse.priceRange,
        keywords: aiResponse.keywords
      };
      
      setSearchQuery(query);
      
      const searchResults = await amazonService.searchProducts(
        aiResponse.query,
        aiResponse.category,
        aiResponse.priceRange
      );
      
      setProducts(searchResults);
    } catch (err) {
      console.error('Errore durante la ricerca:', err);
      setError(err instanceof Error ? err.message : 'Errore durante la ricerca');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-amazon-blue text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">SmartFind</h1>
                <p className="text-sm text-gray-300">Ricerca intelligente su Amazon</p>
              </div>
            </div>
            <button
              onClick={() => setShowApiModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-amazon-orange hover:bg-orange-600 rounded-md transition-colors"
            >
              <Settings className="w-4 h-4" />
              Configura
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-amazon-orange" />
            <h2 className="text-3xl font-bold text-gray-800">
              Trova quello che cerchi con l'AI
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descrivi quello che stai cercando in linguaggio naturale e lascia che l'intelligenza artificiale 
            trovi i migliori prodotti su Amazon per te.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} loading={loading} />

        {/* Error Message */}
        {error && (
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Query Transformation */}
        {searchQuery && (
          <div className="max-w-4xl mx-auto">
            <QueryTransformation searchQuery={searchQuery} />
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Risultati della ricerca ({products.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && !searchQuery && (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Inizia la tua ricerca
            </h3>
            <p className="text-gray-500">
              Usa la barra di ricerca sopra per trovare prodotti su Amazon
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-amazon-blue text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            SmartFind utilizza l'intelligenza artificiale per migliorare la tua esperienza di shopping su Amazon.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Questo sito partecipa al Programma Affiliazione Amazon EU
          </p>
        </div>
      </footer>

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={showApiModal}
        onClose={() => setShowApiModal(false)}
        onSave={handleSaveApiKey}
        currentApiKey={apiKey}
      />
    </div>
  );
}

export default App;