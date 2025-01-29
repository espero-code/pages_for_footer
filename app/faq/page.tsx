"use client";

import { ChevronDown, ChevronUp, HelpCircle, Search } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    title: "Général",
    questions: [
      {
        q: "Qu'est-ce que Sejour24 ?",
        a: "Sejour24 est une plateforme complète qui combine hébergement, transport, services de conciergerie et expériences locales. Notre système unique de ticket numérique garantit la sécurité et la qualité de chaque service."
      },
      {
        q: "Comment fonctionne le système de ticket ?",
        a: "Notre système de ticket numérique assure une traçabilité complète du service. Le prestataire scanne le ticket au début et à la fin de la prestation, et le paiement n'est libéré qu'après confirmation que le service a été correctement rendu."
      },
      {
        q: "Quels types de services proposez-vous ?",
        a: "Nous proposons une gamme complète de services : location de voitures, logements meublés, conciergerie, et expériences locales. Tous nos services sont vérifiés et garantis par notre système de qualité."
      }
    ]
  },
  {
    title: "Réservations",
    questions: [
      {
        q: "Comment puis-je réserver un service ?",
        a: "La réservation se fait simplement depuis notre plateforme. Sélectionnez le service souhaité, choisissez vos dates, et suivez le processus de réservation sécurisé. Un ticket numérique vous sera envoyé pour suivre votre prestation."
      },
      {
        q: "Quels sont les modes de paiement acceptés ?",
        a: "Nous acceptons les principales cartes de crédit, les virements bancaires, et plusieurs solutions de paiement en ligne sécurisées. Tous les paiements sont protégés et ne sont versés qu'après la validation du service."
      },
      {
        q: "Quelle est la politique d'annulation ?",
        a: "Les conditions d'annulation varient selon le type de service. Elles sont clairement indiquées lors de la réservation. En général, une annulation gratuite est possible jusqu'à 48h avant le début du service."
      }
    ]
  },
  {
    title: "Sécurité et Garanties",
    questions: [
      {
        q: "Comment garantissez-vous la qualité des services ?",
        a: "Nous vérifions rigoureusement chaque prestataire avant son intégration à la plateforme. Notre système de ticket et nos contrôles réguliers assurent le maintien d'un haut niveau de qualité."
      },
      {
        q: "Que faire en cas de problème ?",
        a: "Notre service client est disponible 24/7. En cas de problème, contactez-nous immédiatement. Notre système de ticket nous permet d'intervenir rapidement et de résoudre efficacement toute situation."
      }
    ]
  },
  {
    title: "Prestataires",
    questions: [
      {
        q: "Comment devenir prestataire ?",
        a: "Pour devenir prestataire, soumettez votre candidature via notre plateforme. Nous évaluerons votre profil selon nos critères de qualité. Une fois validé, vous bénéficierez d'une formation sur notre système de ticket."
      },
      {
        q: "Quelles sont les commissions ?",
        a: "Nos commissions sont compétitives et varient selon le type de service. Elles incluent l'accès à notre plateforme, notre système de ticket, et notre support marketing. Les détails sont fournis lors de l'inscription."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>("Général");

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comment pouvons-nous vous aider ?
            </h1>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher une question..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-background text-foreground"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div key={category.title} className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted/50 transition-colors"
                onClick={() => setOpenCategory(openCategory === category.title ? null : category.title)}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-primary" />
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                {openCategory === category.title ? (
                  <ChevronUp className="text-muted-foreground" />
                ) : (
                  <ChevronDown className="text-muted-foreground" />
                )}
              </button>
              {openCategory === category.title && (
                <div className="px-6 py-4 bg-card border-t">
                  <div className="space-y-6">
                    {category.questions.map((item, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                        <p className="text-muted-foreground">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="text-muted-foreground mb-8">
            Notre équipe de support est disponible 24/7 pour vous aider
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Contacter le Support
          </button>
        </div>
      </div>
    </div>
  );
}