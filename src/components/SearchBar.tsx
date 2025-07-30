import React, { useState } from 'react';
import { Search, Loader2, Sparkles } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const exampleQueries = [
    "Voglio un telefono con buona fotocamera sotto i 800 euro",
    "Cerco scarpe da running comode per principianti",
    "Ho bisogno di un laptop per lavoro e studio",
    "Voglio cuffie wireless con cancellazione del rumore"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl"></div>
        <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Descrivi quello che stai cercando in linguaggio naturale..."
            className="w-full px-6 py-5 pr-16 text-lg bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-2xl focus:border-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-100 shadow-soft transition-all duration-300 placeholder-gray-400"
            disabled={loading}
          />
          <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-medium hover:shadow-colored transition-all duration-300"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Search className="w-6 h-6" />
            )}
          </button>
        </div>
        </form>
      </div>

      <div className="text-center space-y-4">
        <p className="text-gray-600 font-medium">✨ Prova con questi esempi:</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {exampleQueries.map((example, index) => (
            <button
              key={index}
              onClick={() => setQuery(example)}
              className="px-4 py-2 text-sm bg-white/70 hover:bg-white/90 backdrop-blur-sm rounded-full border border-white/50 hover:border-primary-200 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
              disabled={loading}
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};