"use client";

import Image from "next/image";
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Laptop, 
  Leaf, 
  Map, 
  Shield, 
  Star, 
  Users 
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Santé & Bien-être",
    description: "Mutuelle santé complète et programmes de bien-être"
  },
  {
    icon: GraduationCap,
    title: "Formation Continue",
    description: "Budget formation et développement professionnel"
  },
  {
    icon: Users,
    title: "Culture Inclusive",
    description: "Environnement de travail diversifié et bienveillant"
  },
  {
    icon: Laptop,
    title: "Travail Flexible",
    description: "Options de travail hybride et horaires flexibles"
  },
  {
    icon: Star,
    title: "Évolution de Carrière",
    description: "Opportunités d'évolution et mentorat"
  },
  {
    icon: Leaf,
    title: "RSE",
    description: "Engagement fort en matière de responsabilité sociale"
  }
];

const openPositions = [
  {
    title: "Développeur Full Stack Senior",
    department: "Technologie",
    location: "Paris, France",
    type: "CDI",
    description: "Rejoignez notre équipe technique pour développer des solutions innovantes."
  },
  {
    title: "Chef de Projet Marketing Digital",
    department: "Marketing",
    location: "Lyon, France",
    type: "CDI",
    description: "Pilotez nos campagnes marketing et notre stratégie digitale."
  },
  {
    title: "Responsable Service Client",
    department: "Opérations",
    location: "Bordeaux, France",
    type: "CDI",
    description: "Gérez notre équipe service client et optimisez l'expérience utilisateur."
  },
  {
    title: "Business Developer",
    department: "Commercial",
    location: "Marseille, France",
    type: "CDI",
    description: "Développez notre présence sur de nouveaux marchés."
  }
];

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous agissons avec honnêteté et transparence dans toutes nos interactions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous croyons en la force du travail d'équipe et de la synergie collective."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Nous visons l'excellence dans chacune de nos actions."
  },
  {
    icon: Map,
    title: "Innovation",
    description: "Nous encourageons la créativité et l'innovation continue."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
          alt="Carrières chez Sejour24"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Carrières chez Sejour24
            </h1>
            <p className="text-xl md:text-2xl">
              Rejoignez une équipe passionnée et innovante
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Pourquoi Nous Rejoindre ?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Chez Sejour24, nous créons plus qu'une simple plateforme - nous révolutionnons 
            l'industrie du voyage et des services. Rejoignez-nous pour faire partie de cette 
            transformation et développez votre carrière dans un environnement stimulant et innovant.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow text-center"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Postes Ouverts</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4 inline-block mr-1" />
                        {position.department}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        <Map className="w-4 h-4 inline-block mr-1" />
                        {position.location}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        <Users className="w-4 h-4 inline-block mr-1" />
                        {position.type}
                      </span>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {position.description}
                    </p>
                  </div>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
                    Postuler
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Processus de Recrutement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Candidature</h3>
                <p className="text-sm">Envoyez votre CV et lettre de motivation</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Entretiens</h3>
                <p className="text-sm">Échangez avec nos équipes</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Intégration</h3>
                <p className="text-sm">Rejoignez l'aventure Sejour24</p>
              </div>
            </div>
            <button className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Voir Tous les Postes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}