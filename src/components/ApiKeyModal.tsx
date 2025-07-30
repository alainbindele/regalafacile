import React, { useState } from 'react';
import { X, AlertCircle, Shield, Gift } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (apiKey: string) => void;
  currentApiKey?: string;
  t: (key: string) => string;
  getArray: (key: string) => string[];
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  currentApiKey,
  t,
  getArray
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
            {t('modalTitle')}
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
                <p className="modal-info-title">{t('modalEnvConfigured')}</p>
                <p>{t('modalEnvDescription')}</p>
              </div>
            </div>
          )}

          <div className="modal-info">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="modal-info-content">
              <p className="modal-info-title">{t('modalHowToTitle')}</p>
              <ol className="modal-info-list">
                {getArray('modalSteps').map((step, index) => (
                  <li key={index}>
                    {index === 0 ? (
                      <>
                        {step.split('platform.openai.com')[0]}
                        <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="modal-info-link">
                          platform.openai.com
                        </a>
                        {step.split('platform.openai.com')[1] || ''}
                      </>
                    ) : (
                      step
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="modal-form-group">
            <label htmlFor="apiKey" className="modal-label">
              {t('modalApiKeyLabel')}
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
                {t('modalSecurityText')}
              </p>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button
            onClick={onClose}
            className="btn-secondary"
          >
            {t('cancel')}
          </button>
          <button
            onClick={handleSave}
            disabled={!apiKey.trim()}
            className="btn-primary"
            style={{ flex: 1 }}
          >
            {t('save')}
          </button>
        </div>
      </div>
    </div>
  );
};