/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENAI_API_KEY: string
  readonly VITE_AMAZON_AFFILIATE_TAG: string
  readonly VITE_AMAZON_ACCESS_KEY: string
  readonly VITE_AMAZON_SECRET_KEY: string
  readonly VITE_AMAZON_ASSOCIATE_TAG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}