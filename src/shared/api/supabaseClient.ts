// src/shared/api/supabaseClient.ts
import { createClient } from "@supabase/supabase-js"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Database = any

// ⚠️ Les variables doivent exister dans .env (Vite exige le préfixe VITE_)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

if (!supabaseUrl || !supabaseAnonKey) {
  // Avertissement utile en dev : évite de crasher si tu lances sans .env
  console.warn(
    "[Supabase] VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY manquant.\n" +
      "Ajoute-les dans ton fichier .env à la racine du projet."
  )
}

// Export **nommé** attendu par le reste de l'app
export const supabase = createClient<Database>(supabaseUrl ?? "", supabaseAnonKey ?? "", {
  auth: {
    persistSession: true,       // garde la session en localStorage
    autoRefreshToken: true,     // rafraîchit le token en arrière-plan
    detectSessionInUrl: true,   // utile pour OAuth redirection
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  },
  global: {
    headers: {
      "x-client-info": "cv-ia-frontend", // optionnel: tag client
    },
  },
})
