import type { Metadata } from "next";
import { Accordion, Crumbs, Cta, PageHead } from "@/components/blocks";
import { faq } from "@/data/site";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description: "Accompagnement, artisans, permis, budget, délais : les réponses d'Anne Boullet Studio aux questions les plus fréquentes.",
};

export default function Faq() {
  const repondues = faq.flatMap((g) => g.items).filter((q) => !q.r.startsWith("["));
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: repondues.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.r } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Crumbs items={[{ label: "Questions fréquentes" }]} />
      <PageHead
        kicker="Questions fréquentes"
        h1={
          <>
            Vos questions, <span className="mute">mes réponses</span>
          </>
        }
        lede="Les questions qui reviennent le plus souvent avant de commencer un projet."
      />
      <div className="faq-groups">
        {faq.map((g) => (
          <section key={g.groupe} className="faq-g">
            <h2 className="serif">{g.groupe}</h2>
            <Accordion items={g.items} />
          </section>
        ))}
      </div>
      <Cta titre="Une autre question ?" texte="Écrivez-moi quelques lignes, je vous réponds rapidement." />
    </>
  );
}
