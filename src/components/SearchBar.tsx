import React, { useState } from 'react';
import { Search, Loader2, Gift } from 'lucide-react';

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
    "Regalo per mia madre che ama cucinare, budget 100 euro",
    "Compleanno bambino 8 anni appassionato di calcio",
    "Anniversario fidanzata romantica, qualcosa di speciale",
    "Regalo Natale papà tecnologico sotto i 200 euro",
    "Laurea migliore amica che ama leggere"
  ];

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <Gift className="search-icon-left w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Descrivi la persona e l'occasione (es: regalo compleanno mamma che ama cucinare)..."
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
        <p className="examples-title">🎁 Prova con questi esempi:</p>
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