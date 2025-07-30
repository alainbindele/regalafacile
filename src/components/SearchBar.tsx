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
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <Sparkles className="search-icon-left w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Descrivi quello che stai cercando in linguaggio naturale..."
          className="search-input"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="search-button"
        >
          {loading ? (
            <Loader2 className="w-6 h-6 spin" />
          ) : (
            <Search className="w-6 h-6" />
          )}
        </button>
      </form>

      <div className="examples-section">
        <p className="examples-title">✨ Prova con questi esempi:</p>
        <div className="examples-grid">
          {exampleQueries.map((example, index) => (
            <button
              key={index}
              onClick={() => setQuery(example)}
              className="example-button"
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