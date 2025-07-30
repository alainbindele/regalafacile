import { useState, useEffect } from 'react';
import { ShoppingCart, Settings, Sparkles, TrendingUp } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="header-gradient">
          }}></div>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl hover-lift">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">SmartFind</h1>
                <p className="text-sm text-white/80 font-medium">Ricerca intelligente su Amazon</p>
              </div>
            </div>
            <button
              onClick={() => setShowApiModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-2xl font-semibold transition-all duration-300 hover-lift border border-white/20"
            >
              <Settings className="w-5 h-5" />
              Configura
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50">
              <Sparkles className="w-8 h-8 text-blue-600 floating" />
              <h2 className="text-4xl font-bold gradient-text">
                Trova quello che cerchi con l'AI
              </h2>
              <TrendingUp className="w-8 h-8 text-purple-600 floating-delayed" />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Descrivi quello che stai cercando in linguaggio naturale e lascia che l'intelligenza artificiale 
            trovi i <span className="gradient-text font-bold">migliori prodotti</span> su Amazon per te.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} loading={loading} />

        {/* Error Message */}
        {error && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-6">
              <p className="text-red-800 font-semibold text-center">{error}</p>
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold gradient-text mb-2">
                Risultati della ricerca
              </h3>
              <p className="text-gray-600 font-medium">
                {products.length} prodotti trovati per te
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && !searchQuery && (
          <div className="text-center py-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
              <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-full">
                <ShoppingCart className="w-20 h-20 text-blue-400 floating" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              Inizia la tua ricerca
            </h3>
            <p className="text-gray-600 font-medium text-lg">
              Usa la barra di ricerca sopra per trovare <span className="gradient-text font-bold">prodotti incredibili</span> su Amazon
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer-gradient mt-20">
          }}></div>
        </div>
        <div className="relative container mx-auto px-4 py-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-bold">SmartFind</span>
            </div>
          </div>
          <p className="text-gray-300 font-medium text-lg mb-2">
            SmartFind utilizza l'intelligenza artificiale per migliorare la tua esperienza di shopping su Amazon.
          </p>
          <p className="text-sm text-gray-400 font-medium">
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