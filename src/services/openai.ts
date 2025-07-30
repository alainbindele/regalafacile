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
Trasforma questa richiesta di regalo in linguaggio naturale in una query ottimizzata per la ricerca su Amazon.
Estrai anche categoria, range di prezzo (se specificato) e parole chiave principali per trovare il regalo perfetto.

Richiesta regalo: "${userQuery}"

Rispondi SOLO con un JSON valido in questo formato:
{
  "query": "query ottimizzata per Amazon per trovare regali",
  "category": "categoria prodotto",
  "priceRange": {"min": numero, "max": numero} (opzionale),
  "keywords": ["parola1", "parola2", "parola3"]
}

Esempi:
- "Regalo per mia madre che ama cucinare, budget 100 euro" → {"query": "accessori cucina regalo mamma", "category": "Casa e cucina", "priceRange": {"max": 100}, "keywords": ["cucina", "regalo", "mamma", "accessori"]}
- "Compleanno bambino 8 anni appassionato di calcio" → {"query": "regalo calcio bambino 8 anni", "category": "Sport e tempo libero", "keywords": ["calcio", "bambino", "compleanno", "sport"]}
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
              content: 'Sei un esperto di regali che aiuta a trovare il regalo perfetto su Amazon. Analizza la persona, l\'occasione e le preferenze per suggerire regali appropriati. Rispondi sempre con JSON valido.'
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