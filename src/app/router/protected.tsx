import { Navigate, useLocation } from "react-router-dom"
import { PropsWithChildren } from "react"
import { useAuth } from "@/app/providers/AuthProvider"

export default function Protected({ children }: PropsWithChildren) {
  const { user, loading } = useAuth()
  const loc = useLocation()
  if (loading) return null
  if (!user) return <Navigate to="/login" replace state={{ from: loc }} />
  return children
}
