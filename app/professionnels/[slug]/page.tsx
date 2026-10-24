import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Chips, Crumbs, Cta, FaqBlock, PageHead, ProjetsLies, Prose } from "@/components/blocks";
import { secteurs } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/professionnels/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = secteurs.find((x) => x.slug === slug);
  return { title: s?.seoTitre ?? "Professionnels", description: s?.description };
}

export default async function SecteurPage({ params }: PageProps<"/professionnels/[slug]">) {
  const { slug } = await params;
  const s = secteurs.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <Crumbs items={[{ href: "/professionnels", label: "Professionnels" }, { label: s.nom }]} />
      <PageHead kicker={`Professionnels · ${s.nom}`} h1={s.h1} lede={s.lede} />

      <section className="sec duo" style={{ paddingTop: 72 }}>
        <div>
          <h2 className="h2 serif">
            Ce qui compte <span className="mute">dans ces lieux</span>
          </h2>
          <ul className="check">
            {s.enjeux.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <h3 className="serif sub-t">Exemples</h3>
          {s.exemples.map((e) => (
            <p className="note" key={e}>
              {e}
            </p>
          ))}
          <h3 className="serif sub-t">Ce que je prends en charge</h3>
          <p className="note">Agencement de l&apos;espace, décoration, signalétique, plans de principe et perspectives 3D, suivi esthétique du chantier.</p>
        </div>
        <figure className="duo-photo">
          <div className="ph r-lg" style={{ aspectRatio: "4 / 5" }}>
            {s.photo ? (
              <Image src={s.photo} alt={s.h1} fill sizes="(max-width: 960px) 100vw, 580px" preload />
            ) : (
              <div className="pro2-empty on">
                <span className="serif">Photos à venir</span>
              </div>
            )}
          </div>
        </figure>
      </section>

      <section className="sec">
        <Prose sections={s.sections} />
      </section>

      {s.projet && <ProjetsLies slugs={[s.projet]} />}

      <FaqBlock items={s.faq} titre={<>Questions <span className="mute">des professionnels</span></>} />
      <section className="related">
        <Chips
          titre="Savoir-faire mobilisés"
          items={[
            { href: "/services/agencement-interieur", label: "Agencement intérieur" },
            { href: "/services/signaletique", label: "Signalétique" },
            { href: "/services/decoration-interieure", label: "Décoration intérieure" },
            { href: "/services/plans-de-principe-et-3d", label: "Plans de principe et 3D" },
          ]}
          />
      </section>
      <Cta titre="Parlons de votre lieu" texte="Un premier échange pour comprendre votre activité, vos équipes et vos contraintes." />
    </>
  );
}
