import { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

const SUPPORTED_LANGUAGES: Language[] = ['it', 'en', 'es', 'de', 'fr', 'zh'];

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  // Exact match
  if (SUPPORTED_LANGUAGES.includes(browserLang as Language)) {
    return browserLang as Language;
  }
  
  // Language code match (e.g., 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0] as Language;
  if (SUPPORTED_LANGUAGES.includes(langCode)) {
    return langCode;
  }
  
  // Default to Italian
  return 'it';
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('regalafacile_language');
    if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
      return saved as Language;
    }
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('regalafacile_language', language);
  }, [language]);

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value !== 'string') {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    
    if (params) {
      return Object.entries(params).reduce((str, [param, val]) => {
        return str.replace(`{${param}}`, String(val));
      }, value);
    }
    
    return value;
  };

  const getArray = (key: string): string[] => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (!Array.isArray(value)) {
      console.warn(`Translation array missing for key: ${key} in language: ${language}`);
      return [];
    }
    
    return value;
  };

  return {
    language,
    setLanguage,
    t,
    getArray,
    supportedLanguages: SUPPORTED_LANGUAGES
  };
};