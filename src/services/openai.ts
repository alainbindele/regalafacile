import { OpenAIResponse, Language } from '../types';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const DEFAULT_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';

export class OpenAIService {
  private apiKey: string;
  private language: Language;

  constructor(apiKey: string, language: Language = 'it') {
    this.apiKey = apiKey || DEFAULT_API_KEY;
    this.language = language;
  }

  async transformQuery(userQuery: string): Promise<OpenAIResponse> {
    if (!this.apiKey) {
      throw new Error('OpenAI API Key not configured. Configure VITE_OPENAI_API_KEY in environment variables or via the interface.');
    }

    const prompts = {
      it: `Trasforma questa richiesta di regalo in linguaggio naturale in una query ottimizzata per la ricerca su Amazon.
Estrai anche categoria, range di prezzo (se specificato) e parole chiave principali per trovare il regalo perfetto.`,
      en: `Transform this natural language gift request into an optimized Amazon search query.
Also extract category, price range (if specified) and main keywords to find the perfect gift.`,
      es: `Transforma esta solicitud de regalo en lenguaje natural en una consulta optimizada para búsqueda en Amazon.
También extrae categoría, rango de precio (si se especifica) y palabras clave principales para encontrar el regalo perfecto.`,
      de: `Verwandle diese natürlichsprachige Geschenkanfrage in eine optimierte Amazon-Suchanfrage.
Extrahiere auch Kategorie, Preisbereich (falls angegeben) und Hauptschlüsselwörter, um das perfekte Geschenk zu finden.`,
      fr: `Transformez cette demande de cadeau en langage naturel en une requête optimisée pour la recherche Amazon.
Extrayez aussi la catégorie, la gamme de prix (si spécifiée) et les mots-clés principaux pour trouver le cadeau parfait.`,
      zh: `将这个自然语言礼物请求转换为优化的亚马逊搜索查询。
还要提取类别、价格范围（如果指定）和主要关键词来找到完美的礼物。`
    };

    const examples = {
      it: `Esempi:
- "Regalo per mia madre che ama cucinare, budget 100 euro" → {"query": "accessori cucina regalo mamma", "category": "Casa e cucina", "priceRange": {"max": 100}, "keywords": ["cucina", "regalo", "mamma", "accessori"]}
- "Compleanno bambino 8 anni appassionato di calcio" → {"query": "regalo calcio bambino 8 anni", "category": "Sport e tempo libero", "keywords": ["calcio", "bambino", "compleanno", "sport"]}`,
      en: `Examples:
- "Gift for my mother who loves cooking, budget $100" → {"query": "kitchen accessories gift mom", "category": "Home & Kitchen", "priceRange": {"max": 100}, "keywords": ["kitchen", "gift", "mom", "accessories"]}
- "8-year-old boy birthday, passionate about soccer" → {"query": "soccer gift boy 8 years", "category": "Sports & Outdoors", "keywords": ["soccer", "boy", "birthday", "sports"]}`,
      es: `Ejemplos:
- "Regalo para mi madre que ama cocinar, presupuesto 100 euros" → {"query": "accesorios cocina regalo mamá", "category": "Hogar y cocina", "priceRange": {"max": 100}, "keywords": ["cocina", "regalo", "mamá", "accesorios"]}
- "Cumpleaños niño 8 años apasionado del fútbol" → {"query": "regalo fútbol niño 8 años", "category": "Deportes y aire libre", "keywords": ["fútbol", "niño", "cumpleaños", "deportes"]}`,
      de: `Beispiele:
- "Geschenk für meine Mutter, die gerne kocht, Budget 100 Euro" → {"query": "küchenzubehör geschenk mama", "category": "Küche & Haushalt", "priceRange": {"max": 100}, "keywords": ["küche", "geschenk", "mama", "zubehör"]}
- "Geburtstag 8-jähriger Junge, leidenschaftlicher Fußballfan" → {"query": "fußball geschenk junge 8 jahre", "category": "Sport & Freizeit", "keywords": ["fußball", "junge", "geburtstag", "sport"]}`,
      fr: `Exemples:
- "Cadeau pour ma mère qui aime cuisiner, budget 100 euros" → {"query": "accessoires cuisine cadeau maman", "category": "Cuisine & Maison", "priceRange": {"max": 100}, "keywords": ["cuisine", "cadeau", "maman", "accessoires"]}
- "Anniversaire garçon 8 ans passionné de football" → {"query": "cadeau football garçon 8 ans", "category": "Sports et Loisirs", "keywords": ["football", "garçon", "anniversaire", "sports"]}`,
      zh: `示例:
- "给爱做饭的妈妈的礼物，预算100欧元" → {"query": "厨房配件礼物妈妈", "category": "家居厨具", "priceRange": {"max": 100}, "keywords": ["厨房", "礼物", "妈妈", "配件"]}
- "8岁男孩生日，热爱足球" → {"query": "足球礼物男孩8岁", "category": "运动户外", "keywords": ["足球", "男孩", "生日", "运动"]}`
    };

    const prompt = `${prompts[this.language]}

礼物请求: "${userQuery}"

请仅用有效的JSON格式回复:
{
  "query": "optimized Amazon query to find gifts",
  "category": "product category",
  "priceRange": {"min": numero, "max": numero} (opzionale),
  "keywords": ["word1", "word2", "word3"]
}

${examples[this.language]}`;

    try {
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: this.language === 'it' 
                ? 'Sei un esperto di regali che aiuta a trovare il regalo perfetto su Amazon. Analizza la persona, l\'occasione e le preferenze per suggerire regali appropriati. Rispondi sempre con JSON valido.'
                : 'You are a gift expert who helps find the perfect gift on Amazon. Analyze the person, occasion and preferences to suggest appropriate gifts. Always respond with valid JSON.'
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
        throw new Error('No response from OpenAI');
      }

      // Pulisci la risposta da eventuali caratteri extra
      const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
      
      try {
        return JSON.parse(cleanContent);
      } catch (parseError) {
        console.error('Errore parsing JSON:', cleanContent);
        throw new Error('Invalid OpenAI response');
      }
    } catch (error) {
      console.error('Errore OpenAI:', error);
      throw error;
    }
  }
}