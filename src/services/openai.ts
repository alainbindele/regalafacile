import { OpenAIResponse } from '../types';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const DEFAULT_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';

export class OpenAIService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey || DEFAULT_API_KEY;
  }

  async transformQuery(userQuery: string): Promise<OpenAIResponse> {
    if (!this.apiKey) {
      throw new Error('API Key OpenAI non configurata. Configura VITE_OPENAI_API_KEY nelle variabili d\'ambiente o tramite l\'interfaccia.');
    }

    const prompt = `
Trasforma questa richiesta in linguaggio naturale in una query ottimizzata per la ricerca su Amazon.
Estrai anche categoria, range di prezzo (se specificato) e parole chiave principali.

Richiesta utente: "${userQuery}"

Rispondi SOLO con un JSON valido in questo formato:
{
  "query": "query ottimizzata per Amazon",
  "category": "categoria prodotto",
  "priceRange": {"min": numero, "max": numero} (opzionale),
  "keywords": ["parola1", "parola2", "parola3"]
}

Esempi:
- "Voglio un telefono con buona fotocamera sotto i 800 euro" → {"query": "smartphone fotocamera professionale", "category": "Elettronica", "priceRange": {"max": 800}, "keywords": ["smartphone", "fotocamera", "cellulare"]}
- "Cerco scarpe da running comode" → {"query": "scarpe running ammortizzate", "category": "Scarpe e borse", "keywords": ["scarpe", "running", "sport"]}
`;

    try {
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Sei un esperto di e-commerce che aiuta a ottimizzare le ricerche su Amazon. Rispondi sempre con JSON valido.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 200,
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content;
      
      if (!content) {
        throw new Error('Nessuna risposta da OpenAI');
      }

      // Pulisci la risposta da eventuali caratteri extra
      const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
      
      try {
        return JSON.parse(cleanContent);
      } catch (parseError) {
        console.error('Errore parsing JSON:', cleanContent);
        throw new Error('Risposta OpenAI non valida');
      }
    } catch (error) {
      console.error('Errore OpenAI:', error);
      throw error;
    }
  }
}