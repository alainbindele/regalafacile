import React, { useState } from 'react';
import { X, Key, AlertCircle, Shield } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (apiKey: string) => void;
  currentApiKey?: string;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  currentApiKey 
}) => {
  const [apiKey, setApiKey] = useState(currentApiKey || '');

  if (!isOpen) return null;

  const handleSave = () => {
    if (apiKey.trim()) {
      onSave(apiKey.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl max-w-md w-full p-8 shadow-large border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl">
              <Key className="w-5 h-5 text-white" />
            </div>
            Configurazione API OpenAI
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl mb-6 border border-primary-100">
            <AlertCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-primary-800">
              <p className="font-bold mb-2">Come ottenere la tua API Key:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Vai su <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">platform.openai.com</a></li>
                <li>Accedi o crea un account</li>
                <li>Clicca su "Create new secret key"</li>
                <li>Copia la chiave e incollala qui sotto</li>
              </ol>
            </div>
          </div>

          <label htmlFor="apiKey" className="block text-sm font-bold text-gray-700 mb-3">
            API Key OpenAI
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
          />
          <div className="flex items-center gap-2 mt-3">
            <Shield className="w-4 h-4 text-success-600" />
            <p className="text-xs text-success-700 font-medium">
              La tua API key viene salvata solo localmente nel browser
          </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Annulla
          </button>
          <button
            onClick={handleSave}
            disabled={!apiKey.trim()}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Salva
          </button>
        </div>
      </div>
    </div>
  );
};