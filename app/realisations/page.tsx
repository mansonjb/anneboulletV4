import type { Metadata } from "next";
import { Crumbs, Cta, FaqBlock, PageHead } from "@/components/blocks";
import { faqPages } from "@/data/site";
import RealisationsGrid from "@/components/RealisationsGrid";
import { projets } from "@/data/projets";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Maisons de famille, résidences secondaires et lieux professionnels aménagés par Anne Boullet Studio autour de La Rochelle.",
};

export default function Realisations() {
  return (
    <>
      <Crumbs items={[{ label: "Réalisations" }]} />
      <PageHead
        kicker="Réalisations"
        h1={
          <>
            Des maisons <span className="mute">qui racontent quelque chose</span>
          </>
        }
        lede="Maisons de famille, résidences secondaires et lieux professionnels, à La Rochelle, sur l'Île de Ré et à Oléron."
      />
      <section style={{ paddingTop: 56 }}>
        <RealisationsGrid projets={projets} />
      </section>
      <FaqBlock items={faqPages.realisations} />
      <Cta />
    </>
  );
}
