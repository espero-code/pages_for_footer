"use client";

import Image from "next/image";
import { Building2, Mail, Linkedin, Twitter, Globe, Award } from "lucide-react";

const teamMembers = [
  {
    name: "Jean-Noel Fameni",
    role: "CEO & Fondateur",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    bio: "Entrepreneur visionnaire avec plus de 15 ans d'expérience dans la création et le développement d'entreprises innovantes.",
    expertise: ["Leadership", "Stratégie", "Innovation", "Développement International"],
  },
  {
    name: "Sarah Martin",
    role: "Directrice des Opérations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    bio: "Experte en gestion opérationnelle avec une solide expérience dans l'industrie du voyage et de l'hospitalité.",
    expertise: ["Gestion Opérationnelle", "Service Client", "Optimisation des Processus"],
  },
  {
    name: "Marc Dubois",
    role: "Directeur Technique",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Ingénieur chevronné spécialisé dans le développement de plateformes technologiques innovantes.",
    expertise: ["Architecture Technique", "Développement Web", "Sécurité"],
  },
  {
    name: "Sophie Chen",
    role: "Directrice Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    bio: "Stratège marketing passionnée par l'innovation et l'expérience client.",
    expertise: ["Marketing Digital", "Stratégie de Marque", "Communication"],
  },
];

const departments = [
  {
    name: "Direction",
    description: "Leadership stratégique et vision d'entreprise",
    icon: Building2,
  },
  {
    name: "Technologie",
    description: "Innovation et développement de solutions",
    icon: Globe,
  },
  {
    name: "Opérations",
    description: "Gestion des services et satisfaction client",
    icon: Award,
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Notre équipe"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl md:text-2xl">
              Des experts passionnés au service de votre expérience
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Une Équipe Exceptionnelle</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Chez Sejour24, notre équipe est composée d'experts passionnés qui partagent 
            une vision commune : révolutionner l'industrie du voyage et des services en 
            créant une expérience unique et sécurisée pour nos utilisateurs.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start bg-card p-6 rounded-lg">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Departments */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Départements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow text-center"
              >
                <dept.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{dept.name}</h3>
                <p className="text-muted-foreground">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez Notre Équipe</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Nous sommes toujours à la recherche de talents passionnés pour nous aider 
            à transformer l'industrie du voyage et des services.
          </p>
          <button className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Voir Nos Opportunités
          </button>
        </div>
      </div>
    </div>
  );
}