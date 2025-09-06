import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

export default function CoverLetterPage() {
  const navigate = useNavigate()
  const [jobOffer, setJobOffer] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedLetter, setGeneratedLetter] = useState("")

  const handleGenerate = async () => {
    setIsGenerating(true)
    // TODO: appeler ton backend/IA
    setTimeout(() => {
      setGeneratedLetter("Lettre de motivation générée avec succès !")
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#004D9D]">Lettre de motivation</h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              Retour au Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Offre d'emploi</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full h-64 p-3 border rounded-md resize-none"
                placeholder="Collez ici l'offre d'emploi…"
                value={jobOffer}
                onChange={(e) => setJobOffer(e.target.value)}
              />
              <Button
                onClick={handleGenerate}
                disabled={!jobOffer || isGenerating}
                className="w-full mt-4 bg-[#FF6600]"
              >
                {isGenerating ? "Génération en cours..." : "Générer la lettre"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aperçu de la lettre</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
                {generatedLetter ? (
                  <div className="text-center">
                    <p className="text-green-600 font-medium">{generatedLetter}</p>
                    <div className="mt-4 space-x-2">
                      <Button size="sm">Télécharger PDF</Button>
                      <Button size="sm" variant="outline">Télécharger DOCX</Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">L'aperçu de la lettre apparaîtra ici</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
