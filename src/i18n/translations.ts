import { Translation } from '../types';

export const translations: Record<string, Translation> = {
  it: {
    // Header
    headerTitle: 'Regalafacile',
    headerSubtitle: 'Trova il regalo perfetto',
    
    // Hero
    heroTitle: 'Il Regalo Perfetto per Ogni Occasione',
    heroDescription: 'Descrivi la persona e l\'occasione in linguaggio naturale e lascia che l\'intelligenza artificiale trovi il regalo perfetto su Amazon per te.',
    heroHighlight: 'regalo perfetto',
    
    // Search
    searchPlaceholder: 'Descrivi la persona e l\'occasione (es: regalo compleanno mamma che ama cucinare)...',
    examplesTitle: '🎁 Prova con questi esempi:',
    examples: [
      'Regalo per mia madre che ama cucinare, budget 100 euro',
      'Compleanno bambino 8 anni appassionato di calcio',
      'Anniversario fidanzata romantica, qualcosa di speciale',
      'Regalo Natale papà tecnologico sotto i 200 euro',
      'Laurea migliore amica che ama leggere'
    ],
    
    // Query transformation
    queryTransformationTitle: 'Trasformazione AI della Query',
    originalQuery: 'Query originale:',
    optimizedQuery: 'Query ottimizzata:',
    category: 'Categoria',
    priceRange: 'Range di prezzo',
    keywords: 'Parole chiave',
    
    // Products
    productsTitle: '🎁 Regali Perfetti Trovati',
    productsSubtitle: '{count} idee regalo selezionate per te',
    viewOnAmazon: 'Vedi su Amazon',
    prime: 'Prime',
    discount: 'SCONTO',
    
    // Empty state
    emptyStateTitle: 'Inizia la ricerca del regalo perfetto',
    emptyStateDescription: 'Descrivi la persona e l\'occasione per trovare regali straordinari su Amazon',
    
    // Modal
    modalTitle: 'Configurazione Regalafacile',
    modalEnvConfigured: '✅ API Key configurata tramite variabili d\'ambiente',
    modalEnvDescription: 'La tua API Key è già configurata nel sistema. Non è necessario inserirla manualmente.',
    modalHowToTitle: 'Come ottenere la tua API Key:',
    modalSteps: [
      'Vai su platform.openai.com',
      'Accedi o crea un account',
      'Clicca su "Create new secret key"',
      'Copia la chiave e incollala qui sotto'
    ],
    modalApiKeyLabel: 'API Key OpenAI',
    modalSecurityText: 'La tua API key viene salvata solo localmente nel browser',
    cancel: 'Annulla',
    save: 'Salva',
    
    // Footer
    footerDescription: 'Regalafacile utilizza l\'intelligenza artificiale per trovare il regalo perfetto per ogni occasione.',
    footerDisclaimer: 'Questo sito partecipa al Programma Affiliazione Amazon EU',
    
    // Errors
    errorApiKey: 'API Key OpenAI non configurata. Configura VITE_OPENAI_API_KEY nelle variabili d\'ambiente.',
    errorOpenAI: 'Errore OpenAI:',
    errorSearch: 'Errore durante la ricerca'
  },
  
  en: {
    // Header
    headerTitle: 'Regalafacile',
    headerSubtitle: 'Find the perfect gift',
    
    // Hero
    heroTitle: 'The Perfect Gift for Every Occasion',
    heroDescription: 'Describe the person and occasion in natural language and let artificial intelligence find the perfect gift on Amazon for you.',
    heroHighlight: 'perfect gift',
    
    // Search
    searchPlaceholder: 'Describe the person and occasion (e.g., birthday gift for mom who loves cooking)...',
    examplesTitle: '🎁 Try these examples:',
    examples: [
      'Gift for my mother who loves cooking, budget $100',
      '8-year-old boy birthday, passionate about soccer',
      'Romantic anniversary for girlfriend, something special',
      'Christmas gift for tech-savvy dad under $200',
      'Graduation gift for best friend who loves reading'
    ],
    
    // Query transformation
    queryTransformationTitle: 'AI Query Transformation',
    originalQuery: 'Original query:',
    optimizedQuery: 'Optimized query:',
    category: 'Category',
    priceRange: 'Price range',
    keywords: 'Keywords',
    
    // Products
    productsTitle: '🎁 Perfect Gifts Found',
    productsSubtitle: '{count} gift ideas selected for you',
    viewOnAmazon: 'View on Amazon',
    prime: 'Prime',
    discount: 'DISCOUNT',
    
    // Empty state
    emptyStateTitle: 'Start searching for the perfect gift',
    emptyStateDescription: 'Describe the person and occasion to find amazing gifts on Amazon',
    
    // Modal
    modalTitle: 'Regalafacile Configuration',
    modalEnvConfigured: '✅ API Key configured via environment variables',
    modalEnvDescription: 'Your API Key is already configured in the system. No need to enter it manually.',
    modalHowToTitle: 'How to get your API Key:',
    modalSteps: [
      'Go to platform.openai.com',
      'Sign in or create an account',
      'Click "Create new secret key"',
      'Copy the key and paste it below'
    ],
    modalApiKeyLabel: 'OpenAI API Key',
    modalSecurityText: 'Your API key is saved locally in the browser only',
    cancel: 'Cancel',
    save: 'Save',
    
    // Footer
    footerDescription: 'Regalafacile uses artificial intelligence to find the perfect gift for every occasion.',
    footerDisclaimer: 'This site participates in the Amazon EU Affiliate Program',
    
    // Errors
    errorApiKey: 'OpenAI API Key not configured. Configure VITE_OPENAI_API_KEY in environment variables.',
    errorOpenAI: 'OpenAI Error:',
    errorSearch: 'Error during search'
  },
  
  es: {
    // Header
    headerTitle: 'Regalafacile',
    headerSubtitle: 'Encuentra el regalo perfecto',
    
    // Hero
    heroTitle: 'El Regalo Perfecto para Cada Ocasión',
    heroDescription: 'Describe la persona y la ocasión en lenguaje natural y deja que la inteligencia artificial encuentre el regalo perfecto en Amazon para ti.',
    heroHighlight: 'regalo perfecto',
    
    // Search
    searchPlaceholder: 'Describe la persona y la ocasión (ej: regalo cumpleaños mamá que ama cocinar)...',
    examplesTitle: '🎁 Prueba con estos ejemplos:',
    examples: [
      'Regalo para mi madre que ama cocinar, presupuesto 100 euros',
      'Cumpleaños niño 8 años apasionado del fútbol',
      'Aniversario novia romántica, algo especial',
      'Regalo Navidad papá tecnológico bajo 200 euros',
      'Graduación mejor amiga que ama leer'
    ],
    
    // Query transformation
    queryTransformationTitle: 'Transformación IA de la Consulta',
    originalQuery: 'Consulta original:',
    optimizedQuery: 'Consulta optimizada:',
    category: 'Categoría',
    priceRange: 'Rango de precio',
    keywords: 'Palabras clave',
    
    // Products
    productsTitle: '🎁 Regalos Perfectos Encontrados',
    productsSubtitle: '{count} ideas de regalo seleccionadas para ti',
    viewOnAmazon: 'Ver en Amazon',
    prime: 'Prime',
    discount: 'DESCUENTO',
    
    // Empty state
    emptyStateTitle: 'Comienza la búsqueda del regalo perfecto',
    emptyStateDescription: 'Describe la persona y la ocasión para encontrar regalos extraordinarios en Amazon',
    
    // Modal
    modalTitle: 'Configuración Regalafacile',
    modalEnvConfigured: '✅ API Key configurada via variables de entorno',
    modalEnvDescription: 'Tu API Key ya está configurada en el sistema. No es necesario ingresarla manualmente.',
    modalHowToTitle: 'Cómo obtener tu API Key:',
    modalSteps: [
      'Ve a platform.openai.com',
      'Inicia sesión o crea una cuenta',
      'Haz clic en "Create new secret key"',
      'Copia la clave y pégala abajo'
    ],
    modalApiKeyLabel: 'API Key OpenAI',
    modalSecurityText: 'Tu API key se guarda solo localmente en el navegador',
    cancel: 'Cancelar',
    save: 'Guardar',
    
    // Footer
    footerDescription: 'Regalafacile utiliza inteligencia artificial para encontrar el regalo perfecto para cada ocasión.',
    footerDisclaimer: 'Este sitio participa en el Programa de Afiliados de Amazon EU',
    
    // Errors
    errorApiKey: 'Clave API OpenAI no configurada. Configura VITE_OPENAI_API_KEY en variables de entorno.',
    errorOpenAI: 'Error OpenAI:',
    errorSearch: 'Error durante la búsqueda'
  },
  
  de: {
    // Header
    headerTitle: 'Regalafacile',
    headerSubtitle: 'Finde das perfekte Geschenk',
    
    // Hero
    heroTitle: 'Das Perfekte Geschenk für Jeden Anlass',
    heroDescription: 'Beschreibe die Person und den Anlass in natürlicher Sprache und lass die künstliche Intelligenz das perfekte Geschenk auf Amazon für dich finden.',
    heroHighlight: 'perfekte Geschenk',
    
    // Search
    searchPlaceholder: 'Beschreibe die Person und den Anlass (z.B.: Geburtstagsgeschenk für Mama, die gerne kocht)...',
    examplesTitle: '🎁 Probiere diese Beispiele:',
    examples: [
      'Geschenk für meine Mutter, die gerne kocht, Budget 100 Euro',
      'Geburtstag 8-jähriger Junge, leidenschaftlicher Fußballfan',
      'Romantischer Jahrestag für Freundin, etwas Besonderes',
      'Weihnachtsgeschenk für technikbegeisterten Papa unter 200 Euro',
      'Abschlussgeschenk für beste Freundin, die gerne liest'
    ],
    
    // Query transformation
    queryTransformationTitle: 'KI-Abfrage-Transformation',
    originalQuery: 'Ursprüngliche Abfrage:',
    optimizedQuery: 'Optimierte Abfrage:',
    category: 'Kategorie',
    priceRange: 'Preisbereich',
    keywords: 'Schlüsselwörter',
    
    // Products
    productsTitle: '🎁 Perfekte Geschenke Gefunden',
    productsSubtitle: '{count} Geschenkideen für dich ausgewählt',
    viewOnAmazon: 'Auf Amazon ansehen',
    prime: 'Prime',
    discount: 'RABATT',
    
    // Empty state
    emptyStateTitle: 'Beginne die Suche nach dem perfekten Geschenk',
    emptyStateDescription: 'Beschreibe die Person und den Anlass, um außergewöhnliche Geschenke auf Amazon zu finden',
    
    // Modal
    modalTitle: 'Regalafacile Konfiguration',
    modalEnvConfigured: '✅ API Key über Umgebungsvariablen konfiguriert',
    modalEnvDescription: 'Dein API Key ist bereits im System konfiguriert. Du musst ihn nicht manuell eingeben.',
    modalHowToTitle: 'So erhältst du deinen API Key:',
    modalSteps: [
      'Gehe zu platform.openai.com',
      'Melde dich an oder erstelle ein Konto',
      'Klicke auf "Create new secret key"',
      'Kopiere den Schlüssel und füge ihn unten ein'
    ],
    modalApiKeyLabel: 'OpenAI API Key',
    modalSecurityText: 'Dein API Key wird nur lokal im Browser gespeichert',
    cancel: 'Abbrechen',
    save: 'Speichern',
    
    // Footer
    footerDescription: 'Regalafacile nutzt künstliche Intelligenz, um das perfekte Geschenk für jeden Anlass zu finden.',
    footerDisclaimer: 'Diese Seite nimmt am Amazon EU Partnerprogramm teil',
    
    // Errors
    errorApiKey: 'OpenAI API Key nicht konfiguriert. Konfiguriere VITE_OPENAI_API_KEY in Umgebungsvariablen.',
    errorOpenAI: 'OpenAI Fehler:',
    errorSearch: 'Fehler bei der Suche'
  },
  
  fr: {
    // Header
    headerTitle: 'Regalafacile',
    headerSubtitle: 'Trouvez le cadeau parfait',
    
    // Hero
    heroTitle: 'Le Cadeau Parfait pour Chaque Occasion',
    heroDescription: 'Décrivez la personne et l\'occasion en langage naturel et laissez l\'intelligence artificielle trouver le cadeau parfait sur Amazon pour vous.',
    heroHighlight: 'cadeau parfait',
    
    // Search
    searchPlaceholder: 'Décrivez la personne et l\'occasion (ex: cadeau anniversaire maman qui aime cuisiner)...',
    examplesTitle: '🎁 Essayez ces exemples:',
    examples: [
      'Cadeau pour ma mère qui aime cuisiner, budget 100 euros',
      'Anniversaire garçon 8 ans passionné de football',
      'Anniversaire copine romantique, quelque chose de spécial',
      'Cadeau Noël papa technophile sous 200 euros',
      'Diplôme meilleure amie qui aime lire'
    ],
    
    // Query transformation
    queryTransformationTitle: 'Transformation IA de la Requête',
    originalQuery: 'Requête originale:',
    optimizedQuery: 'Requête optimisée:',
    category: 'Catégorie',
    priceRange: 'Gamme de prix',
    keywords: 'Mots-clés',
    
    // Products
    productsTitle: '🎁 Cadeaux Parfaits Trouvés',
    productsSubtitle: '{count} idées cadeaux sélectionnées pour vous',
    viewOnAmazon: 'Voir sur Amazon',
    prime: 'Prime',
    discount: 'REMISE',
    
    // Empty state
    emptyStateTitle: 'Commencez la recherche du cadeau parfait',
    emptyStateDescription: 'Décrivez la personne et l\'occasion pour trouver des cadeaux extraordinaires sur Amazon',
    
    // Modal
    modalTitle: 'Configuration Regalafacile',
    modalEnvConfigured: '✅ Clé API configurée via les variables d\'environnement',
    modalEnvDescription: 'Votre clé API est déjà configurée dans le système. Pas besoin de la saisir manuellement.',
    modalHowToTitle: 'Comment obtenir votre clé API:',
    modalSteps: [
      'Allez sur platform.openai.com',
      'Connectez-vous ou créez un compte',
      'Cliquez sur "Create new secret key"',
      'Copiez la clé et collez-la ci-dessous'
    ],
    modalApiKeyLabel: 'Clé API OpenAI',
    modalSecurityText: 'Votre clé API est sauvegardée uniquement localement dans le navigateur',
    cancel: 'Annuler',
    save: 'Sauvegarder',
    
    // Footer
    footerDescription: 'Regalafacile utilise l\'intelligence artificielle pour trouver le cadeau parfait pour chaque occasion.',
    footerDisclaimer: 'Ce site participe au Programme d\'Affiliation Amazon EU',
    
    // Errors
    errorApiKey: 'Clé API OpenAI non configurée. Configurez VITE_OPENAI_API_KEY dans les variables d\'environnement.',
    errorOpenAI: 'Erreur OpenAI:',
    errorSearch: 'Erreur lors de la recherche'
  },
  
  zh: {
    // Header
    headerTitle: 'Regalafacile',
    headerSubtitle: '找到完美礼物',
    
    // Hero
    heroTitle: '每个场合的完美礼物',
    heroDescription: '用自然语言描述人物和场合，让人工智能在亚马逊上为您找到完美礼物。',
    heroHighlight: '完美礼物',
    
    // Search
    searchPlaceholder: '描述人物和场合（例如：给爱做饭的妈妈的生日礼物）...',
    examplesTitle: '🎁 试试这些例子：',
    examples: [
      '给爱做饭的妈妈的礼物，预算100欧元',
      '8岁男孩生日，热爱足球',
      '女朋友浪漫周年纪念，特别的东西',
      '给科技爱好者爸爸的圣诞礼物，200欧元以下',
      '给爱读书的最好朋友的毕业礼物'
    ],
    
    // Query transformation
    queryTransformationTitle: 'AI查询转换',
    originalQuery: '原始查询：',
    optimizedQuery: '优化查询：',
    category: '类别',
    priceRange: '价格范围',
    keywords: '关键词',
    
    // Products
    productsTitle: '🎁 找到完美礼物',
    productsSubtitle: '为您精选{count}个礼物创意',
    viewOnAmazon: '在亚马逊查看',
    prime: 'Prime',
    discount: '折扣',
    
    // Empty state
    emptyStateTitle: '开始寻找完美礼物',
    emptyStateDescription: '描述人物和场合，在亚马逊上找到非凡礼物',
    
    // Modal
    modalTitle: 'Regalafacile配置',
    modalEnvConfigured: '✅ API密钥通过环境变量配置',
    modalEnvDescription: '您的API密钥已在系统中配置。无需手动输入。',
    modalHowToTitle: '如何获取您的API密钥：',
    modalSteps: [
      '访问platform.openai.com',
      '登录或创建账户',
      '点击"Create new secret key"',
      '复制密钥并粘贴到下方'
    ],
    modalApiKeyLabel: 'OpenAI API密钥',
    modalSecurityText: '您的API密钥仅保存在浏览器本地',
    cancel: '取消',
    save: '保存',
    
    // Footer
    footerDescription: 'Regalafacile使用人工智能为每个场合找到完美礼物。',
    footerDisclaimer: '本站参与亚马逊欧盟联盟计划',
    
    // Errors
    errorApiKey: 'OpenAI API密钥未配置。请在环境变量中配置VITE_OPENAI_API_KEY。',
    errorOpenAI: 'OpenAI错误：',
    errorSearch: '搜索时出错'
  }
};