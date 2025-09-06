// src/features/auth/pages/LoginPage.tsx
import { useState } from "react"
import { supabase } from "@/shared/api/supabaseClient"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) return setError(error.message)
    navigate("/") // redirige vers Génération
  }

  return (
    <div className="min-h-dvh grid place-items-center bg-neutral-50">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-3 rounded-xl border bg-white p-6">
        <h1 className="text-xl font-semibold">Connexion</h1>
        <input
          className="w-full rounded-md border p-2"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          className="w-full rounded-md border p-2"
          placeholder="mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="w-full rounded-md bg-neutral-900 py-2 text-white disabled:opacity-50" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  )
}
