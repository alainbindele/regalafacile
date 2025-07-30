import React from 'react';
import { ArrowRight, Tag, DollarSign, Hash, Zap } from 'lucide-react';
import { SearchQuery } from '../types';

interface QueryTransformationProps {
  searchQuery: SearchQuery;
}

export const QueryTransformation: React.FC<QueryTransformationProps> = ({ searchQuery }) => {
  return (
    <div className="query-card mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
          <Zap className="w-5 h-5 text-white" />
        </div>
        Trasformazione AI della Query
      </h3>
      
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Query originale:</p>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
              <p className="italic text-gray-700">"{searchQuery.original}"</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Query ottimizzata:</p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
              <p className="font-semibold text-blue-800">"{searchQuery.transformed}"</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {searchQuery.category && (
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Tag className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Categoria</p>
                <p className="font-bold text-blue-800">{searchQuery.category}</p>
              </div>
            </div>
          )}

          {searchQuery.priceRange && (
            <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <div className="p-2 bg-green-500 rounded-lg">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">Range di prezzo</p>
                <p className="font-bold text-green-800">
                  {searchQuery.priceRange.min ? `€${searchQuery.priceRange.min}` : '€0'} - 
                  {searchQuery.priceRange.max ? ` €${searchQuery.priceRange.max}` : ' ∞'}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Hash className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Parole chiave</p>
              <p className="font-bold text-purple-800">{searchQuery.keywords.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
  );
};