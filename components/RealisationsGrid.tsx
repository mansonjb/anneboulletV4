"use client";

import { useState } from "react";
import { legende, type Projet } from "@/data/projets";
import { Ph } from "./ui";

const FILTRES = ["Tous", "Particulier", "Professionnel"] as const;

export default function RealisationsGrid({ projets }: { projets: Projet[] }) {
  const [f, setF] = useState<(typeof FILTRES)[number]>("Tous");
  const liste = f === "Tous" ? projets : projets.filter((p) => p.type === f);
  return (
    <>
      <div className="filters" role="group" aria-label="Filtrer les réalisations">
        {FILTRES.map((x) => (
          <button key={x} type="button" className="filter" aria-pressed={f === x} onClick={() => setF(x)}>
            {x === "Tous" ? "Tous les projets" : `${x}s`}
            <span>{x === "Tous" ? projets.length : projets.filter((p) => p.type === x).length}</span>
          </button>
        ))}
      </div>
      <div className="v2-work">
        {liste.map((p) => (
          <a key={p.slug} className="v2-w" href={`/realisations/${p.slug}`}>
            <Ph photo={p.photos[0]} className="" sizes="(max-width: 960px) 100vw, 50vw" alt={p.alt} />
            <span className="v2-w-cap">
              <span className="serif">{p.titre}</span>
              <span>{legende(p)}</span>
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
