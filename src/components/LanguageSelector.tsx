import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
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
    <div className="language-selector-container">
      <div className="language-selector-wrapper">
        <Globe className="w-4 h-4" />
        <select
          value={currentLanguage}
          onChange={(e) => onLanguageChange(e.target.value as Language)}
          className="language-select"
        >
          {supportedLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {languageFlags[lang]} {languageNames[lang]}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 language-chevron" />
      </div>
    </div>
  );
};