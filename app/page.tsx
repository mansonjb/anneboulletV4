import ContactForm from "@/components/ContactForm";
import { FaqBlock, JsonLd } from "@/components/blocks";
import { getProjet, legende, projets, src, type Projet } from "@/data/projets";
import { faqPages, missions, secteurs, services, zones } from "@/data/site";
import Spread, { type Chapitre } from "@/components/v4/Spread";

const p = (slug: string) => getProjet(slug) as Projet;
const oleron = p("maison-de-famille-saint-denis-d-oleron");
const parpaillaud = p("maison-de-village-saint-clement-des-baleines");
const ville = p("maison-de-ville-renovee-la-rochelle");

const matieres = [
  { nom: "Le bois", ligne: "Il porte la maison et la réchauffe.", img: "bois", lieu: "Charpente apparente, Saint-Denis-d'Oléron" },
  { nom: "Les fibres", ligne: "Rotin et jute laissent passer une lumière adoucie.", img: "rotin", lieu: "Suspensions, Saint-Denis-d'Oléron" },
  { nom: "Les textiles", ligne: "Lin et tissus imprimés invitent à s'installer.", img: "lin", lieu: "Coussins, Saint-Denis-d'Oléron" },
  { nom: "Le zellige", ligne: "Chaque carreau renvoie la lumière à sa façon.", img: "zellige", lieu: "Douche, Saint-Clément-des-Baleines" },
  { nom: "La pierre", ligne: "Elle garde la mémoire du lieu.", img: "pierre", lieu: "Mur en pierre, Saint-Clément-des-Baleines" },
  { nom: "Le laiton", ligne: "Il se patine avec le temps et réchauffe la lumière.", img: "laiton", lieu: "Pommeau de douche, Les Portes-en-Ré" },
];

const etapes = [
  { titre: "Premier contact", texte: "Un échange pour comprendre votre projet et vos envies." },
  { titre: "Visite et devis", texte: "Une rencontre sur place, puis un devis accompagné d'un débriefing écrit." },
  { titre: "Carnet de projet", texte: "Un questionnaire sur votre façon de vivre et le relevé des cotes." },
  { titre: "Esquisse puis projet", texte: "Avant-projet sommaire, puis détaillé : plans de principe, matières, 3D." },
  { titre: "Suivi et réception", texte: "Un suivi esthétique du chantier, jusqu'à la réception." },
];

