import type { Metadata } from "next";
import { Crumbs, FaqBlock, PageHead } from "@/components/blocks";
import ContactForm from "@/components/ContactForm";
import { contact, faqPages } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact et rendez-vous",
  description: "Prendre rendez-vous avec Anne Boullet Studio, décoratrice d'intérieur à La Rochelle : téléphone, WhatsApp, e-mail ou formulaire.",
};

export default function Contact() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Anne Boullet Studio",
    description: "Décoratrice d'intérieur à La Rochelle",
    address: { "@type": "PostalAddress", addressLocality: "La Rochelle", postalCode: "17000", addressCountry: "FR" },
    areaServed: ["La Rochelle", "Île de Ré", "Oléron", "Châtelaillon-Plage", "Rochefort", "Royan", "Saintes"],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Crumbs items={[{ label: "Contact" }]} />
      <PageHead
        kicker="Contact"
        h1={
          <>
            Parlons de <span className="mute">votre projet</span>
          </>
        }
        lede="Quelques lignes suffisent. Anne vous recontacte pour un premier échange, puis un rendez-vous sur place."
      />
      <section className="sec" style={{ paddingTop: 56 }}>
        <div className="contact">
          <div>
            <ul className="ct-lines" style={{ marginTop: 0 }}>
              <li>
                <span>Téléphone</span>
                <a href="#">{contact.tel}</a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a href="#">{contact.whatsapp}</a>
              </li>
              <li>
                <span>E-mail</span>
                <a href="#">{contact.mail}</a>
              </li>
            </ul>
            <div className="ct-more">
              <p className="pro2-kicker">Le studio</p>
              <address>
                Anne Boullet Studio
                <br />
                {contact.adresse}
                <br />
                {contact.ville}
              </address>
              <p className="note">
                Interventions à une heure autour de La Rochelle : Île de Ré, Oléron, Châtelaillon-Plage, Rochefort, Royan, Saintes. Missions à
                distance possibles.
              </p>
            </div>
          </div>
          <ContactForm id="cp" />
        </div>
      </section>
      <FaqBlock items={faqPages.contact} />
    </>
  );
}
