import photos from "./photos.json";

export type Photo = { file: string; src: string; w: number; h: number };
export type Section = { titre: string; paragraphes?: string[]; liste?: string[] };
export type QR = { q: string; r: string };

export type Projet = {
  slug: string;
  titre: string;
  sousTitre: string;
  seoTitre: string;
  description: string;
  type: "Particulier" | "Professionnel";
  commune: string;
  zone?: string;
  meta: string[];
  resume: string;
  texte: Section[];
  matieres?: string[];
  faq?: QR[];
  partenaires?: string[]; // clés de data/site.ts > partenaires
  photos: Photo[];
  alt: string;
  mission?: string;
  secteur?: string;
  services?: string[];
};

const p = photos as Record<string, Photo[]>;

export const projets: Projet[] = [
  {
    slug: "maison-de-famille-saint-denis-d-oleron",
    titre: "Maison de famille, Saint-Denis-d'Oléron",
    sousTitre: "Rénovation et extension d'une maison de 92 à plus de 170 m²",
    seoTitre: "Rénovation et extension d'une maison à Saint-Denis-d'Oléron",
    description:
      "Une maison de 92 m² rénovée et agrandie de 80 m² à Saint-Denis-d'Oléron : redistribution complète, esprit cabane, bois, lin et rotin. Conception et décoration par Anne Boullet Studio.",
    type: "Particulier",
    commune: "Saint-Denis-d'Oléron",
    zone: "oleron",
    mission: "conception",
    services: ["agencement-interieur", "plans-de-principe-et-3d", "decoration-interieure", "shopping-list"],
    meta: ["Conception et décoration", "170 m²", "2024 · 2025"],
    resume: "Une résidence secondaire devenue maison de famille : 92 m² rénovés, 80 m² ajoutés, et une maison qui semble avoir toujours été là.",
    texte: [
      {
        titre: "Le lieu",
        paragraphes: [
          "Une maison de 92 m² à Saint-Denis-d'Oléron, à la pointe nord de l'île, au bâti standard et sans caractère particulier. Une résidence secondaire que ses propriétaires voulaient transformer en vraie maison de famille, en anticipant leur retraite, avec une piscine.",
        ],
      },
      {
        titre: "La demande",
        paragraphes: [
          "Révéler la maison : lui donner du volume, de la lumière et une âme, tout en accueillant plus de monde. L'extension de 80 m² a fait l'objet d'un permis de construire, porté par un architecte partenaire.",
        ],
      },
      {
        titre: "Le parti pris",
        paragraphes: [
          "J'ai redistribué entièrement les espaces à partir des usages de la famille et du mobilier qu'elle souhaitait garder. Le fil conducteur : un esprit « cabane », chaleureux et sans prétention, qui fait oublier qu'il s'agit d'une construction récente.",
          "Deux patios encadrent la salle à manger, au cœur de la circulation, et font entrer la lumière au centre de la maison. La charpente est laissée apparente, et les suspensions en fibres naturelles soulignent la hauteur sous plafond.",
        ],
      },
      {
        titre: "Pièce par pièce",
        liste: [
          "Le séjour : sous la charpente en bois blond, un grand volume ouvert, des banquettes, des tables basses en bois et des suspensions en rotin.",
          "La cuisine : des façades blanches, un îlot habillé de bois et des tabourets assortis, ouverte sur la pièce de vie.",
          "Les chambres : des têtes de lit en lambris de bois, du linge en lin et des touches de terracotta.",
          "La salle d'eau : un meuble double vasque en bois, des miroirs ovales et des appliques en laiton.",
          "La terrasse couverte : prolongement du séjour, avec du mobilier en bois et des textiles rayés.",
        ],
      },
      {
        titre: "Une décoration comme un carnet de souvenirs",
        paragraphes: [
          "Objets de famille, souvenirs de voyages, pièces chinées et mobilier contemporain se répondent dans chaque pièce. J'ai établi la shopping list, et la cliente a réalisé elle-même les achats.",
          "Résultat : du confort, du volume, de la fonctionnalité et de la lumière. Un lieu authentique et singulier, où chacun trouve sa place.",
        ],
      },
    ],
    matieres: ["Bois blond", "Lin", "Jute", "Rotin", "Fibres naturelles", "Laiton"],
    faq: [
      { q: "Une maison récente peut-elle avoir du caractère ?", r: "Oui. Ici, une maison au bâti standard a trouvé une âme grâce à la redistribution des espaces, à la charpente laissée apparente et à des matières naturelles : bois, lin, jute et rotin." },
      { q: "Qui dépose le permis de construire pour une extension ?", r: "Pour cette extension de 80 m², le permis de construire a été porté par un architecte partenaire. Je travaille la conception intérieure en lien avec lui." },
      { q: "Mes meubles peuvent-ils rester dans un projet de rénovation ?", r: "Oui. La redistribution de cette maison a été pensée à partir du mobilier que la famille souhaitait conserver." },
    ],
    partenaires: ["maestro", "concas", "kheops", "aubry", "cedeo", "design17", "dma", "aps"],
    photos: p.oleron,
    alt: "Maison de famille à Saint-Denis-d'Oléron",
  },
  {
    slug: "maison-de-village-saint-clement-des-baleines",
    titre: "Maison de village, Saint-Clément-des-Baleines",
    sousTitre: "Rénovation complète d'une maison de 130 m² sur l'Île de Ré",
    seoTitre: "Rénovation d'une maison de village à Saint-Clément-des-Baleines, Île de Ré",
    description:
      "Rénovation complète d'une maison de village de 130 m² à Saint-Clément-des-Baleines, sur l'Île de Ré : arches, travertin, zellige, pierre et teintes chaudes. Conception par Anne Boullet Studio.",
    type: "Particulier",
    commune: "Saint-Clément-des-Baleines",
    zone: "ile-de-re",
    mission: "conception",
    services: ["agencement-interieur", "plans-de-principe-et-3d", "planches-d-ambiance"],
    meta: ["Conception", "130 m²", "2023 · 2024"],
    resume: "Une maison restée dans son jus, à la pointe de l'Île de Ré, entièrement repensée pour la famille, les amis et la location.",
    texte: [
      {
        titre: "Le lieu",
        paragraphes: [
          "Une maison de village de 130 m² à Saint-Clément-des-Baleines, tout au bout de l'Île de Ré, restée dans son état d'origine. Ses nouveaux propriétaires l'ont achetée comme résidence secondaire.",
        ],
      },
      {
        titre: "La demande",
        paragraphes: [
          "Une maison à vivre en famille et entre amis, et qui puisse aussi être louée. Il fallait donc des chambres confortables, des salles d'eau faciles d'entretien et des pièces communes généreuses.",
        ],
      },
      {
        titre: "Le parti pris",
        paragraphes: [
          "J'ai repensé entièrement la distribution des pièces, en travaillant les circulations, les perspectives d'une pièce à l'autre et les dimensions du mobilier. La modification de la façade a fait l'objet d'une déclaration préalable, déposée par le studio.",
          "L'objectif : garder le charme d'une maison de village rétaise, avec ses arches et ses matériaux bruts, tout en la rendant simple à vivre.",
        ],
      },
      {
        titre: "Pièce par pièce",
        liste: [
          "La pièce de vie : sous les poutres en bois, un grand séjour ouvert, une table de ferme et de grandes suspensions blanches.",
          "La cuisine : des façades vert sauge, un plan clair et des étagères en bois.",
          "Les niches en arche : creusées dans les murs, elles accueillent rangements et objets.",
          "Les chambres : chacune sa teinte chaude en tête de lit, terracotta, ocre ou kaki, avec des rangements et des bureaux sur mesure.",
          "Les salles d'eau : du zellige vert, des miroirs aux formes organiques et des meubles sur mesure.",
          "Le patio : un mur de pierre sèche et un banc maçonné blanc.",
        ],
      },
      {
        titre: "Le résultat",
        paragraphes: ["Une maison que ses propriétaires se sont réappropriée, pensée pour des vacances détendues, seuls, en famille ou avec des locataires."],
      },
    ],
    matieres: ["Travertin", "Bois", "Zellige", "Pierre", "Chaux", "Teintes chaudes"],
    faq: [
      { q: "Faut-il une autorisation pour modifier une façade sur l'Île de Ré ?", r: "Oui, la modification d'une façade demande au minimum une déclaration préalable. Pour cette maison, le studio l'a déposée en mairie." },
      { q: "Comment rendre une résidence secondaire facile à louer ?", r: "En soignant les chambres et les salles d'eau, en choisissant des matériaux faciles d'entretien et en dimensionnant le mobilier pour accueillir plusieurs personnes, comme dans cette maison." },
    ],
    partenaires: ["maestro", "kheops", "aubry", "cedeo", "design17", "dma", "pauzat", "labrouche"],
    photos: p.parpaillaud,
    alt: "Maison de village à Saint-Clément-des-Baleines, Île de Ré",
  },
  {
    slug: "salle-a-manger-parents-maternite-la-rochelle",
    titre: "Salle à manger des parents, maternité de La Rochelle",
    sousTitre: "Aménagement, décoration et signalétique d'un espace hospitalier",
    seoTitre: "Aménagement d'une salle à manger pour les parents, maternité de La Rochelle",
    description:
      "Aménagement et signalétique de la salle à manger des parents à la maternité de l'hôpital de La Rochelle : papier peint végétal, mobilier, messages pour les familles.",
    type: "Professionnel",
    commune: "La Rochelle",
    zone: "la-rochelle",
    secteur: "sante",
    services: ["signaletique", "decoration-interieure", "agencement-interieur"],
    meta: ["Santé", "Aménagement et signalétique", "La Rochelle"],
    resume: "Un lieu de pause pour les jeunes parents, au cœur de la maternité de l'hôpital de La Rochelle.",
    texte: [
      {
        titre: "Le projet",
        paragraphes: [
          "La salle à manger où les parents prennent leurs repas pendant le séjour à la maternité. Un projet mené bénévolement, pour offrir aux familles un moment de calme dans un environnement hospitalier.",
        ],
      },
      {
        titre: "Ce qui a été fait",
        liste: [
          "Un papier peint végétal à grande échelle, qui apaise la pièce et fait oublier le cadre hospitalier.",
          "Des murs en vert de gris et en bordeaux, un mobilier coloré et des tables en bois.",
          "Une signalétique sur mesure : plaques de porte, consignes de tri, messages pour les parents, fontaine à eau.",
          "Un coin petit-déjeuner organisé et lisible.",
        ],
      },
      {
        titre: "Pourquoi la signalétique compte",
        paragraphes: [
          "Dans un lieu de soin, les messages doivent être clairs sans être froids. Ici, la signalétique reprend les codes graphiques de la décoration : elle informe et participe à l'ambiance.",
        ],
      },
    ],
    faq: [
      { q: "Un hôpital peut-il faire appel à une décoratrice d'intérieur ?", r: "Oui. À la maternité de La Rochelle, j'ai repensé la salle à manger des parents, de la décoration à la signalétique." },
    ],
    photos: p.maternite,
    alt: "Salle à manger des parents, maternité de La Rochelle",
  },
  {
    slug: "maison-de-ville-renovee-la-rochelle",
    titre: "Maison de ville, La Rochelle",
    sousTitre: "Rénovation d'une maison de ville de 160 m², entre location et résidence secondaire",
    seoTitre: "Rénovation d'une maison de ville de 160 m² à La Rochelle",
    description:
      "Maison de ville de 160 m² rénovée à La Rochelle : redistribution des espaces, déclaration préalable, pierre d'origine, sol en pierre artisanal, menuiseries en fer forgé. Conception par Anne Boullet Studio.",
    type: "Particulier",
    commune: "La Rochelle",
    zone: "la-rochelle",
    mission: "conception",
    services: ["agencement-interieur", "decoration-interieure"],
    meta: ["Conception", "160 m²", "2023 · 2024"],
    resume: "Une belle maison de ville rochelaise qui retrouve ses lettres de noblesse et met désormais en valeur son histoire.",
    texte: [
      {
        titre: "La demande",
        paragraphes: [
          "Une maison de ville existante de 160 m², à La Rochelle, rénovée pour être louée et servir aussi de résidence secondaire.",
        ],
      },
      {
        titre: "La mission",
        paragraphes: [
          "Une mission de conception pour redistribuer les espaces, avec le dépôt d'une déclaration préalable de travaux, puis une sélection de luminaires pour toute la maison et pour les salles d'eau.",
        ],
      },
      {
        titre: "Le parti pris",
        paragraphes: [
          "Révéler ce que la maison cachait. Les murs montrent à nouveau la vieille pierre d'origine. Les sols, autrefois carrelés et sans charme, retrouvent leur splendeur avec un sol en pierre artisanal.",
          "Des menuiseries en fer forgé reprennent des motifs cintrés, en écho à la petite porte arrondie du salon. Elles modernisent la maison tout en accordant les matériaux entre eux.",
        ],
      },
      {
        titre: "L'arrondi pour fil conducteur",
        paragraphes: [
          "À l'étage, les parquets d'origine retrouvent leur éclat. Pour adoucir les circulations, les cloisons des salles de bains sont dessinées en formes arrondies : la courbe devient le fil conducteur du projet.",
        ],
      },
    ],
    matieres: ["Pierre d'origine", "Sol en pierre artisanal", "Fer forgé", "Parquet ancien"],
    faq: [
      { q: "Une décoratrice peut-elle déposer une déclaration préalable ?", r: "Oui. Pour cette maison de ville, la mission de conception comprenait le dépôt de la déclaration préalable de travaux." },
      { q: "Comment rénover une maison ancienne sans effacer son histoire ?", r: "En révélant ce qui existe : ici, la vieille pierre d'origine, les parquets de l'étage et la petite porte arrondie du salon, dont les nouvelles menuiseries reprennent les courbes." },
      { q: "Une maison destinée à la location mérite-t-elle un projet de décoration ?", r: "Cette maison a été pensée pour la location et pour servir de résidence secondaire : la conception a porté sur la distribution des pièces, les matériaux et les luminaires." },
    ],
    partenaires: ["maestro", "kheops", "cedeo", "design17", "rohane"],
    photos: p.saintclaude,
    alt: "Maison de ville rénovée à La Rochelle",
  },
  {
    slug: "piece-de-vie-sur-mesure-aytre",
    titre: "Pièce de vie, Aytré",
    sousTitre: "Un agencement sur mesure autour d'un insert, dans un séjour de 35 m²",
    seoTitre: "Agencement sur mesure d'une pièce de vie de 35 m² à Aytré",
    description:
      "Pièce de vie de 35 m² à Aytré : agencement sur mesure autour d'un insert, banquette, papier peint panoramique jungle, bibliothèque toute hauteur. Conception et suivi esthétique par Anne Boullet Studio.",
    type: "Particulier",
    commune: "Aytré",
    zone: "la-rochelle",
    mission: "conception",
    services: ["agencement-interieur", "decoration-interieure", "suivi-esthetique-de-chantier"],
    meta: ["Conception et suivi esthétique", "35 m²", "2025"],
    resume: "Un long séjour traversant, structuré par le conduit d'un insert, entre un coin banquette et une bibliothèque toute hauteur.",
    texte: [
      {
        titre: "La demande",
        paragraphes: [
          "Décorer la pièce de vie de 35 m² d'une maison de famille à Aytré, un séjour traversant tout en longueur. Les clients souhaitaient aussi un insert, pour la chaleur et la convivialité.",
        ],
      },
      {
        titre: "La mission",
        paragraphes: [
          "Une mission de conception en décoration et en agencement, puis un suivi esthétique avec l'agenceur et le cheministe.",
        ],
      },
      {
        titre: "Le parti pris",
        paragraphes: [
          "Le projet s'articule autour du conduit de l'insert. Devenu l'élément central de la pièce, il sépare avec subtilité deux espaces de vie.",
        ],
      },
      {
        titre: "Deux espaces, un seul séjour",
        liste: [
          "D'un côté, un coin banquette enveloppant accueille la salle à manger, sous un papier peint panoramique aux motifs jungle qui donne à l'ensemble un air de théâtre.",
          "De l'autre, une bibliothèque dessinée sur toute la hauteur exploite le volume et intègre la télévision avec discrétion.",
          "Au-dessus de la table, un jeu de suspensions rythme la perspective et donne du mouvement à la pièce.",
        ],
      },
    ],
    matieres: ["Bois", "Papier peint panoramique", "Rotin"],
    faq: [
      { q: "Comment aménager un séjour tout en longueur ?", r: "Dans ce séjour traversant de 35 m², le conduit de l'insert sert de pivot : il sépare un coin repas en banquette et un espace salon avec une bibliothèque toute hauteur." },
      { q: "Comment intégrer la télévision dans une bibliothèque ?", r: "En dessinant la bibliothèque sur mesure, sur toute la hauteur du mur : la télévision y trouve sa place sans dominer la pièce." },
      { q: "Que comprend le suivi esthétique ?", r: "Sur ce projet, le suivi esthétique s'est fait avec l'agenceur et le cheministe, pour que la réalisation reste fidèle à la conception." },
    ],
    partenaires: ["dma", "brossard"],
    photos: p.bodilis,
    alt: "Pièce de vie à Aytré, banquette et papier peint panoramique",
  },
  {
    slug: "annexe-de-piscine-les-portes-en-re",
    titre: "Annexe de piscine, Les Portes-en-Ré",
    sousTitre: "Une annexe de 35 m² transformée en lieu pour recevoir",
    seoTitre: "Décoration d'une annexe de piscine aux Portes-en-Ré, Île de Ré",
    description:
      "Annexe de piscine de 35 m² aux Portes-en-Ré : conception en décoration et en agencement, shopping list, papier peint panoramique, zellige vert d'eau et rotin. Par Anne Boullet Studio.",
    type: "Particulier",
    commune: "Les Portes-en-Ré",
    zone: "ile-de-re",
    mission: "conception",
    services: ["agencement-interieur", "decoration-interieure", "shopping-list"],
    meta: ["Conception et shopping list", "35 m²", "2026"],
    resume: "L'annexe de la piscine devient un lieu convivial et chaleureux, pensé pour accueillir des invités.",
    texte: [
      {
        titre: "La demande",
        paragraphes: [
          "Rénover l'annexe de 35 m² qui borde la piscine, aux Portes-en-Ré, pour en faire un lieu convivial et chaleureux où recevoir des invités.",
        ],
      },
      {
        titre: "La mission",
        paragraphes: ["Une mission de conception en décoration et en agencement, complétée par une shopping list."],
      },
      {
        titre: "Ce que montrent les photos",
        liste: [
          "Une chambre dont la tête de lit est un papier peint panoramique, paysage de pins et de bord de mer.",
          "Des suspensions frangées couleur rouille et des coussins en velours vert olive.",
          "Une salle d'eau en carreaux vert d'eau, sol en granito, robinetterie et pommeau de douche en laiton brossé.",
          "Un coin lecture près de la fenêtre : banquette, fauteuils en rotin et coussins aux tons chauds.",
          "Des rangements sur mesure laqués terracotta.",
        ],
      },
    ],
    matieres: ["Rotin", "Laiton", "Granito", "Velours"],
    faq: [
      { q: "Comment rendre une annexe de piscine accueillante ?", r: "Aux Portes-en-Ré, l'annexe de 35 m² a été pensée pour recevoir : agencement, décoration et shopping list des meubles et objets." },
      { q: "Qu'est-ce qu'une shopping list ?", r: "La liste des meubles, luminaires et objets choisis pour le projet, avec leurs références, pour que vous puissiez les commander vous-même." },
    ],
    photos: p.beguin,
    alt: "Annexe de piscine aux Portes-en-Ré, chambre au papier peint panoramique",
  },
  {
    slug: "decoration-maison-esprit-surf-la-rochelle",
    titre: "Maison de famille esprit surf, La Rochelle",
    sousTitre: "Redécorer 170 m² aux couleurs d'un passionné de surf",
    seoTitre: "Décoration d'une maison de 170 m² à La Rochelle, esprit surf et basque",
    description:
      "Maison de 170 m² redécorée à La Rochelle pour un passionné de surf : esprit basque, mur terracotta, bois brut, jute, pampa. Conception, sélection et achat de décoration par Anne Boullet Studio.",
    type: "Particulier",
    commune: "La Rochelle",
    zone: "la-rochelle",
    mission: "conception",
    services: ["decoration-interieure", "agencement-interieur", "shopping-list"],
    meta: ["Conception et décoration", "170 m²", "2024"],
    resume: "Une maison de famille qui porte la passion de son propriétaire : le surf, la mer et un esprit basque chaleureux.",
    texte: [
      {
        titre: "La demande",
        paragraphes: [
          "Redécorer une maison de 170 m² à La Rochelle. Elle était en bon état, mais ne correspondait pas tout à fait à l'univers de son propriétaire, passionné de surf, qui souhaitait un esprit basque, chaleureux et familial.",
        ],
      },
      {
        titre: "La mission",
        paragraphes: ["Une mission de conception en décoration et en agencement, puis la sélection et l'achat de la décoration."],
      },
      {
        titre: "Le parti pris",
        paragraphes: [
          "La passion du surf et de la mer sert de fil conducteur à toute la maison, à travers un mélange de couleurs et de matières naturelles.",
          "La distribution des pièces reste la même. Le salon gagne de la place sur le séjour, pour prendre du recul face à la cheminée et à la télévision, et accueillir une table basse et des assises.",
        ],
      },
      {
        titre: "Pièce par pièce",
        liste: [
          "Le salon : un mur terracotta, d'aspect légèrement brique, enveloppe la cheminée. La même teinte revient en fond d'étagère dans le coin détente, en clin d'œil aux maisons basques.",
          "Le canapé blanc répond à la table basse en bois brut et aux assises assorties.",
          "La salle à manger : un mobilier en bois brut et un banc, pour une ambiance simple.",
          "Une planche de surf et des tiges de pampa complètent le décor.",
        ],
      },
      {
        titre: "Le résultat",
        paragraphes: [
          "Des tons clairs et des matières naturelles, bois et jute, pour une ambiance dépaysante et épurée, propice à la détente. Les touches de couleur aux murs apportent la chaleur, et la maison de famille gagne en authenticité.",
        ],
      },
    ],
    matieres: ["Bois brut", "Jute", "Pampa", "Rotin"],
    faq: [
      { q: "Est-il possible de redécorer une maison sans travaux ?", r: "Oui. Dans cette maison de 170 m², la distribution est restée la même : la décoration, les couleurs et le mobilier ont suffi à lui donner l'univers de son propriétaire." },
      { q: "Comment créer une décoration esprit surf sans tomber dans le cliché ?", r: "En partant des matières et des couleurs : bois brut, jute, tons clairs et une teinte terracotta inspirée des maisons basques. La planche de surf et la pampa viennent ensuite, par touches." },
      { q: "Vous occupez-vous aussi des achats ?", r: "Sur ce projet, la mission comprenait la sélection et l'achat de la décoration." },
    ],
    photos: p.ermitage,
    alt: "Maison de famille esprit surf à La Rochelle, séjour au mur terracotta",
  },
];

export const getProjet = (slug: string) => projets.find((x) => x.slug === slug);
export const src = (ph: Photo) => `/projets/${ph.file.split("-")[0]}/${ph.file}`;

// « Particulier, Aytré, 2025 » : type, commune et année quand elle est connue
export const legende = (p: Projet) =>
  [p.type, p.commune, p.meta.find((m) => /\d{4}/.test(m))?.replace(" · ", "-")].filter(Boolean).join(", ");
