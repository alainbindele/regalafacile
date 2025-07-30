import React from 'react';
import { ArrowRight, Tag, DollarSign, Hash, Zap } from 'lucide-react';
import { SearchQuery } from '../types';

interface QueryTransformationProps {
  searchQuery: SearchQuery;
}

export const QueryTransformation: React.FC<QueryTransformationProps> = ({ searchQuery }) => {
  return (
    <div className="query-card mb-8">
      <h3 className="query-title">
        <div className="query-icon">
          <Zap className="w-5 h-5 text-white" />
        </div>
        Trasformazione AI della Query
      </h3>
      
      <div className="query-content">
        <div className="query-comparison">
          <div className="query-section">
            <p className="query-label">Query originale:</p>
            <div className="query-original">
              <p>"{searchQuery.original}"</p>
            </div>
          </div>
          <div className="query-section">
            <p className="query-label">Query ottimizzata:</p>
            <div className="query-transformed">
              <p>"{searchQuery.transformed}"</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="query-arrow">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="query-details">
          {searchQuery.category && (
            <div className="query-detail-item query-detail-category">
              <div className="query-detail-icon category">
                <Tag className="w-4 h-4 text-white" />
              </div>
              <div className="query-detail-content">
                <p className="query-detail-label category">Categoria</p>
                <p className="query-detail-value category">{searchQuery.category}</p>
              </div>
            </div>
          )}

          {searchQuery.priceRange && (
            <div className="query-detail-item query-detail-price">
              <div className="query-detail-icon price">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div className="query-detail-content">
                <p className="query-detail-label price">Range di prezzo</p>
                <p className="query-detail-value price">
                  {searchQuery.priceRange.min ? `€${searchQuery.priceRange.min}` : '€0'} - 
                  {searchQuery.priceRange.max ? ` €${searchQuery.priceRange.max}` : ' ∞'}
                </p>
              </div>
            </div>
          )}

          <div className="query-detail-item query-detail-keywords">
            <div className="query-detail-icon keywords">
              <Hash className="w-4 h-4 text-white" />
            </div>
            <div className="query-detail-content">
              <p className="query-detail-label keywords">Parole chiave</p>
              <p className="query-detail-value keywords">{searchQuery.keywords.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};