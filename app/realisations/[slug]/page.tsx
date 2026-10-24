import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Chips, Crumbs, Cta, FaqBlock, JsonLd, Prose } from "@/components/blocks";
import { Arrow, Ph } from "@/components/ui";
import Partenaires from "@/components/Partenaires";
import { getProjet, projets, src } from "@/data/projets";
import { missions, secteurs, services, zones } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjet(slug);
  return {
    title: p?.seoTitre ?? "Réalisation",
    description: p?.description,
    openGraph: p ? { images: [src(p.photos[0])] } : undefined,
  };
}

export default async function Realisation({ params }: PageProps<"/realisations/[slug]">) {
  const { slug } = await params;
  const p = getProjet(slug);
  if (!p) notFound();
  const i = projets.indexOf(p);
  const suivant = projets[(i + 1) % projets.length];
  const mission = missions.find((m) => m.slug === p.mission);
  const secteur = secteurs.find((s) => s.slug === p.secteur);
  const zone = zones.find((z) => z.slug === p.zone);
  const svc = services.filter((s) => p.services?.includes(s.slug));
  const [intro, ...suite] = p.texte;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.titre,
          description: p.description,
          image: p.photos.slice(0, 4).map((ph) => `https://anneboulletv4.vercel.app${src(ph)}`),
          creator: { "@type": "ProfessionalService", name: "Anne Boullet Studio" },
          ...(p.commune.startsWith("[") ? {} : { locationCreated: { "@type": "Place", name: p.commune } }),
        }}
      />
      <Crumbs items={[{ href: "/realisations", label: "Réalisations" }, { label: p.titre }]} />
      <section className="p-head">
        <p className="pro2-kicker">{p.type === "Professionnel" ? "Projet professionnel" : "Projet particulier"}</p>
        <h1 className="h1 serif">{p.titre}</h1>
        <p className="p-sub serif">{p.sousTitre}</p>
        <p className="lede" style={{ marginBottom: 0 }}>
          {p.resume}
        </p>
        <div className="p-meta">
          {p.meta.map((m) => (
            <span className="tag" key={m}>
              {m}
            </span>
          ))}
        </div>
      </section>

      <figure className="hero-photo" style={{ marginTop: 56 }}>
        <Ph photo={p.photos[0]} ratio="16 / 9" preload alt={`${p.alt}, vue d'ensemble`} />
      </figure>

      <div className="p-body">
        <div>
          {intro && <Prose sections={[intro]} />}
          {suite.length > 0 && <Prose sections={suite} />}
        </div>
        <aside className="p-side">
          {p.matieres && (
            <div>
              <p className="pro2-kicker">Matières</p>
              <ul className="mat-tags">
                {p.matieres.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="p-links">
            {mission && (
              <a href={`/missions/${mission.slug}`}>
                <span>Mission</span>
                {mission.titre}
                <Arrow size={14} />
              </a>
            )}
            {secteur && (
              <a href={`/professionnels/${secteur.slug}`}>
                <span>Secteur</span>
                {secteur.nom}
                <Arrow size={14} />
              </a>
            )}
            {zone && (
              <a href={`/zones/${zone.slug}`}>
                <span>Secteur géographique</span>
                {zone.nom}
                <Arrow size={14} />
              </a>
            )}
          </div>
        </aside>
      </div>

      <section className="gal" aria-label="Galerie photos">
        {p.photos.slice(1).map((ph, k) => (
          <figure key={ph.file}>
            <Ph photo={ph} className="" sizes="(max-width: 960px) 100vw, 580px" alt={`${p.alt}, photo ${k + 2}`} />
          </figure>
        ))}
      </section>

      <FaqBlock
        items={
          p.faq ?? [
            ...(p.matieres ? [{ q: "Quelles matières pour ce projet ?", r: `${p.matieres.join(", ")}.` }] : []),
            { q: "Un projet comme celui-ci est-il possible chez moi ?", r: "Oui, à La Rochelle, sur l'Île de Ré, à Oléron et à une heure autour. Tout commence par un premier échange, puis une visite sur place." },
            { q: "Quelle mission choisir pour ce type de projet ?", r: "La conception si les pièces doivent être réorganisées, la décoration si l'agencement vous convient déjà." },
          ]
        }
        titre={<>Questions <span className="mute">sur ce projet</span></>}
      />

      {p.partenaires && (
        <section className="related">
          <p className="pro2-kicker">Artisans et partenaires du projet</p>
          <Partenaires cles={p.partenaires} compact />
        </section>
      )}

      {svc.length > 0 && (
        <section className="related" style={{ paddingTop: 48 }}>
          <Chips titre="Savoir-faire mobilisés sur ce projet" items={svc.map((s) => ({ href: `/services/${s.slug}`, label: s.nom }))} />
        </section>
      )}

      <section className="next-p">
        <p className="cap" style={{ marginBottom: 12 }}>
          Projet suivant
        </p>
        <a className="ghost" href={`/realisations/${suivant.slug}`}>
          {suivant.titre}
          <span className="arrow">
            <Arrow size={14} />
          </span>
        </a>
      </section>
      <Cta titre="Un projet similaire ?" />
    </>
  );
}
