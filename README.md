# SmartFind - Sito di Affiliazione Amazon con AI

Un sito moderno di affiliazione Amazon che utilizza l'intelligenza artificiale di OpenAI per trasformare le ricerche in linguaggio naturale in query ottimizzate per Amazon.

## 🚀 Caratteristiche

- **Ricerca AI-Powered**: Gli utenti possono descrivere quello che cercano in linguaggio naturale
- **Trasformazione Query**: OpenAI trasforma automaticamente le richieste in query ottimizzate
- **Design Moderno**: Interface responsive con i colori ufficiali Amazon
- **Link di Affiliazione**: Tutti i prodotti includono automaticamente il tag di affiliazione
- **Trasparenza**: Mostra chiaramente come l'AI trasforma le query

## 🛠️ Configurazione

### 1. API Key OpenAI
- Vai su [platform.openai.com](https://platform.openai.com/api-keys)
- Crea un account o accedi
- Genera una nuova API key
- Inseriscila nell'applicazione cliccando su "Configura"

### 2. Tag di Affiliazione Amazon
Nel file `src/services/amazon.ts`, sostituisci:
```typescript
const AFFILIATE_TAG = 'tuo-tag-affiliato-20';
```
con il tuo vero tag di affiliazione Amazon.

### 3. Integrazione API Amazon (Opzionale)
Attualmente l'app usa prodotti demo. Per integrare le API reali di Amazon:
- Iscriviti al [Product Advertising API](https://webservices.amazon.com/paapi5/documentation/)
- Implementa le chiamate API reali nel servizio Amazon

## 🏃‍♂️ Avvio Rapido

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build
```

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti React
│   ├── SearchBar.tsx   # Barra di ricerca
│   ├── ProductCard.tsx # Card prodotto
│   ├── QueryTransformation.tsx # Visualizzazione trasformazione AI
│   └── ApiKeyModal.tsx # Modal configurazione API
├── services/           # Servizi
│   ├── openai.ts      # Integrazione OpenAI
│   └── amazon.ts      # Servizio Amazon (demo)
├── types/             # Definizioni TypeScript
└── App.tsx           # Componente principale
```

## 🎯 Esempi di Query

- "Voglio un telefono con buona fotocamera sotto i 800 euro"
- "Cerco scarpe da running comode per principianti"
- "Ho bisogno di un laptop per lavoro e studio"
- "Voglio cuffie wireless con cancellazione del rumore"

## 🚀 Deploy

Il sito può essere facilmente deployato su:
- Netlify
- Vercel
- GitHub Pages

## 📝 Note Legali

Ricorda di:
- Rispettare i termini del Programma Affiliazione Amazon
- Includere le disclosure richieste sui link di affiliazione
- Rispettare i limiti di utilizzo delle API OpenAI

## 🤝 Contributi

I contributi sono benvenuti! Sentiti libero di aprire issue o pull request.