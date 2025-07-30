import React, { useState } from 'react';
import { X, Key, AlertCircle, Shield, Gift } from 'lucide-react';

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
  const envApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!isOpen) return null;

  const handleSave = () => {
    if (apiKey.trim()) {
      onSave(apiKey.trim());
      onClose();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content max-w-md w-full p-8">
        <div className="modal-header">
          <h2 className="modal-title">
            <div className="query-icon">
              <Gift className="w-5 h-5 text-white" />
            </div>
            Configurazione Regalafacile
          </h2>
          <button
            onClick={onClose}
            className="modal-close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          {envApiKey && (
            <div className="modal-info" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', borderColor: '#bbf7d0' }}>
              <div style={{ padding: '0.5rem', background: '#10b981', borderRadius: '0.5rem' }}>
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="modal-info-content" style={{ color: '#047857' }}>
                <p className="modal-info-title">✅ API Key configurata tramite variabili d'ambiente</p>
                <p>La tua API Key è già configurata nel sistema. Non è necessario inserirla manualmente.</p>
              </div>
            </div>
          )}

          <div className="modal-info">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="modal-info-content">
              <p className="modal-info-title">Come ottenere la tua API Key:</p>
              <ol className="modal-info-list">
                <li>Vai su <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="modal-info-link">platform.openai.com</a></li>
                <li>Accedi o crea un account</li>
                <li>Clicca su "Create new secret key"</li>
                <li>Copia la chiave e incollala qui sotto</li>
              </ol>
            </div>
          </div>

          <div className="modal-form-group">
            <label htmlFor="apiKey" className="modal-label">
              API Key OpenAI
            </label>
            <input
              type="password"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="modal-input"
            />
            <div className="modal-security">
              <Shield className="w-4 h-4 text-green-600" />
              <p className="modal-security-text">
                La tua API key viene salvata solo localmente nel browser
              </p>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button
            onClick={onClose}
            className="btn-secondary"
          >
            Annulla
          </button>
          <button
            onClick={handleSave}
            disabled={!apiKey.trim()}
            className="btn-primary"
            style={{ flex: 1 }}
          >
            Salva
          </button>
        </div>
      </div>
    </div>
  );
};