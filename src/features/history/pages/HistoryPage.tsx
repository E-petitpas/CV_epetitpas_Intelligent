import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/ui/button"
import { Card, CardContent } from "@/shared/ui/card"
import { FileText, Download } from "lucide-react"

export default function HistoryPage() {
  const navigate = useNavigate()
  // … (garde ton mockDocuments)

  // Mock data for demonstration
  const mockDocuments = [
    {
      id: 1,
      type: 'CV',
      title: 'CV - Développeur Full Stack',
      date: '2024-01-15',
      company: 'Tech Corp'
    },
    {
      id: 2,
      type: 'Lettre',
      title: 'Lettre - Designer UX/UI',
      date: '2024-01-10',
      company: 'Design Studio'
    },
    {
      id: 3,
      type: 'CV',
      title: 'CV - Chef de projet',
      date: '2024-01-05',
      company: 'Startup Inc'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#004D9D]">Historique</h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              Retour au Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {mockDocuments.map((doc) => (
            <Card key={doc.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    doc.type === 'CV' ? 'bg-[#004D9D]' : 'bg-[#FF6600]'
                  }`}>
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">{doc.title}</h3>
                    <p className="text-sm text-gray-500">
                      {doc.company} • {new Date(doc.date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    DOCX
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {mockDocuments.length === 0 && (
            <Card>
              <CardContent className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Aucun document trouvé
                </h3>
                <p className="text-gray-500 mb-4">
                  Vous n'avez pas encore créé de CV ou lettre de motivation.
                </p>
                <Button onClick={() => navigate("/generation")}>Créer votre premier CV</Button>

              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}