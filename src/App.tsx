import { useState } from 'react';
import { Gift, Heart } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { ProductCard } from './components/ProductCard';
import { LanguageSelector } from './components/LanguageSelector';
import { OpenAIService } from './services/openai';
import { amazonService } from './services/amazon';
import { Product, SearchQuery } from './types';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState<SearchQuery | null>(null);
  const [error, setError] = useState<string>('');
  const { language, setLanguage, t, getArray, supportedLanguages } = useLanguage();

  const handleSearch = async (userQuery: string) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    
    if (!apiKey) {
      setError(t('errorApiKey'));
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const openaiService = new OpenAIService(language);
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
      setError(err instanceof Error ? err.message : t('errorSearch'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="header-gradient">
        <div className="container">
          <div className="header-content">
            <div className="header-logo">
              <div className="logo-icon">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div className="logo-text">
                <h1>{t('headerTitle')}</h1>
                <p className="text-sm text-white/80 font-medium">{t('headerSubtitle')}</p>
              </div>
            </div>
            <div className="header-actions">
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={setLanguage}
                supportedLanguages={supportedLanguages}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-title-container">
            <div className="hero-title-bg"></div>
            <div className="hero-title-content">
              <Gift className="w-10 h-10 text-pink-600 floating" />
              <h2 className="hero-title">
                {t('heroTitle')}
              </h2>
              <Heart className="w-8 h-8 text-red-500 floating-delayed" />
            </div>
          </div>
          <p className="hero-description">
            {t('heroDescription').replace('{highlight}', t('heroHighlight'))}
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} loading={loading} t={t} getArray={getArray} />

        {/* Loading Spinner */}
        {loading && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="loading-container">
              <div className="loading-spinner">
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
              </div>
              <div className="loading-content">
                <h3 className="loading-title">{t('loadingTitle')}</h3>
                <p className="loading-description">{t('loadingDescription')}</p>
                <div className="loading-steps">
                  <div className="loading-step">
                    <div className="step-icon step-active">
                      <div className="step-pulse"></div>
                      1
                    </div>
                    <span className="step-text">{t('loadingStep1')}</span>
                  </div>
                  <div className="loading-step">
                    <div className="step-icon step-active">
                      <div className="step-pulse step-delay-1"></div>
                      2
                    </div>
                    <span className="step-text">{t('loadingStep2')}</span>
                  </div>
                  <div className="loading-step">
                    <div className="step-icon step-active">
                      <div className="step-pulse step-delay-2"></div>
                      3
                    </div>
                    <span className="step-text">{t('loadingStep3')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-6">
              <p className="text-red-800 font-semibold text-center">{error}</p>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 && (
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold gradient-text mb-2">
                {t('productsTitle')}
              </h3>
              <p className="text-gray-600 font-medium">
                {t('productsSubtitle', { count: products.length })}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} t={t} />
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
                <Gift className="w-20 h-20 text-pink-400 floating" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              {t('emptyStateTitle')}
            </h3>
            <p className="text-gray-600 font-medium text-lg">
              {t('emptyStateDescription')}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer-gradient mt-20">
        <div className="relative container mx-auto px-4 py-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Gift className="w-5 h-5 text-white" />
              <span className="text-white font-bold">Regalafacile.com</span>
            </div>
          </div>
          <p className="text-gray-300 font-medium text-lg mb-2">
            {t('footerDescription')}
          </p>
          <p className="text-sm text-gray-400 font-medium">
            {t('footerDisclaimer')}
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;