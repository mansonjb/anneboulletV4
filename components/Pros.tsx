"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow } from "./ui";

const secteurs = [
  {
    nom: "Santé",
    slug: "sante",
    detail: "Cabinets, maternité, salles d'attente",
    exemple: "Salle à manger des parents, maternité de La Rochelle",
    texte: "Un lieu de pause pour les jeunes parents : papier peint végétal, mobilier, signalétique.",
    photo: "/pros/sante.jpg",
    alt: "Salle à manger des parents à la maternité de La Rochelle, papier peint végétal",
  },
  {
    nom: "Bureaux",
    slug: "bureaux",
    detail: "Espaces de travail et d'accueil",
    exemple: "Groupe d'expertise comptable, La Pallice",
    texte: "Des espaces de travail et d'accueil pensés pour les équipes comme pour les clients.",
    photo: null,
    alt: "",
  },
  {
    nom: "Hébergement",
    slug: "hebergement",
    detail: "Chambres d'hôtes, locations",
    exemple: "Maison de vacances, Saint-Clément-des-Baleines",
    texte: "Des lieux faciles à vivre pour la famille, les amis ou la location.",
    photo: "/pros/hebergement.jpg",
    alt: "Chambre au mur terracotta, maison de vacances à Saint-Clément-des-Baleines",
  },
];

const DUREE = 15000;

export default function Pros() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
  }, []);

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setI((x) => (x + 1) % secteurs.length), DUREE);
    return () => clearTimeout(t);
  }, [i, auto]);

  const pick = (k: number) => {
    setAuto(false);
    setI(k);
  };

  return (
    <div className="pro2">
      <div className="pro2-txt">
        <p className="pro2-kicker">Professionnels</p>
        <h2 className="h2 serif">
          Des lieux de travail <span className="acc">où chacun se sent bien</span>
        </h2>
        <p className="pro2-lede">
          Lieux d&apos;accueil qui rassurent, espaces de travail apaisés : conçus avec la même attention qu&apos;une maison.
        </p>
        <div className="pro2-tabs" role="tablist" aria-label="Secteurs" onMouseEnter={() => setAuto(false)}>
          {secteurs.map((x, k) => (
            <button
              key={x.nom}
              role="tab"
              type="button"
              id={`tab-${k}`}
              aria-selected={k === i}
              aria-controls="pro2-panel"
              className={`pro2-tab${k === i ? " on" : ""}`}
              onClick={() => pick(k)}
              onMouseEnter={() => pick(k)}
              onFocus={() => pick(k)}
            >
              <span className="pro2-n">0{k + 1}</span>
              <span className="pro2-name serif">{x.nom}</span>
              <span className="pro2-detail">{x.detail}</span>
              <span className="arrow">
                <Arrow size={14} />
              </span>
            </button>
          ))}
        </div>
        <a className="pill-btn bg-surface pro2-cta" href="/contact">
          Parler de votre lieu
          <span className="arrow">
            <Arrow />
          </span>
        </a>
      </div>

      <figure className="pro2-visual" id="pro2-panel" role="tabpanel" aria-labelledby={`tab-${i}`}>
        <div className="ph r-lg pro2-ph">
          {secteurs.map((x, k) =>
            x.photo ? (
              <Image
                key={x.nom}
                src={x.photo}
                alt={k === i ? x.alt : ""}
                aria-hidden={k !== i}
                fill
                sizes="(max-width: 960px) 100vw, 520px"
                className={k === i ? "on" : ""}
              />
            ) : (
              <div key={x.nom} className={`pro2-empty${k === i ? " on" : ""}`} aria-hidden={k !== i}>
                <span className="serif">Photos à venir</span>
              </div>
            ),
          )}
        </div>
        <figcaption className="pro2-caps">
          {secteurs.map((x, k) => (
            <div key={x.nom} className={`pro2-cap${k === i ? " on" : ""}`} aria-hidden={k !== i}>
              <span className="pro2-ex">{x.exemple}</span>
              {x.texte}
              <a className="pro2-more" href={`/professionnels/${x.slug}`} tabIndex={k === i ? 0 : -1}>
                Découvrir le secteur {x.nom.toLowerCase()}
                <Arrow size={14} />
              </a>
            </div>
          ))}
        </figcaption>
      </figure>
    </div>
  );
}
