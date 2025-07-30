# RegalAfacile - Sito di Affiliazione Amazon con AI

Un sito moderno di affiliazione Amazon che utilizza l'intelligenza artificiale di OpenAI per trasformare le ricerche in linguaggio naturale in query ottimizzate per Amazon.

## 🚀 Caratteristiche

- **Ricerca AI-Powered**: Gli utenti possono descrivere quello che cercano in linguaggio naturale
- **Trasformazione Query**: OpenAI trasforma automaticamente le richieste in query ottimizzate
- **Design Moderno**: Interface responsive con i colori ufficiali Amazon
- **Link di Affiliazione**: Tutti i prodotti includono automaticamente il tag di affiliazione
- **Trasparenza**: Mostra chiaramente come l'AI trasforma le query

## 🛠️ Configurazione

### 1. Configurazione Variabili d'Ambiente

Copia il file `.env.example` in `.env` e configura le tue credenziali:

```bash
cp .env.example .env
```

Modifica il file `.env` con le tue credenziali:

```env
# OpenAI API Key per ChatGPT
VITE_OPENAI_API_KEY=sk-your-openai-api-key-here

# Amazon Affiliate Tag
VITE_AMAZON_AFFILIATE_TAG=your-amazon-affiliate-tag-20
```

#### Come ottenere le credenziali:

**OpenAI API Key:**
1. Vai su [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Crea un account o accedi
3. Clicca su "Create new secret key"
4. Copia la chiave nel file `.env`

**Amazon Affiliate Tag:**
1. Iscriviti al [Programma Affiliazione Amazon](https://affiliate-program.amazon.it/)
2. Ottieni il tuo tag di affiliazione
3. Inseriscilo nel file `.env`

### 2. Configurazione Alternativa (UI)
Se non vuoi usare le variabili d'ambiente, puoi configurare l'API Key OpenAI tramite l'interfaccia cliccando su "Configura" nell'header.

### 3. Integrazione API Amazon (Opzionale)
Attualmente l'app usa prodotti demo. Per integrare le API reali di Amazon:
- Iscriviti al [Product Advertising API](https://webservices.amazon.com/paapi5/documentation/)
- Configura `VITE_AMAZON_ACCESS_KEY` e `VITE_AMAZON_SECRET_KEY` nel file `.env`

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