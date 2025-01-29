"use client";

import Image from "next/image";
import { 
  BarChart, 
  Building2, 
  Globe, 
  HandshakeIcon, 
  LightbulbIcon,
  PieChart,
  Rocket,
  Shield,
  Target,
  Users 
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Opportunité Unique",
    description: "Participez à la croissance d'une entreprise innovante dans un marché en pleine expansion."
  },
  {
    icon: Globe,
    title: "Marché International",
    description: "Accédez à un marché mondial avec un potentiel de croissance exceptionnel."
  },
  {
    icon: Shield,
    title: "Structure Solide",
    description: "Rejoignez une entreprise avec une base solide et une vision claire."
  },
  {
    icon: Rocket,
    title: "Innovation Continue",
    description: "Participez au développement de solutions innovantes."
  },
  {
    icon: HandshakeIcon,
    title: "Partenariat Stratégique",
    description: "Devenez un acteur clé dans notre développement."
  },
  {
    icon: Users,
    title: "Réseau d'Excellence",
    description: "Intégrez un réseau d'associés et de professionnels de premier plan."
  }
];

const investmentAreas = [
  {
    title: "Expansion Internationale",
    description: "Développement de notre présence sur de nouveaux marchés stratégiques.",
    metrics: ["20+ pays ciblés", "Croissance x3 prévue", "Partenariats locaux"]
  },
  {
    title: "Innovation Technologique",
    description: "Investissement dans des solutions technologiques de pointe.",
    metrics: ["IA & Machine Learning", "Blockchain", "Applications mobiles"]
  },
  {
    title: "Développement Commercial",
    description: "Renforcement de notre réseau commercial et de nos capacités.",
    metrics: ["Force de vente x2", "Nouveaux segments", "Marketing digital"]
  }
];

const requirements = [
  {
    title: "Expertise Sectorielle",
    description: "Une compréhension approfondie du secteur du voyage et des services."
  },
  {
    title: "Vision Stratégique",
    description: "Capacité à contribuer au développement stratégique de l'entreprise."
  },
  {
    title: "Engagement Long Terme",
    description: "Volonté de s'investir durablement dans le projet."
  },
  {
    title: "Valeur Ajoutée",
    description: "Apport significatif en termes de compétences ou de réseau."
  }
];

export default function AssociatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Devenir Associé"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Devenez Associé Sejour24
            </h1>
            <p className="text-xl md:text-2xl">
              Investissez dans l'avenir du voyage et des services
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Une Opportunité Exceptionnelle</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sejour24 ouvre son capital à des associés stratégiques pour accélérer 
            sa croissance et renforcer sa position de leader dans l'industrie du 
            voyage et des services.
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

        {/* Investment Areas */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Axes d'Investissement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentAreas.map((area, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.metrics.map((metric, mIndex) => (
                    <li key={mIndex} className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-24">
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Chiffres Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: "150%", label: "Croissance Annuelle" },
                { value: "50K+", label: "Utilisateurs Actifs" },
                { value: "20+", label: "Pays Couverts" },
                { value: "95%", label: "Satisfaction Client" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{metric.value}</p>
                  <p className="text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Profil Recherché</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{req.title}</h3>
                <p className="text-muted-foreground">{req.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Processus d'Association</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-primary -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Premier Contact", desc: "Discussion initiale" },
                { title: "Due Diligence", desc: "Analyse approfondie" },
                { title: "Négociation", desc: "Termes et conditions" },
                { title: "Finalisation", desc: "Signature et intégration" }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 relative z-10">
                    {index + 1}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Intéressé par cette Opportunité ?</h2>
            <p className="text-lg mb-8">
              Rejoignez-nous dans cette aventure entrepreneuriale et participez 
              à la transformation de l'industrie du voyage et des services.
            </p>
            <button className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}