export default function Home() {
  const imgs = new Map<string, string>();
  const add = (s: string, alt: string) => (imgs.has(s) ? s : (imgs.set(s, alt), s));

  const accueil = add(src(oleron.photos[0]), "Séjour de la maison de famille à Saint-Denis-d'Oléron : charpente apparente, bois blond, lin et rotin");
  const approche = add(src(oleron.photos[1]), "Maison de famille à Saint-Denis-d'Oléron, séjour et objets de famille");
  const realis = add(src(parpaillaud.photos[0]), parpaillaud.alt);
  const mis = add(src(ville.photos[0]), ville.alt);
  const mat = add("/matieres/bois.jpg", "Bois : charpente apparente, Saint-Denis-d'Oléron");
  const avis = add("/avis/avis-3.jpg", "Intérieur rénové par Anne Boullet Studio");
  const pros = add("/pros/sante.jpg", "Salle à manger des parents, maternité de La Rochelle");
  const sf = add(src(p("piece-de-vie-sur-mesure-aytre").photos[0]), "Pièce de vie à Aytré, banquette et papier peint panoramique");
  const portrait = add("/studio/anne-boullet.jpg", "Anne Boullet, décoratrice d'intérieur à La Rochelle");
  projets.forEach((x) => add(src(x.photos[0]), x.alt));
  matieres.forEach((m) => add(`/matieres/${m.img}.jpg`, `${m.nom} : ${m.lieu}`));
  secteurs.forEach((s) => s.photo && add(s.photo, s.h1));

  const chapitres: Chapitre[] = [
    {
      id: "accueil",
      titre: "Le studio",
      img: accueil,
      legende: "Maison de famille, Saint-Denis-d'Oléron",
      contenu: (
        <>
          <h1 className="d1">
            Décoratrice d&apos;intérieur <em>à La Rochelle</em>
          </h1>
          <p className="big">
            Des maisons lumineuses et chaleureuses, pensées pour durer. Conseil, conception et décoration pour les particuliers et les professionnels, à
            une heure autour de La Rochelle.
          </p>
          <p className="acts">
            <a className="btn4" href="#contact">
              Prendre rendez-vous
            </a>
            <a className="ul" href="#realisations">
              Voir les réalisations
            </a>
          </p>
          <p className="zones4">
            <span>Interventions</span>
            {zones.map((z) => (
              <a key={z.slug} href={`/zones/${z.slug}`}>
                {z.nom}
              </a>
            ))}
            <span className="z">Châtelaillon-Plage</span>
            <span className="z">Rochefort</span>
            <span className="z">Royan</span>
            <span className="z">Saintes</span>
          </p>
        </>
      ),
    },
    {
      id: "approche",
      titre: "L'approche",
      img: approche,
      legende: "Objets de famille, Saint-Denis-d'Oléron",
      contenu: (
        <>
          <h2 className="d2">
            Des intérieurs qui semblent <em>avoir toujours vécu</em>
          </h2>
          <p className="big">
            Chaque projet part de la lumière, de la maison telle qu&apos;elle est et de la façon dont vous y vivez. Le bois, le lin, la terre cuite et la
            pierre sont choisis pour bien vieillir, loin des tendances qui passent.
          </p>
          <ol className="steps4">
            {etapes.map((s, i) => (
              <li key={s.titre}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <b>{s.titre}</b>
                  <p>{s.texte}</p>
                </div>
              </li>
            ))}
          </ol>
        </>
      ),
    },
    {
      id: "realisations",
      titre: "Réalisations",
      img: realis,
      legende: "Maison de village, Saint-Clément-des-Baleines",
      contenu: (
        <>
          <h2 className="d2">
            Sept maisons, <em>sept histoires</em>
          </h2>
          <p className="hint">Survolez un projet pour le voir.</p>
          <ol className="rows" data-swap>
            {projets.map((x, i) => (
              <li key={x.slug} data-img={src(x.photos[0])} data-cap={`${x.titre}`}>
                <a href={`/realisations/${x.slug}`}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t">
                    {x.titre.split(",")[0]} <em>{x.commune}</em>
                  </span>
                  <span className="m">{legende(x)}</span>
                </a>
              </li>
            ))}
          </ol>
          <a className="ul" href="/realisations">
            Toutes les réalisations
          </a>
        </>
      ),
    },
    {
      id: "missions",
      titre: "Missions",
      img: mis,
      legende: "Maison de ville, La Rochelle",
      contenu: (
        <>
          <h2 className="d2">
            Trois façons <em>de travailler ensemble</em>
          </h2>
          <p className="big">Du simple regard extérieur au projet complet : vous choisissez le niveau d&apos;accompagnement.</p>
          <div className="mis4">
            {missions.map((m) => (
              <a key={m.slug} href={`/missions/${m.slug}`}>
                <span className="n">{m.n}</span>
                <h3>{m.titre}</h3>
                <p>{m.lede}</p>
                <p className="pour">Idéal pour {m.pour}</p>
              </a>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "matieres",
      titre: "Matières",
      img: mat,
      legende: "Le bois, charpente apparente",
      contenu: (
        <>
          <h2 className="d2">
            Une maison se raconte <em>par ses matières</em>
          </h2>
          <p className="big">
            Avant les couleurs et les meubles, je pense à ce que vous toucherez chaque jour : des matières naturelles, travaillées par des artisans
            d&apos;ici, qui vieillissent avec la maison.
          </p>
          <ul className="rows mats" data-swap>
            {matieres.map((m, i) => (
              <li key={m.nom} data-img={`/matieres/${m.img}.jpg`} data-cap={m.lieu}>
                <div>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t">{m.nom}</span>
                  <span className="m">{m.ligne}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "avis",
      titre: "Avis",
      img: avis,
      legende: "Avis Google",
      contenu: (
        <>
          <blockquote className="q4">
            « C&apos;est une parfaite rénovation, faite avec du goût, des idées novatrices et du talent. <em>Je n&apos;aurais jamais osé la couleur sans
            elle.</em> »
          </blockquote>
          <p className="by">Sylvie B. · Rénovation d&apos;un appartement · Avis Google</p>
          <blockquote className="q4 q4s">
            « Après avoir acheté une maison datant de 1650, à totalement rénover, Anne a été un atout essentiel pour la rendre fonctionnelle et esthétique.
            Le résultat dépasse mes espérances. La famille s&apos;y sent bien. »
          </blockquote>
          <p className="by">Guirec T. · Rénovation d&apos;une maison de 1650 · Avis Google</p>
        </>
      ),
    },
    {
      id: "professionnels",
      titre: "Professionnels",
      img: pros,
      legende: "Maternité de La Rochelle",
      contenu: (
        <>
          <h2 className="d2">
            Des lieux de travail <em>où chacun se sent bien</em>
          </h2>
          <p className="big">Lieux d&apos;accueil qui rassurent, espaces de travail apaisés : conçus avec la même attention qu&apos;une maison.</p>
          <ul className="rows" data-swap>
            {secteurs.map((s, i) => (
              <li key={s.slug} {...(s.photo ? { "data-img": s.photo, "data-cap": s.nom } : {})}>
                <a href={`/professionnels/${s.slug}`}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t">{s.nom}</span>
                  <span className="m">{s.detail}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "savoir-faire",
      titre: "Savoir-faire",
      img: sf,
      legende: "Pièce de vie, Aytré",
      contenu: (
        <>
          <h2 className="d2">
            Huit savoir-faire, <em>un même regard</em>
          </h2>
          <ul className="sf4">
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`/services/${s.slug}`}>{s.nom}</a>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "questions",
      titre: "Questions",
      img: realis,
      legende: "Maison de village, Saint-Clément-des-Baleines",
      contenu: <FaqBlock items={faqPages.accueil} />,
    },
    {
      id: "contact",
      titre: "Rendez-vous",
      img: portrait,
      legende: "Anne Boullet",
      contenu: (
        <>
          <h2 className="d2">
            Parlons de <em>votre projet</em>
          </h2>
          <p className="big">Quelques lignes suffisent. Anne vous recontacte pour un premier échange, puis un rendez-vous sur place.</p>
          <ContactForm />
        </>
      ),
    },
  ];

  return (
    <div className="home4">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Anne Boullet Studio",
          description: "Décoratrice d'intérieur à La Rochelle : conseil, conception et décoration pour les particuliers et les professionnels.",
          url: "https://anneboulletv4.vercel.app",
          address: { "@type": "PostalAddress", addressLocality: "La Rochelle", postalCode: "17000", addressCountry: "FR" },
          areaServed: ["La Rochelle", "Île de Ré", "Oléron", "Châtelaillon-Plage", "Rochefort", "Royan", "Saintes"],
          knowsAbout: ["Décoration d'intérieur", "Agencement intérieur", "Signalétique", "Rénovation"],
        }}
      />
      <Spread chapitres={chapitres} images={[...imgs].map(([s, alt]) => ({ src: s, alt }))} />
    </div>
  );
}
