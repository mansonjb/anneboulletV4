"use client";

import { useEffect, useRef, useState } from "react";

export type Chapitre = { id: string; titre: string; img: string; legende: string; contenu: React.ReactNode };

// La double page : à gauche une image fixe, à droite le texte qui défile.
// Chaque chapitre (et chaque ligne survolée portant data-img) change l'image de gauche
// par un volet qui remonte, comme une page qu'on tourne.
export default function Spread({ chapitres, images }: { chapitres: Chapitre[]; images: { src: string; alt: string }[] }) {
  const figs = useRef<(HTMLElement | null)[]>([]);
  const z = useRef(1);
  const courant = useRef(-1);
  const [ch, setCh] = useState(0);
  const [cap, setCap] = useState(chapitres[0].legende);

  const montrer = (src: string, legende?: string) => {
    const i = images.findIndex((x) => x.src === src);
    if (i < 0 || i === courant.current) return;
    courant.current = i;
    const f = figs.current[i];
    if (!f) return;
    f.style.transition = "none";
    f.style.clipPath = "inset(100% 0 0 0)";
    f.style.zIndex = String(++z.current);
    f.classList.remove("in");
    void f.offsetWidth;
    f.style.transition = "";
    f.style.clipPath = "inset(0 0 0 0)";
    f.classList.add("in");
    if (legende) setCap(legende);
  };

  useEffect(() => {
    montrer(chapitres[0].img, chapitres[0].legende);
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          const k = chapitres.findIndex((c) => c.id === e.target.id);
          if (k < 0) return;
          setCh(k);
          montrer(chapitres[k].img, chapitres[k].legende);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    chapitres.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Survol d'une ligne : l'image de gauche montre le projet, la matière ou le secteur
  const survol = (e: React.MouseEvent) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>("[data-img]");
    if (t?.dataset.img) montrer(t.dataset.img, t.dataset.cap);
    else montrer(chapitres[ch].img, chapitres[ch].legende);
  };
  const sortie = () => montrer(chapitres[ch].img, chapitres[ch].legende);

  return (
    <div className="spread">
      <aside className="sp-l" aria-hidden="true">
        {images.map((im, i) => (
          <figure key={im.src} ref={(el) => void (figs.current[i] = el)} className="sp-f">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={im.src} alt="" loading={i < 2 ? "eager" : "lazy"} />
          </figure>
        ))}
        <div className="sp-cap">
          <span>
            {String(ch + 1).padStart(2, "0")} / {String(chapitres.length).padStart(2, "0")} · {chapitres[ch].titre}
          </span>
          <span>{cap}</span>
        </div>
        <span className="sp-bar" style={{ transform: `scaleY(${(ch + 1) / chapitres.length})` }} />
      </aside>
      <div className="sp-r" onMouseOver={survol} onMouseLeave={sortie}>
        {chapitres.map((c, k) => (
          <section key={c.id} id={c.id} className="chap">
            <figure className="m-ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={images.find((x) => x.src === c.img)?.alt ?? ""} loading={k < 1 ? "eager" : "lazy"} />
            </figure>
            <p className="chap-n">
              <span>{String(k + 1).padStart(2, "0")}</span> {c.titre}
            </p>
            {c.contenu}
          </section>
        ))}
      </div>
    </div>
  );
}
