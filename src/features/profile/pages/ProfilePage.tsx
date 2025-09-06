import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import { Input } from "@/shared/ui/input"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
})

type FormValues = z.infer<typeof schema>

type FormData = {
  name: string
  email: string
  phone: string
  address: string
  title: string
  experience: string
  education: string
  skills: string
}

export default function ProfilePage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    title: "",
    experience: "",
    education: "",
    skills: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: sauvegarder formData (API/Supabase)
    navigate("/") // ou "/dashboard" si tu as une route dashboard
  }

  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "" } })

  const onSubmit = async (values: FormValues) => {
    // TODO: save supabase
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold text-[#004D9D]">Mon Profil</h1>
            <Button variant="outline" onClick={() => navigate(-1)}>
              Retour
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Informations du profil</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Nom</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Téléphone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Adresse</label>
                  <Input
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Votre adresse"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Titre professionnel</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Ex: Développeur Full Stack"
                />
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                  Annuler
                </Button>
                <Button type="submit">Sauvegarder</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
