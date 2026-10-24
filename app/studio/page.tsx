import type { Metadata } from "next";
import Image from "next/image";
import { Crumbs, Cta, FaqBlock, PageHead } from "@/components/blocks";
import { Ph } from "@/components/ui";
import { getProjet, type Projet } from "@/data/projets";
import { partenairesStudio, faqPages } from "@/data/site";
import Partenaires from "@/components/Partenaires";

export const metadata: Metadata = {
  title: "Le studio · Anne Boullet, décoratrice d'intérieur",
  description: "Anne Boullet, décoratrice d'intérieur à La Rochelle : redonner une âme aux lieux, avec des matières naturelles et des artisans d'ici.",
};

const valeurs = [
  { t: "Respecter l'histoire des lieux", d: "Garder ce qui fait le caractère d'une maison, et lui redonner une âme." },
  { t: "Des matières naturelles", d: "Bois, lin, jute, rotin, zellige, chaux, travertin : des matières qui vieillissent bien." },
  { t: "L'artisanat local", d: "Des artisans de confiance, choisis près de chez vous." },
  { t: "L'humain au cœur", d: "Une relation de confiance, pour que vous puissiez déléguer sereinement." },
];

export default function Studio() {
  const oleron = getProjet("maison-de-famille-saint-denis-d-oleron") as Projet;
  return (
    <>
      <Crumbs items={[{ label: "Le studio" }]} />
      <PageHead
        kicker="Le studio"
        h1={
          <>
            Traduire un espace neuf <span className="mute">comme un lieu qui a toujours vécu</span>
          </>
        }
      />

      <section className="sec duo duo-portrait" style={{ paddingTop: 72 }}>
        <figure>
          <div className="ph r-lg" style={{ aspectRatio: "4 / 5" }}>
            <Image src="/studio/anne-boullet.jpg" alt="Anne Boullet, décoratrice d'intérieur à La Rochelle" fill sizes="(max-width: 960px) 100vw, 400px" preload unoptimized />
          </div>
          <figcaption className="cap">Anne Boullet</figcaption>
        </figure>
        <div className="zone-txt">
          <p>
            Je suis décoratrice d&apos;intérieur, installée à La Rochelle. J&apos;accompagne des particuliers et des professionnels à une heure
            autour du studio, de l&apos;Île de Ré à Oléron.
          </p>
          <p>
            Ce que j&apos;aime : révéler un lieu, respecter son histoire et lui redonner une âme. Beaucoup de mes clients me confient leur
            résidence secondaire : ils veulent déléguer, en confiance.
          </p>
          <p className="note">[Parcours et formation d&apos;Anne, quelques lignes à venir.]</p>
        </div>
      </section>

      <section className="sec">
        <div className="sec-top">
          <h2 className="h2 serif">
            Ce qui guide <span className="mute">chaque projet</span>
          </h2>
        </div>
        <div className="vals">
          {valeurs.map((v, k) => (
            <div key={v.t} className="val">
              <span className="pro2-n">0{k + 1}</span>
              <h3 className="serif">{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <figure className="hero-photo" style={{ marginTop: 0 }}>
          <Ph photo={oleron.photos[3]} ratio="16 / 9" alt="Maison de famille à Saint-Denis-d'Oléron" />
          <figcaption className="cap center">Maison de famille, Saint-Denis-d&apos;Oléron</figcaption>
        </figure>
      </section>

      <section className="sec">
        <div className="sec-top">
          <h2 className="h2 serif">
            Artisans <span className="mute">et partenaires</span>
          </h2>
          <p className="sec-lede">Des artisans et des fournisseurs de la région, avec qui je travaille en confiance sur les chantiers.</p>
        </div>
        <Partenaires cles={partenairesStudio} />
      </section>
      <FaqBlock items={faqPages.studio} />
      <Cta />
    </>
  );
}
