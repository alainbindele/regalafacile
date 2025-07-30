import React from 'react';
import { ArrowRight, Tag, DollarSign, Hash } from 'lucide-react';
import { SearchQuery } from '../types';

interface QueryTransformationProps {
  searchQuery: SearchQuery;
}

export const QueryTransformation: React.FC<QueryTransformationProps> = ({ searchQuery }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Trasformazione AI della Query
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-1">Query originale:</p>
            <p className="bg-white p-3 rounded border italic">"{searchQuery.original}"</p>
          </div>
          <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-1">Query ottimizzata:</p>
            <p className="bg-white p-3 rounded border font-medium">"{searchQuery.transformed}"</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {searchQuery.category && (
            <div className="flex items-center gap-2 bg-white p-3 rounded">
              <Tag className="w-4 h-4 text-blue-600" />
              <div>
                <p className="text-xs text-gray-600">Categoria</p>
                <p className="font-medium">{searchQuery.category}</p>
              </div>
            </div>
          )}

          {searchQuery.priceRange && (
            <div className="flex items-center gap-2 bg-white p-3 rounded">
              <DollarSign className="w-4 h-4 text-green-600" />
              <div>
                <p className="text-xs text-gray-600">Range di prezzo</p>
                <p className="font-medium">
                  {searchQuery.priceRange.min ? `€${searchQuery.priceRange.min}` : '€0'} - 
                  {searchQuery.priceRange.max ? ` €${searchQuery.priceRange.max}` : ' ∞'}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 bg-white p-3 rounded">
            <Hash className="w-4 h-4 text-purple-600" />
            <div>
              <p className="text-xs text-gray-600">Parole chiave</p>
              <p className="font-medium">{searchQuery.keywords.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};