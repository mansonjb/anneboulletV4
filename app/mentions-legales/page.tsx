import type { Metadata } from "next";
import { Crumbs, FaqBlock, PageHead } from "@/components/blocks";
import { faqPages } from "@/data/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function Mentions() {
  return (
    <>
      <Crumbs items={[{ label: "Mentions légales" }]} />
      <PageHead h1="Mentions légales" />
      <section className="legal">
        <h2 className="serif">Éditeur du site</h2>
        <p>
          ANNE BOULLET STUDIO, SARL à associé unique au capital de 5 000 €
          <br />
          Siège social : 37 rue Denis Papin, 17000 La Rochelle
          <br />
          RCS La Rochelle 892 734 096
          <br />
          Directrice de la publication : Anne Boullet
          <br />
          Contact : [contact@anneboullet.fr]
        </p>
        <h2 className="serif">Hébergement</h2>
        <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
        <h2 className="serif">Propriété intellectuelle</h2>
        <p>
          Les textes et photographies de ce site sont la propriété d&apos;Anne Boullet Studio ou de leurs auteurs. Toute reproduction sans
          autorisation est interdite. [Crédits photographes à préciser]
        </p>
        <h2 className="serif">Données personnelles</h2>
        <p>
          Les informations envoyées par le formulaire de contact servent uniquement à répondre à votre demande. Vous pouvez demander leur
          modification ou leur suppression à tout moment par e-mail.
        </p>
      </section>
      <FaqBlock items={faqPages.mentions} />
    </>
  );
}
