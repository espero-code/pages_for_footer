"use client";

import Image from "next/image";
import { 
  BarChart, 
  Gift, 
  Globe, 
  HandshakeIcon, 
  HelpCircle,
  Lightbulb,
  Rocket,
  Shield,
  Target,
  Wallet
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Commissions Attractives",
    description: "Gagnez jusqu'à 10% sur chaque réservation effectuée via votre lien d'affiliation."
  },
  {
    icon: Globe,
    title: "Portée Internationale",
    description: "Accédez à un marché mondial avec des opportunités illimitées."
  },
  {
    icon: Shield,
    title: "Paiements Sécurisés",
    description: "Système de paiement fiable avec des versements réguliers."
  },
  {
    icon: Rocket,
    title: "Outils Marketing",
    description: "Accès à des ressources marketing exclusives et performantes."
  },
  {
    icon: BarChart,
    title: "Suivi en Temps Réel",
    description: "Dashboard détaillé pour suivre vos performances."
  },
  {
    icon: HandshakeIcon,
    title: "Support Dédié",
    description: "Équipe dédiée pour vous accompagner dans votre réussite."
  }
];

const steps = [
  {
    number: 1,
    title: "Inscription",
    description: "Créez votre compte affilié gratuitement en quelques minutes."
  },
  {
    number: 2,
    title: "Validation",
    description: "Votre demande est examinée par notre équipe sous 48h."
  },
  {
    number: 3,
    title: "Configuration",
    description: "Accédez à votre dashboard et vos outils marketing."
  },
  {
    number: 4,
    title: "Promotion",
    description: "Commencez à promouvoir Sejour24 et générez des revenus."
  }
];

const faq = [
  {
    question: "Comment sont calculées les commissions ?",
    answer: "Les commissions sont calculées sur le montant total des réservations effectuées via votre lien. Le taux standard est de 10% pour les hébergements et 5% pour les autres services."
  },
  {
    question: "Quand sont versées les commissions ?",
    answer: "Les commissions sont versées mensuellement, dès que votre solde atteint 100€, par virement bancaire ou PayPal."
  },
  {
    question: "Quels outils marketing sont fournis ?",
    answer: "Vous avez accès à des bannières personnalisables, des liens trackés, des landing pages optimisées et du contenu exclusif pour vos promotions."
  },
  {
    question: "Y a-t-il des conditions particulières ?",
    answer: "Vous devez respecter notre charte éthique et nos conditions d'utilisation. Nous encourageons une promotion transparente et honnête de nos services."
  }
];

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Programme d'affiliation"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Programme d'Affiliation Sejour24
            </h1>
            <p className="text-xl md:text-2xl">
              Développez vos revenus en promouvant l'excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Pourquoi Devenir Affilié ?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rejoignez le programme d'affiliation Sejour24 et bénéficiez d'une opportunité 
            unique de générer des revenus en promouvant une plateforme innovante et fiable 
            dans le secteur du voyage et des services.
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

        {/* How It Works */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça Marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commission Structure */}
        <div className="mb-24">
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Structure des Commissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-secondary">
                <h3 className="text-xl font-semibold mb-4">Hébergements</h3>
                <p className="text-4xl font-bold text-primary mb-2">10%</p>
                <p className="text-muted-foreground">Par réservation</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary">
                <h3 className="text-xl font-semibold mb-4">Services</h3>
                <p className="text-4xl font-bold text-primary mb-2">5%</p>
                <p className="text-muted-foreground">Par service réservé</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary">
                <h3 className="text-xl font-semibold mb-4">Bonus</h3>
                <p className="text-4xl font-bold text-primary mb-2">+2%</p>
                <p className="text-muted-foreground">Pour volumes élevés</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  {item.question}
                </h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à Commencer ?</h2>
            <p className="text-lg mb-8">
              Rejoignez notre programme d'affiliation dès aujourd'hui et commencez 
              à générer des revenus en promouvant une marque de confiance.
            </p>
            <button className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Devenir Affilié
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}