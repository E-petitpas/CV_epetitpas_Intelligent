import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Zap, 
  FileText, 
  Wand2,
  Download,
  Edit,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import type { Page, AppState } from '../App';

interface CoverLetterPageProps {
  navigateTo: (page: Page) => void;
  user: AppState['user'];
}

export function CoverLetterPage({ navigateTo, user }: CoverLetterPageProps) {
  const [jobOffer, setJobOffer] = useState('');
  const [personalNotes, setPersonalNotes] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    navigateTo('home');
    return null;
  }

  const handleGenerate = async () => {
    if (!jobOffer.trim()) {
      alert('Veuillez coller l\'offre d\'emploi avant de générer la lettre de motivation.');
      return;
    }

    setIsGenerating(true);
    
    // Simulation de génération IA (à remplacer par un vrai appel API)
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockGeneratedLetter = `Madame, Monsieur,

Actuellement ${user.name || 'en recherche active d\'emploi'}, je me permets de vous adresser ma candidature pour le poste qui m'intéresse vivement au sein de votre entreprise.

Votre offre a particulièrement retenu mon attention car elle correspond parfaitement à mon profil professionnel et à mes aspirations de carrière. Les missions décrites dans l'annonce font écho à mon expérience et à mes compétences développées au cours de mon parcours.

${personalNotes ? `\nComme mentionné dans mes notes personnelles : ${personalNotes}` : ''}

Mon expérience m'a permis de développer des compétences solides qui seraient directement applicables à ce poste :
• Maîtrise des technologies modernes de développement
• Capacité d'adaptation et d'apprentissage rapide
• Sens du travail en équipe et de la collaboration
• Approche orientée résultats et qualité

Je suis convaincu(e) que mon profil pourrait apporter une réelle valeur ajoutée à vos équipes. Ma motivation, ma rigueur et mon engagement sont des atouts que je souhaiterais mettre au service de votre entreprise.

Je serais ravi(e) de pouvoir vous rencontrer afin d'échanger plus en détail sur cette opportunité et vous démontrer ma motivation.

Dans l'attente de votre retour, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

${user.name || 'Votre nom'}`;

    setGeneratedLetter(mockGeneratedLetter);
    setIsGenerating(false);
  };

  const handleDownloadPDF = () => {
    // Simulation du téléchargement PDF
    const element = document.createElement('a');
    const file = new Blob([generatedLetter], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'lettre_motivation.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadDOCX = () => {
    // Simulation du téléchargement DOCX
    const element = document.createElement('a');
    const file = new Blob([generatedLetter], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'lettre_motivation.docx';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    alert('Modifications sauvegardées !');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigateTo('dashboard')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Dashboard</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded bg-[#004D9D] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-[#004D9D]">CV Intelligent IA</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="px-3 py-1">
                {user.subscription === 'premium' ? 'Premium' : 
                 user.subscription === 'standard' ? 'Standard' : 'Gratuit'}
              </Badge>
              <span className="text-gray-600">Bonjour, {user.name}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Génération de Lettre de Motivation
          </h1>
          <p className="text-lg text-gray-600">
            Créez une lettre de motivation personnalisée et percutante en quelques clics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire de génération */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-[#004D9D]" />
                  <span>Informations de base</span>
                </CardTitle>
                <CardDescription>
                  Fournissez les détails de l'offre d'emploi pour une lettre personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="jobOffer">Offre d'emploi *</Label>
                  <Textarea
                    id="jobOffer"
                    placeholder="Collez ici le texte complet de l'offre d'emploi (description du poste, compétences requises, missions, etc.)"
                    value={jobOffer}
                    onChange={(e) => setJobOffer(e.target.value)}
                    rows={8}
                    className="resize-none"
                    required
                  />
                  <p className="text-sm text-gray-500">
                    Plus l'offre est détaillée, plus la lettre sera personnalisée
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="personalNotes">Notes personnelles (optionnel)</Label>
                  <Textarea
                    id="personalNotes"
                    placeholder="Ajoutez des notes personnelles : pourquoi cette entreprise vous intéresse, vos motivations spécifiques, des éléments à mettre en avant..."
                    value={personalNotes}
                    onChange={(e) => setPersonalNotes(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                  <p className="text-sm text-gray-500">
                    Ces notes aideront à personnaliser davantage votre lettre
                  </p>
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={!jobOffer.trim() || isGenerating}
                  style={{ backgroundColor: '#FF6600' }}
                  className="w-full text-white hover:opacity-90 disabled:opacity-50"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5 mr-2" />
                      Générer Lettre de Motivation
                    </>
                  )}
                </Button>

                {generatedLetter && (
                  <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800">Lettre générée avec succès !</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Conseils */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-[#FF6600]" />
                  <span>Conseils pour une lettre efficace</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Copiez l'intégralité de l'offre d'emploi pour une analyse complète</li>
                  <li>• Mentionnez des éléments spécifiques de l'entreprise dans vos notes</li>
                  <li>• Relisez et personnalisez la lettre générée avant envoi</li>
                  <li>• Adaptez le ton selon le secteur d'activité</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Aperçu de la lettre générée */}
          <div className="space-y-6">
            <Card className="min-h-[600px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-[#004D9D]" />
                    <span>Aperçu de la lettre</span>
                  </CardTitle>
                  {generatedLetter && (
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={handleDownloadPDF}
                        variant="outline"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                      <Button
                        onClick={handleDownloadDOCX}
                        variant="outline"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        DOCX
                      </Button>
                      <Button
                        onClick={isEditing ? handleSaveEdit : handleEdit}
                        variant="outline"
                        size="sm"
                        style={{ 
                          backgroundColor: isEditing ? '#004D9D' : 'transparent',
                          color: isEditing ? 'white' : '#004D9D'
                        }}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        {isEditing ? 'Sauvegarder' : 'Modifier'}
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {!generatedLetter && !isGenerating && (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <FileText className="w-16 h-16 mb-4 text-gray-300" />
                    <p className="text-center">
                      Votre lettre de motivation apparaîtra ici après génération
                    </p>
                  </div>
                )}

                {isGenerating && (
                  <div className="flex flex-col items-center justify-center h-64">
                    <Loader2 className="w-12 h-12 animate-spin text-[#FF6600] mb-4" />
                    <p className="text-gray-600">Analyse de l'offre en cours...</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Notre IA analyse l'offre et génère votre lettre personnalisée
                    </p>
                  </div>
                )}

                {generatedLetter && (
                  <div className="space-y-4">
                    {isEditing ? (
                      <Textarea
                        value={generatedLetter}
                        onChange={(e) => setGeneratedLetter(e.target.value)}
                        rows={20}
                        className="w-full font-mono text-sm resize-none"
                      />
                    ) : (
                      <div className="bg-white border rounded-lg p-6 shadow-sm">
                        <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans">
                          {generatedLetter}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}