import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Chips, Crumbs, Cta, FaqBlock, JsonLd, PageHead, ProjetsLies, Prose } from "@/components/blocks";
import { Arrow, Ph } from "@/components/ui";
import { getProjet } from "@/data/projets";
import { missions, services } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return missions.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/missions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = missions.find((x) => x.slug === slug);
  return { title: m?.seoTitre ?? "Mission", description: m?.description };
}

export default async function MissionPage({ params }: PageProps<"/missions/[slug]">) {
  const { slug } = await params;
  const m = missions.find((x) => x.slug === slug);
  if (!m) notFound();
  const p = getProjet(m.photo.projet);
  const autres = missions.filter((x) => x.slug !== m.slug);
  const svc = services.filter((s) => m.services.includes(s.slug));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: m.h1,
          description: m.description,
          provider: { "@type": "ProfessionalService", name: "Anne Boullet Studio", address: { "@type": "PostalAddress", addressLocality: "La Rochelle", postalCode: "17000", addressCountry: "FR" } },
          areaServed: ["La Rochelle", "Île de Ré", "Oléron", "Rochefort", "Royan", "Saintes"],
        }}
      />
      <Crumbs items={[{ href: "/#missions", label: "Missions" }, { label: m.titre }]} />
      <PageHead kicker={`Mission ${m.n}`} h1={m.h1} lede={m.lede} />

      <section className="sec duo" style={{ paddingTop: 72 }}>
        <div>
          <h2 className="h2 serif">
            Ce que <span className="mute">vous recevez</span>
          </h2>
          <ul className="check">
            {m.recu.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="body">
            <strong>Idéal pour</strong> {m.pour}
          </p>
          {m.bon.map((b) => (
            <p className="note" key={b}>
              {b}
            </p>
          ))}
        </div>
        {p && (
          <figure className="duo-photo">
            <Ph photo={p.photos[m.photo.i] ?? p.photos[0]} ratio="4 / 5" sizes="(max-width: 960px) 100vw, 580px" alt={p.alt} />
            <figcaption className="cap">{p.titre}</figcaption>
          </figure>
        )}
      </section>

      <section className="sec">
        <Prose sections={m.sections} />
      </section>

      <section className="sec">
        <div className="methode" style={{ marginTop: 0 }}>
          <h2 className="serif methode-t">
            Comment <span className="mute">ça se passe</span>
          </h2>
          <ol className="frise frise-3">
            {m.deroule.map((s, k) => (
              <li key={s.titre}>
                <span className="f-n">{k + 1}</span>
                <h3 className="serif">{s.titre}</h3>
                <p>{s.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {p && <ProjetsLies slugs={[p.slug]} />}

      <FaqBlock items={m.faq} />

      <section className="sec">
        <div className="sec-top">
          <h2 className="h2 serif">
            Les autres <span className="mute">missions</span>
          </h2>
        </div>
        <div className="other-m">
          {autres.map((x) => (
            <a key={x.slug} href={`/missions/${x.slug}`} className="other-link">
              <span className="pro2-n">Mission {x.n}</span>
              <span className="serif">{x.titre}</span>
              <span>{x.lede}</span>
              <span className="arrow">
                <Arrow size={14} />
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="related">
        <Chips titre="Savoir-faire liés à cette mission" items={svc.map((s) => ({ href: `/services/${s.slug}`, label: s.nom }))} />
      </section>
      <Cta />
    </>
  );
}
