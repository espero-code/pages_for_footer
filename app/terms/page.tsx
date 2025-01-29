"use client";

import { Shield } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `Les présentes conditions générales régissent l'utilisation de la plateforme Sejour24, accessible via notre site web et nos applications mobiles. En utilisant nos services, vous acceptez d'être lié par ces conditions. Veuillez les lire attentivement.`
  },
  {
    title: "2. Définitions",
    content: `
    - "Plateforme" désigne le site web et les applications mobiles de Sejour24
    - "Services" comprend l'hébergement, le transport, la conciergerie et les expériences
    - "Utilisateur" désigne toute personne utilisant la plateforme
    - "Prestataire" désigne les professionnels fournissant des services via la plateforme
    - "Ticket Numérique" désigne notre système de suivi et de validation des services`
  },
  {
    title: "3. Inscription et Compte",
    content: `L'utilisation de certains services nécessite la création d'un compte. Vous devez :
    - Fournir des informations exactes et complètes
    - Maintenir la confidentialité de vos identifiants
    - Être légalement capable de contracter
    - Nous informer de toute utilisation non autorisée`
  },
  {
    title: "4. Services et Réservations",
    content: `
    4.1 Réservation
    - Les réservations sont soumises à disponibilité
    - Les prix sont affichés TTC
    - La réservation n'est confirmée qu'après paiement
    
    4.2 Système de Ticket
    - Chaque service génère un ticket numérique unique
    - Le ticket doit être validé au début et à la fin du service
    - Le paiement est sécurisé jusqu'à la validation finale`
  },
  {
    title: "5. Paiements et Remboursements",
    content: `
    5.1 Paiements
    - Les paiements sont sécurisés via des prestataires certifiés
    - Les fonds sont conservés jusqu'à la validation du service
    
    5.2 Remboursements
    - Les conditions varient selon le type de service
    - L'annulation gratuite est possible selon les délais spécifiés
    - Les remboursements sont traités sous 14 jours`
  },
  {
    title: "6. Obligations des Utilisateurs",
    content: `Les utilisateurs s'engagent à :
    - Respecter les présentes conditions
    - Fournir des informations exactes
    - Ne pas utiliser la plateforme à des fins illégales
    - Respecter les droits des autres utilisateurs
    - Signaler tout comportement inapproprié`
  },
  {
    title: "7. Obligations des Prestataires",
    content: `Les prestataires s'engagent à :
    - Maintenir leurs qualifications et assurances
    - Respecter les standards de qualité Sejour24
    - Utiliser correctement le système de ticket
    - Fournir des services conformes à la description
    - Respecter la réglementation applicable`
  },
  {
    title: "8. Propriété Intellectuelle",
    content: `
    - La plateforme et son contenu sont protégés par le droit d'auteur
    - L'utilisation du contenu nécessite notre autorisation écrite
    - Les marques et logos sont notre propriété exclusive
    - Les utilisateurs conservent leurs droits sur leur contenu`
  },
  {
    title: "9. Responsabilité",
    content: `
    9.1 Notre Responsabilité
    - Nous assurons le bon fonctionnement de la plateforme
    - Nous vérifions les prestataires
    - Nous sécurisons les paiements
    
    9.2 Limitation de Responsabilité
    - Force majeure
    - Dommages indirects
    - Contenus des utilisateurs`
  },
  {
    title: "10. Protection des Données",
    content: `
    - Nous respectons le RGPD
    - Les données sont utilisées uniquement pour nos services
    - Vous disposez d'un droit d'accès et de rectification
    - Notre politique de confidentialité détaille nos pratiques`
  },
  {
    title: "11. Modification des Conditions",
    content: `
    - Nous pouvons modifier ces conditions
    - Les utilisateurs seront notifiés des changements
    - L'utilisation continue implique l'acceptation des modifications`
  },
  {
    title: "12. Droit Applicable",
    content: `
    - Ces conditions sont régies par le droit français
    - Les litiges seront soumis aux tribunaux compétents
    - La médiation est privilégiée pour la résolution des conflits`
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Dernière mise à jour : {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-muted-foreground">
            Ces conditions générales définissent les règles d'utilisation de la plateforme Sejour24. 
            Elles constituent un contrat légal entre vous et Sejour24. En utilisant notre plateforme, 
            vous acceptez ces conditions dans leur intégralité.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="border-b pb-8 last:border-b-0">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <div className="text-muted-foreground whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Des Questions ?</h2>
          <p className="text-muted-foreground mb-8">
            Si vous avez des questions concernant nos conditions d'utilisation, 
            n'hésitez pas à contacter notre équipe juridique.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Contacter le Service Juridique
          </button>
        </div>
      </div>
    </div>
  );
}