import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Chips, Crumbs, Cta, FaqBlock, JsonLd, PageHead, ProjetsLies, Prose } from "@/components/blocks";
import { missions, services } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s?.seoTitre ?? "Savoir-faire", description: s?.description };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const mission = missions.find((m) => m.slug === s.mission);
  const autres = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.h1,
          description: s.description,
          provider: { "@type": "ProfessionalService", name: "Anne Boullet Studio", address: { "@type": "PostalAddress", addressLocality: "La Rochelle", postalCode: "17000", addressCountry: "FR" } },
          areaServed: ["La Rochelle", "Île de Ré", "Oléron", "Rochefort", "Royan", "Saintes"],
        }}
      />
      <Crumbs items={[{ href: "/services", label: "Savoir-faire" }, { label: s.nom }]} />
      <PageHead kicker="Savoir-faire" h1={s.h1} lede={s.lede} />

      <section className="sec" style={{ paddingTop: 72 }}>
        <Prose sections={s.sections} />
      </section>

      <ProjetsLies slugs={s.projets} titre={s.projets.length > 1 ? "Des projets en exemple" : "Un projet en exemple"} />
      <FaqBlock items={s.faq} />
      <section className="related p-side">
        {mission && <Chips titre="Inclus dans la mission" items={[{ href: `/missions/${mission.slug}`, label: mission.titre }]} />}
        <Chips titre="Autres savoir-faire" items={autres.map((x) => ({ href: `/services/${x.slug}`, label: x.nom }))} />
      </section>
      <Cta />
    </>
  );
}
