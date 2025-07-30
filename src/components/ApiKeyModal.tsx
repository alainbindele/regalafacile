import React, { useState } from 'react';
import { X, Key, AlertCircle } from 'lucide-react';

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Key className="w-5 h-5" />
            Configurazione API OpenAI
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-4">
          <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg mb-4">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Come ottenere la tua API Key:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Vai su <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">platform.openai.com</a></li>
                <li>Accedi o crea un account</li>
                <li>Clicca su "Create new secret key"</li>
                <li>Copia la chiave e incollala qui sotto</li>
              </ol>
            </div>
          </div>

          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
            API Key OpenAI
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            La tua API key viene salvata solo localmente nel browser
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Annulla
          </button>
          <button
            onClick={handleSave}
            disabled={!apiKey.trim()}
            className="flex-1 btn-amazon disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Salva
          </button>
        </div>
      </div>
    </div>
  );
};