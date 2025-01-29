"use client";

import Image from "next/image";
import { 
  Building2, 
  CheckCircle, 
  Globe, 
  HandshakeIcon, 
  HelpCircle,
  Laptop,
  Shield,
  Star,
  Target,
  Users 
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Visibilité Accrue",
    description: "Accédez à une clientèle internationale qualifiée."
  },
  {
    icon: Shield,
    title: "Gestion Simplifiée",
    description: "Outils de gestion intuitifs et support dédié."
  },
  {
    icon: Target,
    title: "Revenus Optimisés",
    description: "Tarification dynamique et opportunités de croissance."
  },
  {
    icon: Users,
    title: "Communauté Exclusive",
    description: "Rejoignez un réseau de partenaires premium."
  },
  {
    icon: Laptop,
    title: "Outils Professionnels",
    description: "Suite complète d'outils de gestion et analytics."
  },
  {
    icon: Star,
    title: "Support Premium",
    description: "Accompagnement personnalisé et formation continue."
  }
];

const requirements = [
  {
    title: "Qualité de Service",
    description: "Maintenir des standards élevés de qualité et de service client."
  },
  {
    title: "Conformité Légale",
    description: "Respect des réglementations et normes en vigueur."
  },
  {
    title: "Réactivité",
    description: "Gestion rapide des réservations et des demandes clients."
  },
  {
    title: "Engagement",
    description: "Participation active au développement du réseau."
  }
];

const partnerTypes = [
  {
    title: "Hébergeurs",
    description: "Hôtels, résidences, appartements meublés",
    features: [
      "Gestion simplifiée des réservations",
      "Visibilité internationale",
      "Tarification optimisée",
      "Support dédié 24/7"
    ]
  },
  {
    title: "Prestataires de Services",
    description: "Transport, activités, conciergerie",
    features: [
      "Planning intelligent",
      "Paiements sécurisés",
      "Analytics détaillés",
      "Formation continue"
    ]
  },
  {
    title: "Agences Locales",
    description: "Agences de voyage et tour-opérateurs",
    features: [
      "Outils de réservation avancés",
      "Commission attractive",
      "Marketing ciblé",
      "Réseau international"
    ]
  }
];

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Programme Partenaire"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w <boltAction type="file" filePath="app/devenir-partenaire/page.tsx">-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Devenez Partenaire Sejour24
            </h1>
            <p className="text-xl md:text-2xl">
              Développez votre activité avec un leader de l'industrie
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Pourquoi Devenir Partenaire ?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rejoignez Sejour24 en tant que partenaire et bénéficiez d'une plateforme 
            innovante qui vous permet de développer votre activité tout en offrant une 
            expérience exceptionnelle à vos clients.
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

        {/* Partner Types */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Types de Partenariat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-24">
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Critères de Sélection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
                    <p className="text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Processus de Partenariat</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-primary -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Candidature", desc: "Soumettez votre dossier" },
                { title: "Évaluation", desc: "Analyse de votre profil" },
                { title: "Validation", desc: "Accord de partenariat" },
                { title: "Intégration", desc: "Formation et démarrage" }
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
            <h2 className="text-3xl font-bold mb-6">Prêt à Nous Rejoindre ?</h2>
            <p className="text-lg mb-8">
              Transformez votre activité en rejoignant le réseau Sejour24. 
              Ensemble, créons l'avenir du voyage et des services.
            </p>
            <button className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Devenir Partenaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}