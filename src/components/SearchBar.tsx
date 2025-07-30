import React, { useState } from 'react';
import { Search, Loader2, Gift } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  loading: boolean;
  t: (key: string) => string;
  getArray: (key: string) => string[];
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading, t, getArray }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const exampleQueries = getArray('examples');

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <Gift className="search-icon-left w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('searchPlaceholder')}
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
        <p className="examples-title">{t('examplesTitle')}</p>
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