"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Arrow } from "./ui";

// Avis Google réels (extraits, coquilles corrigées).
const avis = [
  {
    texte:
      "Ce que j'ai le plus apprécié, ce sont les étapes pour parvenir au projet final : du questionnaire sur nos habitudes de vie jusqu'à l'avant-projet détaillé et la shopping list. J'ai totalement eu confiance et ne regrette pas l'accompagnement du début à la fin.",
    nom: "Isabelle A.",
    contexte: "Agrandissement d'une maison de vacances",
    photo: "/avis/avis-1.jpg",
    alt: "Lampe en rotin, maison de famille à Saint-Denis-d'Oléron",
  },
  {
    texte:
      "Après avoir acheté une maison datant de 1650, à totalement rénover, Anne a été un atout essentiel pour la rendre fonctionnelle et esthétique. Le résultat dépasse mes espérances. La famille s'y sent bien.",
    nom: "Guirec T.",
    contexte: "Rénovation d'une maison de 1650",
    photo: "/avis/avis-2.jpg",
    alt: "Chambre lumineuse avec cheminée, maison de ville à La Rochelle",
  },
  {
    texte:
      "C'est une parfaite rénovation, faite avec du goût, des idées novatrices et du talent. Je n'aurais jamais osé la couleur sans elle.",
    nom: "Sylvie B.",
    contexte: "Rénovation d'un appartement",
    photo: "/avis/avis-3.jpg",
    alt: "Chambre au mur terracotta, Saint-Clément-des-Baleines",
  },
  {
    texte:
      "Les propositions déco d'Anne nous ont tout de suite plu, car elle a su capter nos besoins et nos attentes. Les artisans recommandés étaient très professionnels et de confiance.",
    nom: "Julia B.",
    contexte: "Projet de décoration",
    photo: "/avis/avis-4.jpg",
    alt: "Banquette et papier peint panoramique, pièce de vie à Aytré",
  },
  {
    texte:
      "Anne m'a accompagné sur deux projets de rénovation : efficacité, disponibilité, force de propositions. Je recommande !",
    nom: "Clément W.",
    contexte: "Deux projets de rénovation",
    photo: "/avis/avis-5.jpg",
    alt: "Mur terracotta et bibliothèque, maison esprit surf à La Rochelle",
  },
  {
    texte:
      "Avec beaucoup de talent, Anne Boullet a su rénover et décorer superbement une maison du XIXᵉ siècle pour l'un de mes clients.",
    nom: "Isabelle A. de S.",
    contexte: "Rénovation d'une maison du XIXᵉ siècle",
    photo: "/avis/avis-6.jpg",
    alt: "Fauteuils en rotin près de la fenêtre, annexe aux Portes-en-Ré",
  },
];

const DUREE = 15000;

export default function Temoignages() {
  const [i, setI] = useState(0);
  const [pause, setPause] = useState(false);
  const [reduit, setReduit] = useState(false);
  const a = avis[i];
  const go = (d: number) => setI((x) => (x + d + avis.length) % avis.length);

  useEffect(() => {
    setReduit(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Défilement automatique toutes les 15 s, relancé à chaque changement, en pause au survol.
  useEffect(() => {
    if (pause || reduit) return;
    const t = setTimeout(() => go(1), DUREE);
    return () => clearTimeout(t);
  }, [i, pause, reduit]);

  return (
    <>
    <div onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)} onFocus={() => setPause(true)} onBlur={() => setPause(false)}>
      <div className="temo-stack" aria-live="polite">
        {avis.map((x, k) => (
          <blockquote key={x.nom} className={`temo-q${k === i ? " on" : ""}`} aria-hidden={k !== i}>
            <p className={`serif${x.texte.length > 180 ? " long" : ""}`}>« {x.texte} »</p>
          </blockquote>
        ))}
      </div>
      <div className="who">
        <div>
          <strong>{a.nom}</strong>
          <span>
            {a.contexte} · Avis Google
          </span>
        </div>
        <div className="who-nav">
          <span className="who-count" aria-hidden="true">
            {i + 1} / {avis.length}
          </span>
          <button className="circ" type="button" aria-label="Avis précédent" onClick={() => go(-1)}>
            <Arrow size={14} back />
          </button>
          <button className="circ on" type="button" aria-label="Avis suivant" onClick={() => go(1)}>
            <Arrow size={14} />
          </button>
        </div>
      </div>
    </div>
    <figure className="temo-ph ph r-lg">
      {avis.map((x, k) => (
        <Image
          key={x.photo}
          src={x.photo}
          alt={k === i ? x.alt : ""}
          aria-hidden={k !== i}
          fill
          sizes="(max-width: 960px) 100vw, 540px"
          loading={k === 0 ? "eager" : "lazy"}
          className={k === i ? "on" : ""}
        />
      ))}
    </figure>
    </>
  );
}
