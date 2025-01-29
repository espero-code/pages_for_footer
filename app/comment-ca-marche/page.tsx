"use client";

import { Building2, Car, CheckCircle, Globe, Shield, Users, Briefcase, MapPin, Star } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Sécurité et Transparence",
    icon: Shield,
    description: "Système de ticket numérique garantissant une prestation fiable avec traçabilité complète et paiement sécurisé.",
  },
  {
    title: "Multi-Services",
    icon: Globe,
    description: "Location de voitures, logements meublés, conciergerie et expériences tout inclus en un seul endroit.",
  },
  {
    title: "Double Flexibilité",
    icon: Users,
    description: "Possibilité de réserver ou de proposer des services sur la même plateforme.",
  },
  {
    title: "Qualité Garantie",
    icon: CheckCircle,
    description: "Vérification rigoureuse de chaque étape et protection des paiements.",
  },
  {
    title: "Acteurs Locaux",
    icon: Building2,
    description: "Mise en avant des prestataires locaux et des expériences authentiques.",
  },
];

const services = [
  {
    title: "Location de Voitures",
    icon: Car,
    description: "Une flotte variée et moderne pour tous vos déplacements. Des véhicules soigneusement entretenus et vérifiés pour votre sécurité et votre confort.",
    features: [
      "Véhicules récents et entretenus",
      "Options pour tous les budgets",
      "Assurance complète incluse",
      "Service de livraison disponible"
    ],
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80"
  },
  {
    title: "Logements Meublés",
    icon: Building2,
    description: "Des hébergements confortables et modernes, entièrement équipés pour vous faire sentir comme chez vous.",
    features: [
      "Appartements entièrement meublés",
      "Équipements modernes",
      "Emplacement de choix",
      "Service de ménage inclus"
    ],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
  },
  {
    title: "Service de Conciergerie",
    icon: Briefcase,
    description: "Un service personnalisé pour répondre à tous vos besoins pendant votre séjour.",
    features: [
      "Assistance 24/7",
      "Réservations restaurants et activités",
      "Services de transfert",
      "Conseils personnalisés"
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
  },
  {
    title: "Expériences Locales",
    icon: MapPin,
    description: "Découvrez des expériences authentiques et uniques sélectionnées par nos experts locaux.",
    features: [
      "Activités authentiques",
      "Guides locaux certifiés",
      "Petits groupes",
      "Expériences exclusives"
    ],
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80"
  }
];

export default function CommentCaMarche() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80"
          alt="Sejour24 Experience"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Une Expérience Unique au-delà des Standards
            </h1>
            <p className="text-xl md:text-2xl">
              Découvrez pourquoi Sejour24 révolutionne l'industrie du voyage
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dans un monde où les plateformes traditionnelles se limitent à la mise en relation,
            Sejour24 se distingue par une approche complète et sécurisée, plaçant la qualité
            de service et la satisfaction au cœur de notre mission.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Services Sections */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <service.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-primary-foreground rounded-lg p-12 mt-24">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Découvrir l'Expérience Sejour24 ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour découvrir une nouvelle façon de voyager où la qualité,
            la sécurité et l'authenticité sont au cœur de chaque prestation.
          </p>
          <button className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Commencer l'Aventure
          </button>
        </div>
      </div>
    </div>
  );
}