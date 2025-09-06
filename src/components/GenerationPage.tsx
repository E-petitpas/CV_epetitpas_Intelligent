import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft, 
  Zap, 
  FileText, 
  Download, 
  Eye, 
  RefreshCw,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import type { Page, AppState } from '../App';

interface GenerationPageProps {
  navigateTo: (page: Page) => void;
  user: AppState['user'];
}

type GenerationStep = 'input' | 'analyzing' | 'preview' | 'complete';

export function GenerationPage({ navigateTo, user }: GenerationPageProps) {
  const [step, setStep] = useState<GenerationStep>('input');
  const [jobOffer, setJobOffer] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [progress, setProgress] = useState(0);

  if (!user) {
    navigateTo('home');
    return null;
  }

  const handleGenerate = () => {
    setStep('analyzing');
    setProgress(10);
    
    // Simulation de l'analyse
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setStep('preview');
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleDownload = (type: 'cv' | 'letter') => {
    // Simulation de téléchargement
    const fileName = type === 'cv' ? 'CV_Optimise.pdf' : 'Lettre_Motivation.pdf';
    alert(`Téléchargement de ${fileName} commencé !`);
    setStep('complete');
  };

  const renderStepContent = () => {
    switch (step) {
      case 'input':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-[#FF6600]" />
                  <span>Analysons l'offre d'emploi</span>
                </CardTitle>
                <CardDescription>
                  Collez l'offre d'emploi ci-dessous et notre IA créera un CV parfaitement adapté
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Titre du poste</Label>
                  <Input
                    id="jobTitle"
                    placeholder="ex: Développeur Frontend Senior"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    placeholder="ex: TechCorp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="jobOffer">Offre d'emploi complète</Label>
                  <Textarea
                    id="jobOffer"
                    placeholder="Collez ici l'offre d'emploi complète..."
                    value={jobOffer}
                    onChange={(e) => setJobOffer(e.target.value)}
                    rows={10}
                    className="min-h-[200px]"
                  />
                </div>
                
                <Button 
                  onClick={handleGenerate}
                  disabled={!jobOffer || !jobTitle}
                  className="w-full"
                  style={{ backgroundColor: '#004D9D' }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Générer mon CV avec l'IA
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'analyzing':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <RefreshCw className="w-5 h-5 animate-spin text-[#004D9D]" />
                  <span>Analyse en cours...</span>
                </CardTitle>
                <CardDescription>
                  Notre IA analyse l'offre et optimise votre CV
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Progress value={progress} className="w-full" />
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Analyse de l'offre d'emploi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {progress > 30 ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                    <span>Identification des mots-clés importants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {progress > 60 ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                    <span>Optimisation du CV pour l'ATS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {progress > 90 ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                    <span>Génération de la lettre de motivation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'preview':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Génération terminée !</span>
                </CardTitle>
                <CardDescription>
                  Votre CV et lettre de motivation ont été optimisés pour "{jobTitle}" chez {company}
                </CardDescription>
              </CardHeader>
            </Card>

            <Tabs defaultValue="cv" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cv">CV Optimisé</TabsTrigger>
                <TabsTrigger value="letter">Lettre de Motivation</TabsTrigger>
              </TabsList>

              <TabsContent value="cv" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>CV - {user.name}</CardTitle>
                      <div className="flex space-x-2">
                        <Badge className="bg-green-100 text-green-800">
                          96% Compatible ATS
                        </Badge>
                        <Badge className="bg-[#004D9D] text-white">
                          Optimisé IA
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-6 rounded-lg min-h-[400px] border-2 border-dashed border-gray-300">
                      <div className="space-y-4">
                        <div className="border-b pb-2">
                          <h3 className="font-bold text-lg">{user.name}</h3>
                          <p className="text-gray-600">{jobTitle}</p>
                          <p className="text-sm text-gray-500">email@exemple.com | +33 1 23 45 67 89</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">PROFIL PROFESSIONNEL</h4>
                          <p className="text-sm text-gray-700">
                            Développeur frontend passionné avec 5+ années d'expérience dans la création 
                            d'applications web modernes. Expert en React, TypeScript et optimisation des performances.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">COMPÉTENCES TECHNIQUES</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">React</Badge>
                            <Badge variant="outline">TypeScript</Badge>
                            <Badge variant="outline">Next.js</Badge>
                            <Badge variant="outline">Tailwind CSS</Badge>
                          </div>
                        </div>
                        
                        <div className="text-center text-gray-500 mt-8">
                          <Eye className="w-8 h-8 mx-auto mb-2" />
                          <p>Aperçu du CV - Version complète disponible en PDF</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 mt-4">
                      <Button 
                        onClick={() => handleDownload('cv')}
                        style={{ backgroundColor: '#004D9D' }}
                        className="flex-1"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger le CV (PDF)
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Prévisualiser
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="letter" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Lettre de Motivation</CardTitle>
                      <Badge style={{ backgroundColor: '#FF6600' }} className="text-white">
                        Personnalisée
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-6 rounded-lg min-h-[400px] border-2 border-dashed border-gray-300">
                      <div className="space-y-4">
                        <div className="text-right text-sm text-gray-600">
                          Paris, le {new Date().toLocaleDateString('fr-FR')}
                        </div>
                        
                        <div className="text-sm">
                          <p>Madame, Monsieur,</p>
                        </div>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <p>
                            Passionné par le développement frontend et fort de mes 5 années d'expérience, 
                            je souhaite rejoindre {company} en tant que {jobTitle}.
                          </p>
                          <p>
                            Votre annonce a retenu toute mon attention car elle correspond parfaitement à 
                            mon expertise en React et TypeScript. Mon expérience dans l'optimisation des 
                            performances et la création d'interfaces utilisateur modernes...
                          </p>
                        </div>
                        
                        <div className="text-center text-gray-500 mt-8">
                          <FileText className="w-8 h-8 mx-auto mb-2" />
                          <p>Aperçu de la lettre - Version complète disponible en PDF</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 mt-4">
                      <Button 
                        onClick={() => handleDownload('letter')}
                        style={{ backgroundColor: '#FF6600' }}
                        className="flex-1"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger la Lettre (PDF)
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Prévisualiser
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        );

      case 'complete':
        return (
          <div className="space-y-6">
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <CardTitle>Téléchargement réussi !</CardTitle>
                <CardDescription>
                  Vos documents ont été sauvegardés dans votre historique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setStep('input')} variant="outline">
                    Générer un autre CV
                  </Button>
                  <Button onClick={() => navigateTo('history')} style={{ backgroundColor: '#004D9D' }}>
                    Voir l'historique
                  </Button>
                  <Button onClick={() => navigateTo('dashboard')} style={{ backgroundColor: '#FF6600' }}>
                    Retour au Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
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
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Connecté en tant que</span>
              <span className="font-medium">{user.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Génération de CV Intelligent
          </h1>
          <p className="text-lg text-gray-600">
            Laissez l'IA créer le CV parfait pour votre candidature
          </p>
        </div>

        {renderStepContent()}
      </div>
    </div>
  );
}