import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  supportedLanguages: Language[];
}

const languageNames: Record<Language, string> = {
  it: 'Italiano',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  zh: '中文'
};

const languageFlags: Record<Language, string> = {
  it: '🇮🇹',
  en: '🇺🇸',
  es: '🇪🇸',
  de: '🇩🇪',
  fr: '🇫🇷',
  zh: '🇨🇳'
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  supportedLanguages
}) => {
  return (
    <div className="language-selector">
      <div className="language-selector-trigger">
        <Globe className="w-4 h-4" />
        <span className="language-flag">{languageFlags[currentLanguage]}</span>
        <span className="language-name">{languageNames[currentLanguage]}</span>
      </div>
      
      <div className="language-selector-dropdown">
        {supportedLanguages.map((lang) => (
          <button
            key={lang}
            onClick={() => onLanguageChange(lang)}
            className={`language-option ${lang === currentLanguage ? 'active' : ''}`}
          >
            <span className="language-flag">{languageFlags[lang]}</span>
            <span className="language-name">{languageNames[lang]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};