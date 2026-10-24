import type { Metadata } from "next";
import { Crumbs, Cta, FaqBlock, PageHead } from "@/components/blocks";
import { Arrow } from "@/components/ui";
import { services, faqPages } from "@/data/site";

export const metadata: Metadata = {
  title: "Savoir-faire : agencement, décoration, signalétique, 3D",
  description: "Les savoir-faire d'Anne Boullet Studio à La Rochelle : agencement intérieur, plans de principe et 3D, planches d'ambiance, décoration, shopping list, signalétique, suivi esthétique.",
};

export default function Services() {
  return (
    <>
      <Crumbs items={[{ label: "Savoir-faire" }]} />
      <PageHead
        kicker="Savoir-faire"
        h1={
          <>
            Huit savoir-faire, <span className="mute">un même regard</span>
          </>
        }
        lede="De l'organisation des pièces au dernier objet posé : chaque savoir-faire peut s'inscrire dans une mission de conseil, de conception ou de décoration."
      />
      <section className="sec" style={{ paddingTop: 64 }}>
        <div className="other-m">
          {services.map((s, k) => (
            <a key={s.slug} href={`/services/${s.slug}`} className="other-link">
              <span className="pro2-n">{String(k + 1).padStart(2, "0")}</span>
              <span className="serif">{s.nom}</span>
              <span>{s.lede}</span>
              <span className="arrow">
                <Arrow size={14} />
              </span>
            </a>
          ))}
        </div>
      </section>
      <FaqBlock items={faqPages.services} />
      <Cta />
    </>
  );
}
