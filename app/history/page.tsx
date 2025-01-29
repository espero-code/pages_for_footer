"use client";

import Image from "next/image";
import { Award, Building, ChartBar, Globe, History, Lightbulb, Target, Trophy } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Naissance de la Vision",
    description: "Conception initiale de Sejour24 par Mr Fameni Jean-Noel, visant à révolutionner l'industrie du voyage."
  },
  {
    year: "2021",
    title: "Développement de la Plateforme",
    description: "Création de la première version de la plateforme intégrant les services essentiels."
  },
  {
    year: "2022",
    title: "Lancement Officiel",
    description: "Déploiement de Sejour24 avec une gamme complète de services innovants."
  },
  {
    year: "2023",
    title: "Expansion Internationale",
    description: "Développement de partenariats stratégiques et expansion vers de nouveaux marchés."
  }
];

const achievements = [
  {
    icon: Trophy,
    title: "Leadership Visionnaire",
    description: "Reconnu pour sa capacité à identifier et saisir les opportunités du marché."
  },
  {
    icon: Building,
    title: "Portfolio d'Entreprises",
    description: "Création et direction de plusieurs entreprises prospères dans divers secteurs."
  },
  {
    icon: Globe,
    title: "Impact International",
    description: "Développement d'une présence significative sur les marchés internationaux."
  },
  {
    icon: ChartBar,
    title: "Croissance Exceptionnelle",
    description: "Historique prouvé de croissance et de développement d'entreprises."
  }
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
          alt="Leadership Vision"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Notre Histoire et Notre Vision
            </h1>
            <p className="text-xl md:text-2xl">
              Sous la direction visionnaire de Mr Fameni Jean-Noel
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Leadership Section */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Leadership Visionnaire</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mr Fameni Jean-Noel, entrepreneur chevronné et visionnaire, a bâti sa réputation sur 
                sa capacité à identifier les opportunités de marché et à créer des entreprises innovantes. 
                Son parcours exceptionnel témoigne de sa compréhension approfondie des besoins du marché 
                et de sa capacité à développer des solutions qui transforment les industries.
              </p>
              <p className="text-lg text-muted-foreground">
                En tant que CEO de plusieurs entreprises prospères, il apporte à Sejour24 une 
                expertise inégalée et une vision claire pour révolutionner l'industrie du voyage 
                et des services.
              </p>
            </div>
            <div className="flex-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80"
                alt="Vision Leadership"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Réalisations Exceptionnelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <achievement.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Parcours</h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-32">
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-1 relative pl-8 border-l border-primary">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision for the Future */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Notre Vision pour l'Avenir</h2>
            <p className="text-lg mb-8">
              Sous la direction de Mr Fameni Jean-Noel, Sejour24 continue d'innover et 
              d'étendre sa présence globale. Notre mission est de transformer l'industrie 
              du voyage en créant une expérience unique, sécurisée et enrichissante pour 
              tous nos utilisateurs.
            </p>
            <div className="flex justify-center">
              <button className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Rejoignez l'Aventure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}