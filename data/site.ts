// Contenus des pages. Source : réponses d'Anne (atelier du 29/09 et e-mail du 08/10).
// Tout ce qui n'est pas encore fourni est entre crochets.
import type { QR, Section } from "./projets";

export const contact = {
  tel: "[06 00 00 00 00]",
  mail: "[contact@anneboullet.fr]",
  whatsapp: "[Lien WhatsApp]",
  adresse: "[Adresse]",
  ville: "17000 La Rochelle",
};

/* ------------------------------------------------------------------ */
/* Missions                                                            */
/* ------------------------------------------------------------------ */

export type Mission = {
  slug: string;
  n: string;
  titre: string;
  h1: string;
  seoTitre: string;
  description: string;
  lede: string;
  recu: string[];
  pour: string;
  deroule: { titre: string; texte: string }[];
  bon: string[];
  sections: Section[];
  faq: QR[];
  services: string[];
  photo: { projet: string; i: number };
};

export const missions: Mission[] = [
  {
    slug: "conseils",
    n: "01",
    titre: "Conseils",
    h1: "Conseil en décoration d'intérieur à domicile",
    seoTitre: "Conseil déco à domicile à La Rochelle et sur l'Île de Ré",
    description:
      "Un rendez-vous conseil d'1 h 30 chez vous, à La Rochelle, sur l'Île de Ré ou à Oléron : couleurs, matières, agencement, et un compte rendu écrit avec astuces et croquis.",
    lede: "Un regard extérieur, le temps d'une visite chez vous.",
    recu: ["Un rendez-vous d'1 h 30 sur place, nuancier et échantillons en main", "Un compte rendu écrit : points clés, astuces, croquis"],
    pour: "avancer par vous-même avec les bonnes pistes.",
    deroule: [
      { titre: "Avant le rendez-vous", texte: "Vous répondez à quelques questions et m'envoyez des photos ou des plans du lieu." },
      { titre: "Le rendez-vous", texte: "1 h 30 sur place pour faire le tour des pièces, avec nuancier et échantillons." },
      { titre: "Le compte rendu", texte: "Un document PDF qui reprend les points abordés, mes astuces et des croquis." },
    ],
    bon: ["Les frais de déplacement s'ajoutent au-delà de 15 minutes de route.", "Les questions et les photos envoyées en amont rendent le rendez-vous plus efficace."],
    sections: [
      {
        titre: "Quand faire appel à un conseil déco ?",
        paragraphes: [
          "Vous venez d'emménager et ne savez pas par où commencer. Vous hésitez entre deux couleurs depuis des semaines. Une pièce ne fonctionne pas, sans que vous sachiez dire pourquoi. Vous préparez des travaux et voulez valider vos choix avant de signer les devis.",
          "Dans tous ces cas, une visite suffit souvent à débloquer la situation. Je vous donne des pistes concrètes, que vous mettez en œuvre à votre rythme, avec vos artisans ou par vous-même.",
        ],
      },
      {
        titre: "Ce que nous abordons pendant la visite",
        liste: [
          "Les couleurs : murs, boiseries, plafonds, en testant les teintes à la lumière de votre pièce.",
          "Les matières : sols, revêtements, textiles, à partir d'échantillons.",
          "L'agencement : la place des meubles, les circulations, les rangements.",
          "La lumière : naturelle et artificielle, les luminaires à prévoir.",
          "Les priorités : ce qu'il vaut mieux faire en premier, et ce qui peut attendre.",
        ],
      },
      {
        titre: "Un compte rendu pour ne rien oublier",
        paragraphes: [
          "Après le rendez-vous, vous recevez un document PDF qui reprend chaque point abordé, avec mes astuces et des croquis. Il vous sert de feuille de route, et vous pouvez le transmettre à vos artisans.",
        ],
      },
    ],
    faq: [
      { q: "Combien de temps dure un rendez-vous conseil ?", r: "Le rendez-vous dure 1 h 30, chez vous. Vous recevez ensuite un compte rendu écrit." },
      { q: "Faut-il préparer quelque chose avant la visite ?", r: "Oui : quelques réponses à un court questionnaire, et des photos ou des plans du lieu si vous en avez. Le rendez-vous est ainsi plus efficace." },
      { q: "Le conseil peut-il déboucher sur un projet complet ?", r: "Oui. Si votre projet le demande, la mission de conception prend le relais, avec plans de principe, planches matières et perspectives 3D." },
    ],
    services: ["planches-d-ambiance", "decoration-interieure"],
    photo: { projet: "maison-de-famille-saint-denis-d-oleron", i: 2 },
  },
  {
    slug: "conception",
    n: "02",
    titre: "Conception",
    h1: "Conception d'intérieur : plans, matières et 3D",
    seoTitre: "Conception et rénovation d'intérieur à La Rochelle : plans et 3D",
    description:
      "Mission de conception pour votre rénovation ou extension autour de La Rochelle : plans de principe, planches couleurs et matériaux, perspectives 3D, fourchettes budgétaires et sélection du mobilier.",
    lede: "Le projet entièrement dessiné, avant les travaux.",
    recu: ["Plans de principe et d'implantation", "Planches couleurs et matériaux", "Perspectives 3D et fourchettes budgétaires"],
    pour: "une rénovation, une extension ou une redistribution des pièces.",
    deroule: [
      { titre: "Avant-projet sommaire", texte: "Plan de principe et d'implantation, planches couleurs et matériaux, croquis, 3D en option. Des fourchettes budgétaires à la fin de cette étape." },
      { titre: "Avant-projet détaillé", texte: "Plans de principe et d'agencement, plan colorimétrique, perspectives 3D et sélection du mobilier." },
      { titre: "Les travaux", texte: "Vous consultez les artisans en direct pour un petit projet, ou un maître d'œuvre coordonne les travaux pour un projet plus important." },
    ],
    bon: ["Les plans livrés sont des plans de principe, base de travail pour les artisans.", "Pour un permis de construire, je travaille avec un architecte partenaire."],
    sections: [
      {
        titre: "Pour quels projets ?",
        paragraphes: [
          "La conception s'adresse aux projets qui touchent à l'organisation des pièces : rénovation d'une maison ancienne, extension, résidence secondaire à remettre au goût du jour, redistribution complète d'un étage. C'est la mission que j'ai menée à Saint-Denis-d'Oléron et à Saint-Clément-des-Baleines.",
        ],
      },
      {
        titre: "Tout commence par votre façon de vivre",
        paragraphes: [
          "Avant de dessiner, je vous remets un carnet de projet : un questionnaire sur vos habitudes, ce que vous aimez, ce que vous voulez garder, le nombre de personnes qui vivent ou séjournent dans la maison, vos délais et votre budget. Je relève ensuite les cotes du lieu.",
          "Ce travail d'écoute évite les mauvaises surprises : les plans répondent à votre quotidien, pas à une tendance.",
        ],
      },
      {
        titre: "Deux étapes pour avancer sereinement",
        paragraphes: [
          "L'avant-projet sommaire pose les grandes lignes : implantation, ambiance, matières. Il se termine par des fourchettes budgétaires, pour décider en connaissance de cause. L'avant-projet détaillé précise tout : plans d'agencement, plan colorimétrique, perspectives 3D, mobilier.",
          "Selon l'ampleur du projet, la conception demande de quelques heures à deux semaines de travail.",
        ],
      },
      {
        titre: "Et après la conception ?",
        paragraphes: [
          "Pour un petit projet, vous consultez directement les artisans avec mes plans. Pour un projet plus important, un maître d'œuvre coordonne les travaux. Dans les deux cas, j'assure un suivi esthétique du chantier, jusqu'à la réception.",
        ],
      },
    ],
    faq: [
      { q: "Quelle est la différence entre avant-projet sommaire et détaillé ?", r: "Le sommaire fixe les grandes orientations et les fourchettes budgétaires. Le détaillé précise les plans d'agencement, les couleurs, la 3D et le mobilier." },
      { q: "Combien de temps dure la conception ?", r: "De quelques heures à deux semaines de travail, selon l'ampleur du projet." },
      { q: "Pouvez-vous gérer un permis de construire ?", r: "Les permis de construire sont portés par un architecte partenaire. Je peux déposer moi-même une déclaration préalable, comme pour la façade de la maison de Saint-Clément-des-Baleines." },
      { q: "Mes meubles actuels peuvent-ils être intégrés ?", r: "Oui. À Saint-Denis-d'Oléron, la redistribution a été pensée à partir du mobilier existant." },
    ],
    services: ["agencement-interieur", "plans-de-principe-et-3d", "planches-d-ambiance", "suivi-esthetique-de-chantier", "accompagnement-maitrise-d-ouvrage"],
    photo: { projet: "maison-de-village-saint-clement-des-baleines", i: 0 },
  },
  {
    slug: "decoration",
    n: "03",
    titre: "Décoration",
    h1: "Décoration d'intérieur et shopping list",
    seoTitre: "Décoratrice d'intérieur à La Rochelle : décoration et shopping list",
    description:
      "Mission décoration autour de La Rochelle et sur l'Île de Ré : sélection du mobilier, des luminaires et des textiles, et shopping list prête à commander, en intégrant vos objets.",
    lede: "Les bons objets, au bon endroit.",
    recu: ["La sélection du mobilier, des luminaires et des textiles", "Une shopping list prête à commander"],
    pour: "habiller un lieu déjà agencé.",
    deroule: [
      { titre: "L'écoute", texte: "Vos goûts, ce que vous souhaitez garder, les objets qui comptent pour vous." },
      { titre: "La sélection", texte: "Mobilier, luminaires, textiles et objets, en mêlant pièces chinées, souvenirs et contemporain." },
      { titre: "La shopping list", texte: "Une liste prête à commander, que vous gardez la main pour acheter." },
    ],
    bon: ["Vos meubles existants peuvent être intégrés au projet."],
    sections: [
      {
        titre: "Quand la maison est là, mais pas encore l'ambiance",
        paragraphes: [
          "Les travaux sont terminés, ou les murs vous conviennent, mais la maison manque de chaleur. La mission décoration sert à trouver les bons éléments : le canapé à la bonne taille, la suspension qui donne une échelle à la pièce, les textiles qui adoucissent, les objets qui racontent votre histoire.",
        ],
      },
      {
        titre: "Une décoration qui vous ressemble",
        paragraphes: [
          "Je pars de ce que vous aimez et de ce que vous possédez déjà. À Saint-Denis-d'Oléron, la décoration se lit comme un carnet de souvenirs : objets de famille, voyages, chine et pièces contemporaines.",
        ],
      },
      {
        titre: "La shopping list : vous gardez la main",
        paragraphes: [
          "Je vous remets une liste précise, avec les références et les quantités. Vous achetez au rythme de votre budget, en une fois ou pièce par pièce.",
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce qu'une shopping list déco ?", r: "Une liste précise de mobilier, luminaires, textiles et objets, avec leurs références, prête à commander. Vous restez libre d'acheter quand vous le souhaitez." },
      { q: "Meubles anciens et neufs vont-ils ensemble ?", r: "Oui, c'est même ce qui donne du caractère. Je mêle volontiers pièces chinées, objets de famille et mobilier contemporain." },
    ],
    services: ["decoration-interieure", "shopping-list", "planches-d-ambiance"],
    photo: { projet: "maison-de-famille-saint-denis-d-oleron", i: 15 },
  },
];

/* ------------------------------------------------------------------ */
/* Services (savoir-faire)                                             */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  nom: string;
  h1: string;
  seoTitre: string;
  description: string;
  lede: string;
  sections: Section[];
  faq: QR[];
  projets: string[];
  mission?: string;
};

export const services: Service[] = [
  {
    slug: "agencement-interieur",
    nom: "Agencement intérieur",
    h1: "Agencement intérieur et redistribution des pièces",
    seoTitre: "Agencement intérieur à La Rochelle : redistribution des pièces",
    description: "Agencement d'espace autour de La Rochelle : redistribution des pièces, circulations, rangements sur mesure, pour les maisons et les lieux professionnels.",
    lede: "Mieux circuler, mieux ranger, mieux vivre : l'agencement organise l'espace avant de le décorer.",
    sections: [
      {
        titre: "Repenser l'organisation des pièces",
        paragraphes: [
          "Une cuisine trop isolée, un couloir qui ne sert à rien, des chambres sans rangement : l'agencement corrige ce qui gêne au quotidien. Je travaille les circulations, les perspectives d'une pièce à l'autre et les dimensions du mobilier.",
          "À Saint-Clément-des-Baleines comme à Saint-Denis-d'Oléron, la distribution des maisons a été entièrement repensée.",
        ],
      },
      {
        titre: "Du sur-mesure là où il compte",
        liste: ["Bibliothèques et niches intégrées", "Bureaux et dressings dans les chambres", "Banquettes avec rangements", "Meubles de salle d'eau"],
      },
      {
        titre: "Les signes qu'un agencement s'impose",
        liste: [
          "Une pièce traversée en permanence, où personne ne s'installe.",
          "Une cuisine coupée du séjour, alors que la vie se passe autour de la table.",
          "Des chambres sans rangement, des affaires qui envahissent les pièces communes.",
          "Des mètres carrés perdus en couloirs.",
          "Une maison achetée en l'état, dont la distribution date d'un autre mode de vie.",
        ],
      },
    ],
    faq: [{ q: "L'agencement implique-t-il forcément des travaux ?", r: "Pas toujours. Parfois, déplacer le mobilier et créer des rangements suffit. Pour une redistribution des pièces, les travaux sont confiés à des artisans." }],
    projets: ["maison-de-village-saint-clement-des-baleines", "maison-de-famille-saint-denis-d-oleron"],
    mission: "conception",
  },
  {
    slug: "plans-de-principe-et-3d",
    nom: "Plans de principe et 3D",
    h1: "Plans de principe et perspectives 3D",
    seoTitre: "Plans d'aménagement et perspectives 3D, La Rochelle",
    description: "Plans de principe, plans d'implantation et perspectives 3D pour visualiser votre intérieur avant les travaux, autour de La Rochelle.",
    lede: "Voir votre intérieur avant de lancer les travaux.",
    sections: [
      {
        titre: "Des plans pour décider",
        paragraphes: [
          "Le plan de principe montre l'organisation des pièces, l'implantation du mobilier et des rangements. Il sert de base de travail commune avec vos artisans.",
          "Le plan colorimétrique indique les teintes de chaque mur, pour éviter les hésitations sur le chantier.",
        ],
      },
      {
        titre: "La 3D pour se projeter",
        paragraphes: ["Les perspectives 3D vous montrent l'ambiance d'une pièce sous plusieurs angles. Elles aident à valider les volumes, les couleurs et les matières, surtout quand le projet change beaucoup le lieu."],
      },
      {
        titre: "Ce que contient un dossier de plans",
        liste: [
          "Le plan de principe et d'implantation : murs, ouvertures, mobilier, rangements.",
          "Le plan d'agencement : le détail des meubles sur mesure et des niches.",
          "Le plan colorimétrique : la teinte de chaque mur et de chaque menuiserie.",
          "Les perspectives 3D des pièces principales.",
        ],
      },
    ],
    faq: [{ q: "La 3D est-elle incluse ?", r: "Elle est proposée en option à l'avant-projet sommaire, et intégrée à l'avant-projet détaillé de la mission de conception." }],
    projets: ["maison-de-famille-saint-denis-d-oleron"],
    mission: "conception",
  },
  {
    slug: "planches-d-ambiance",
    nom: "Planches d'ambiance et matériaux",
    h1: "Planches d'ambiance, couleurs et matériaux",
    seoTitre: "Planches d'ambiance et choix des matériaux, décoratrice La Rochelle",
    description: "Planches d'ambiance couleurs et matériaux : sols, revêtements, textiles et teintes, pour choisir sereinement avant les travaux.",
    lede: "Assembler les couleurs et les matières avant de les commander.",
    sections: [
      {
        titre: "Composer une ambiance",
        paragraphes: [
          "Une planche réunit sur une même page les teintes, les sols, les revêtements, les textiles et le mobilier d'une pièce. Vous voyez comment ils dialoguent, et vous décidez en confiance.",
          "Les teintes chaudes en tête de lit de Saint-Clément-des-Baleines, le zellige vert des salles d'eau, le bois blond d'Oléron : chaque ambiance est passée par cette étape.",
        ],
      },
      {
        titre: "Ce que réunit une planche",
        liste: [
          "Les teintes des murs, des boiseries et des menuiseries.",
          "Les sols et les revêtements : parquet, carreaux, zellige, pierre.",
          "Les textiles : rideaux, coussins, linge de lit.",
          "Le mobilier et les luminaires principaux.",
        ],
        paragraphes: ["Les fourchettes budgétaires arrivent à la fin de l'avant-projet sommaire : vous savez ce que représentent vos choix avant de vous engager."],
      },
    ],
    faq: [{ q: "Les échantillons sont-ils présentés en vrai ?", r: "Oui, lors des rendez-vous j'apporte nuancier et échantillons pour juger à la lumière de votre maison." }],
    projets: ["maison-de-village-saint-clement-des-baleines"],
    mission: "conception",
  },
  {
    slug: "decoration-interieure",
    nom: "Décoration intérieure",
    h1: "Décoration intérieure de maisons et d'appartements",
    seoTitre: "Décoratrice d'intérieur à La Rochelle, Île de Ré et Oléron",
    description: "Décoration intérieure autour de La Rochelle : mobilier, luminaires, textiles et objets, pour des maisons lumineuses, chaleureuses et intemporelles.",
    lede: "Donner une âme à un lieu, avec des matières naturelles et des objets qui comptent.",
    sections: [
      {
        titre: "Lumineux, chaleureux, naturel",
        paragraphes: [
          "Je cherche des intérieurs qui semblent avoir toujours vécu : du bois, du lin, du rotin, de la pierre, des couleurs chaudes posées au bon endroit, et des objets qui ont une histoire.",
        ],
      },
      {
        titre: "Respecter l'histoire du lieu",
        paragraphes: ["Une maison de village, une maison ancienne ou une construction récente n'appellent pas la même décoration. Je pars toujours du caractère du lieu pour lui redonner une âme."],
      },
      {
        titre: "Des matières qui vieillissent bien",
        paragraphes: [
          "Bois, lin, jute, rotin, zellige, chaux, travertin : je privilégie des matières naturelles, qui prennent de la patine au lieu de s'abîmer.",
        ],
      },
    ],
    faq: [{ q: "Décoratrice ou architecte d'intérieur : quelle différence ?", r: "Je suis décoratrice d'intérieur. J'interviens sur l'agencement, les matières, les couleurs et le mobilier, avec des plans de principe. Les travaux soumis à permis de construire sont portés par un architecte partenaire." }],
    projets: ["annexe-de-piscine-les-portes-en-re", "decoration-maison-esprit-surf-la-rochelle", "maison-de-ville-renovee-la-rochelle"],
    mission: "decoration",
  },
  {
    slug: "shopping-list",
    nom: "Shopping list",
    h1: "Shopping list décoration prête à commander",
    seoTitre: "Shopping list décoration : mobilier et luminaires sélectionnés",
    description: "Une shopping list décoration prête à commander : mobilier, luminaires, textiles et objets sélectionnés pour votre intérieur.",
    lede: "La bonne référence, à la bonne taille, au bon endroit.",
    sections: [
      {
        titre: "Une liste précise, pièce par pièce",
        paragraphes: [
          "Je sélectionne le mobilier, les luminaires, les textiles et les objets, en vérifiant les dimensions par rapport à vos pièces. Vous recevez une liste avec les références, prête à commander.",
          "À Saint-Denis-d'Oléron, la cliente a réalisé elle-même les achats à partir de la shopping list.",
        ],
      },
      {
        titre: "Ce que contient la liste",
        liste: [
          "Les meubles, avec leurs dimensions vérifiées pour votre pièce.",
          "Les luminaires : suspensions, appliques, lampes.",
          "Les textiles : rideaux, tapis, coussins, linge de lit.",
          "Les objets et accessoires qui finalisent chaque pièce.",
        ],
      },
    ],
    faq: [{ q: "Dois-je tout acheter d'un coup ?", r: "Non. La liste vous permet d'acheter à votre rythme, pièce par pièce." }],
    projets: ["maison-de-famille-saint-denis-d-oleron"],
    mission: "decoration",
  },
  {
    slug: "signaletique",
    nom: "Signalétique",
    h1: "Signalétique intérieure pour lieux professionnels",
    seoTitre: "Signalétique intérieure à La Rochelle : cabinets, bureaux, hôpitaux",
    description: "Signalétique intérieure sur mesure pour les cabinets médicaux, les bureaux et les lieux d'accueil autour de La Rochelle : plaques, consignes, messages.",
    lede: "Informer clairement, sans casser l'ambiance du lieu.",
    sections: [
      {
        titre: "Une signalétique qui fait partie du décor",
        paragraphes: [
          "Plaques de porte, consignes, messages d'accueil : la signalétique guide les patients, les clients et les équipes. Je la dessine avec les mêmes codes que la décoration, pour qu'elle informe et participe à l'ambiance.",
          "À la maternité de La Rochelle, la salle à manger des parents a reçu une signalétique sur mesure, des plaques de porte aux consignes de tri.",
        ],
      },
      {
        titre: "Impliquer les équipes",
        paragraphes: ["Nommer les salles, choisir les messages : associer les équipes au projet renforce l'appropriation du lieu."],
      },
      {
        titre: "Ce que la signalétique peut couvrir",
        liste: [
          "Les plaques de porte et le nom des salles.",
          "Le fléchage et l'orientation des visiteurs.",
          "Les consignes : tri, hygiène, règles d'usage.",
          "Les messages d'accueil et d'information.",
        ],
      },
    ],
    faq: [
      { q: "Quels lieux ont besoin d'une signalétique sur mesure ?", r: "Cabinets médicaux, services hospitaliers, bureaux, lieux d'accueil : partout où les visiteurs doivent s'orienter et être informés." },
      { q: "La signalétique peut-elle suivre la décoration ?", r: "Oui, c'est tout l'intérêt : elle reprend les couleurs et les codes graphiques du lieu, comme à la maternité de La Rochelle." },
      { q: "La signalétique peut-elle être faite seule ?", r: "[Réponse d'Anne à venir]" },
    ],
    projets: ["salle-a-manger-parents-maternite-la-rochelle"],
  },
  {
    slug: "suivi-esthetique-de-chantier",
    nom: "Suivi esthétique de chantier",
    h1: "Suivi esthétique de chantier",
    seoTitre: "Suivi esthétique de chantier de rénovation, La Rochelle et Île de Ré",
    description: "Suivi esthétique de votre chantier de rénovation : visites, réponses aux artisans, ajustements, jusqu'à la réception des travaux.",
    lede: "Veiller à ce que le résultat ressemble au projet dessiné.",
    sections: [
      {
        titre: "Garder le cap pendant les travaux",
        paragraphes: [
          "Sur un chantier, mille petites décisions se prennent chaque semaine. Je passe sur place, je réponds aux questions des artisans sur les finitions, les teintes et les détails, et j'ajuste si besoin. Je suis présente à la réception.",
          "Le suivi esthétique ne remplace pas la coordination des travaux, confiée à un maître d'œuvre pour les projets importants : il garantit la cohérence du résultat.",
        ],
      },
      {
        titre: "Ce que couvre le suivi",
        liste: [
          "Des visites de chantier aux étapes clés.",
          "Les réponses aux artisans sur les finitions, les teintes et les détails.",
          "Les ajustements quand une contrainte apparaît sur place.",
          "La présence à la réception des travaux.",
        ],
      },
    ],
    faq: [{ q: "Êtes-vous maître d'œuvre ?", r: "Non. J'assure le suivi esthétique. La coordination des entreprises est confiée à un maître d'œuvre ou gérée directement par vous sur les petits projets." }],
    projets: ["maison-de-famille-saint-denis-d-oleron"],
    mission: "conception",
  },
  {
    slug: "accompagnement-maitrise-d-ouvrage",
    nom: "Accompagnement à la maîtrise d'ouvrage",
    h1: "Accompagnement à la maîtrise d'ouvrage",
    seoTitre: "Accompagnement à la maîtrise d'ouvrage pour particuliers, La Rochelle",
    description: "Accompagnement du maître d'ouvrage dans son projet de rénovation : aide aux choix, lien avec les intervenants, cohérence d'ensemble.",
    lede: "Être à vos côtés dans les décisions, de la conception à la réception.",
    sections: [
      {
        titre: "Vous n'êtes pas seul face aux décisions",
        paragraphes: [
          "Le maître d'ouvrage, c'est vous : la personne qui commande les travaux. Je vous accompagne dans les choix, je fais le lien avec l'architecte, le maître d'œuvre et les artisans, et je veille à la cohérence d'ensemble.",
          "C'est un accompagnement apprécié par les propriétaires de résidences secondaires, qui ne peuvent pas être sur place chaque semaine.",
        ],
      },
      { titre: "Le détail de la mission", paragraphes: ["[Précisions d'Anne à venir sur le périmètre exact.]"] },
    ],
    faq: [
      { q: "Qu'est-ce qu'un maître d'ouvrage ?", r: "C'est la personne qui commande les travaux : le propriétaire, particulier ou entreprise." },
      { q: "Cet accompagnement convient-il à une résidence secondaire ?", r: "Oui, il est particulièrement utile quand vous ne pouvez pas être sur place chaque semaine." },
    ],
    projets: ["maison-de-famille-saint-denis-d-oleron"],
    mission: "conception",
  },
];

/* ------------------------------------------------------------------ */
/* Secteurs professionnels                                             */
/* ------------------------------------------------------------------ */

export type Secteur = {
  slug: string;
  nom: string;
  h1: string;
  seoTitre: string;
  description: string;
  detail: string;
  lede: string;
  enjeux: string[];
  exemples: string[];
  sections: Section[];
  faq: QR[];
  projet?: string;
  photo?: string;
};

export const secteurs: Secteur[] = [
  {
    slug: "sante",
    nom: "Santé",
    h1: "Aménagement de cabinets médicaux et lieux de santé",
    seoTitre: "Aménagement de cabinet médical et salle d'attente à La Rochelle",
    description: "Aménagement, décoration et signalétique de cabinets médicaux, salles d'attente et services hospitaliers à La Rochelle : détente des patients, confort des équipes.",
    detail: "Cabinets, maternité, salles d'attente",
    lede: "Des lieux de soin qui apaisent les patients et facilitent le travail des équipes.",
    enjeux: ["La détente des patients dès la salle d'attente", "Le confort de l'équipe au quotidien", "Une signalétique claire et douce"],
    exemples: [
      "Cabinet d'anesthésistes de La Rochelle (7 associés) : projet global de détente des patients, confort de l'équipe, décoration, signalétique et communication.",
      "Salle à manger des parents à la maternité de l'hôpital de La Rochelle.",
    ],
    sections: [
      {
        titre: "Une salle d'attente qui rassure",
        paragraphes: [
          "Le patient arrive souvent inquiet. Une lumière douce, des assises confortables, des matières chaleureuses et une signalétique lisible changent son ressenti avant même la consultation.",
        ],
      },
      {
        titre: "Penser aussi aux équipes",
        paragraphes: [
          "Un cabinet est un lieu de travail. Pour le cabinet d'anesthésistes de La Rochelle, le projet a porté autant sur la détente des patients que sur le confort de l'équipe de 7 associés.",
        ],
      },
    ],
    faq: [
      { q: "Intervenez-vous dans les hôpitaux ?", r: "Oui, à la maternité de l'hôpital de La Rochelle, j'ai repensé la salle à manger des parents." },
      { q: "Tenez-vous compte de l'accessibilité PMR ?", r: "[Réponse d'Anne à venir]" },
    ],
    projet: "salle-a-manger-parents-maternite-la-rochelle",
    photo: "/pros/sante.jpg",
  },
  {
    slug: "bureaux",
    nom: "Bureaux",
    h1: "Aménagement de bureaux et d'espaces d'accueil",
    seoTitre: "Aménagement de bureaux et espaces d'accueil à La Rochelle",
    description: "Aménagement de bureaux et d'espaces d'accueil à La Rochelle : circulation, identité, confort des équipes. Cabinets comptables, avocats, notaires, agences.",
    detail: "Espaces de travail et d'accueil",
    lede: "Des espaces de travail apaisés, et un accueil qui donne confiance dès la porte.",
    enjeux: ["La circulation et la capacité d'accueil", "Une identité forte, un lieu reconnaissable", "L'implication des équipes, jusqu'au nom des salles"],
    exemples: ["Groupe d'expertise comptable, La Pallice. [Photos à venir]"],
    sections: [
      {
        titre: "L'accueil, première image de votre entreprise",
        paragraphes: [
          "Pour un cabinet d'expertise comptable, d'avocats ou de notaires, l'accueil dit beaucoup avant le premier rendez-vous. Je travaille l'image de marque dans l'espace : couleurs, matières, mobilier, signalétique.",
        ],
      },
      {
        titre: "Des bureaux qui donnent envie de travailler",
        paragraphes: [
          "Circulation, acoustique, lumière, espaces de pause : de bons bureaux facilitent le quotidien. J'associe les équipes au projet, par exemple pour nommer les salles.",
        ],
      },
      {
        titre: "Avec qui je travaille",
        paragraphes: ["La direction, les services techniques, la communication, l'assistante de direction ou les responsables de services : je m'adapte à votre organisation."],
      },
    ],
    faq: [
      { q: "Impliquez-vous les équipes dans le projet ?", r: "Oui, c'est un atout : les équipes peuvent par exemple choisir le nom des salles." },
      { q: "Avec qui travaillez-vous dans l'entreprise ?", r: "La direction, les services techniques, la communication, l'assistante de direction ou les responsables de services, selon votre organisation." },
      { q: "Pouvez-vous améliorer la circulation et la capacité d'accueil ?", r: "[Réponse d'Anne à venir]" },
    ],
  },
  {
    slug: "hebergement",
    nom: "Hébergement",
    h1: "Décoration de locations saisonnières et chambres d'hôtes",
    seoTitre: "Décoration de location saisonnière et chambres d'hôtes, Île de Ré",
    description: "Décoration et aménagement de locations saisonnières, gîtes et chambres d'hôtes sur l'Île de Ré, à Oléron et La Rochelle : des lieux faciles à vivre, qui se démarquent.",
    detail: "Chambres d'hôtes, locations",
    lede: "Des lieux faciles à vivre, qui donnent envie de revenir.",
    enjeux: ["Des chambres confortables et faciles d'entretien", "Une ambiance qui se démarque", "Des matériaux qui supportent les saisons"],
    exemples: ["Maison de village à Saint-Clément-des-Baleines, pensée pour la famille, les amis et la location."],
    sections: [
      {
        titre: "Se démarquer sur les plateformes",
        paragraphes: [
          "Sur l'Île de Ré ou à Oléron, les locations sont nombreuses. Une décoration soignée, photogénique et cohérente fait la différence dès l'annonce, et se retrouve dans les avis des voyageurs.",
        ],
      },
      {
        titre: "Durable avant tout",
        paragraphes: ["Les matériaux doivent supporter les passages et l'air marin : carrelages et zelliges dans les salles d'eau, bois massif, textiles lavables. Le charme reste, l'entretien est simple."],
      },
    ],
    faq: [{ q: "Pouvez-vous aménager une maison à la fois familiale et en location ?", r: "Oui, c'était la demande pour la maison de village de Saint-Clément-des-Baleines : vivre en famille, recevoir des amis, et louer." }],
    projet: "maison-de-village-saint-clement-des-baleines",
    photo: "/pros/hebergement.jpg",
  },
];

/* ------------------------------------------------------------------ */
/* Zones                                                               */
/* ------------------------------------------------------------------ */

export type Zone = {
  slug: string;
  nom: string;
  h1: string;
  seoTitre: string;
  description: string;
  lede: string;
  communes: string[];
  texte: string[];
  sections: Section[];
  faq: QR[];
  projets: string[];
};

export const zones: Zone[] = [
  {
    slug: "la-rochelle",
    nom: "La Rochelle",
    h1: "Décoratrice d'intérieur à La Rochelle",
    seoTitre: "Décoratrice d'intérieur à La Rochelle : rénovation et décoration",
    description:
      "Anne Boullet, décoratrice d'intérieur à La Rochelle : conseil, conception et décoration de maisons, appartements et locaux professionnels dans toute l'agglomération.",
    lede: "Le studio est installé à La Rochelle et intervient dans toute l'agglomération.",
    communes: ["La Rochelle", "Aytré", "Lagord", "Périgny", "Puilboreau", "Nieul-sur-Mer", "Châtelaillon-Plage"],
    texte: [
      "Maisons de ville, appartements, locaux professionnels : je me déplace chez vous pour une première visite, puis je vous accompagne du conseil au projet complet.",
      "À La Rochelle, j'ai notamment repensé la salle à manger des parents de la maternité, et des espaces de travail à La Pallice.",
    ],
    sections: [
      {
        titre: "Des maisons de ville aux appartements",
        paragraphes: [
          "Maisons de ville en pierre, appartements anciens du centre, maisons des années 1970 en périphérie : chaque type de logement rochelais a ses contraintes. Pièces en enfilade, cuisines fermées, manque de lumière : je trouve la bonne réponse en partant du bâti existant.",
        ],
      },
      {
        titre: "Les professionnels rochelais",
        paragraphes: [
          "Cabinets médicaux, cabinets comptables, bureaux : j'accompagne aussi les entreprises de l'agglomération, de l'aménagement à la signalétique.",
        ],
      },
    ],
    faq: [
      { q: "Vous déplacez-vous dans toute l'agglomération rochelaise ?", r: "Oui, dans toute l'agglomération. Des frais de déplacement s'ajoutent au-delà de 15 minutes de route." },
      { q: "Recevez-vous au studio ?", r: "[Réponse d'Anne à venir]" },
    ],
    projets: ["salle-a-manger-parents-maternite-la-rochelle"],
  },
  {
    slug: "ile-de-re",
    nom: "Île de Ré",
    h1: "Décoratrice d'intérieur sur l'Île de Ré",
    seoTitre: "Décoratrice d'intérieur sur l'Île de Ré : rénovation de maisons",
    description:
      "Décoratrice d'intérieur sur l'Île de Ré : rénovation et décoration de maisons de village et de résidences secondaires, de Rivedoux-Plage aux Portes-en-Ré.",
    lede: "Des maisons de village et des résidences secondaires, sur les dix communes de l'île.",
    communes: ["Rivedoux-Plage", "Sainte-Marie-de-Ré", "La Flotte", "Saint-Martin-de-Ré", "Le Bois-Plage-en-Ré", "La Couarde-sur-Mer", "Loix", "Ars-en-Ré", "Saint-Clément-des-Baleines", "Les Portes-en-Ré"],
    texte: [
      "Beaucoup de mes clients sur l'île achètent une résidence secondaire et souhaitent déléguer : je les accompagne de la conception jusqu'à la réception du chantier, avec des artisans de confiance.",
      "Le parti pris : garder le charme des maisons de village, leurs arches et leurs matériaux bruts, tout en les rendant faciles à vivre.",
    ],
    sections: [
      {
        titre: "Rénover une maison de village rétaise",
        paragraphes: [
          "Façades claires, volets colorés, ruelles étroites : les maisons de l'île ont un caractère fort. À l'intérieur, elles sont souvent sombres, cloisonnées, avec des pièces en enfilade. Les rénover, c'est ouvrir les volumes et faire entrer la lumière sans effacer leur histoire.",
        ],
      },
      {
        titre: "Des règles d'urbanisme à anticiper",
        paragraphes: [
          "Une grande partie de l'île est protégée. Les travaux extérieurs passent souvent par une déclaration préalable, parfois avec l'avis de l'architecte des Bâtiments de France. Pour la maison de Saint-Clément-des-Baleines, le studio a déposé la déclaration préalable de la façade.",
        ],
      },
      {
        titre: "Une résidence secondaire, sans être sur place",
        paragraphes: [
          "Vous n'êtes pas sur l'île chaque semaine ? Je fais le lien avec les artisans et je suis le chantier pour vous, jusqu'à la réception. Vous arrivez dans une maison prête à vivre.",
        ],
      },
    ],
    faq: [
      { q: "Faut-il une autorisation pour des travaux sur l'Île de Ré ?", r: "Souvent, oui, dès que l'extérieur est modifié : façade, ouvertures, toiture. La plupart des projets demandent une déclaration préalable, et certains secteurs protégés l'avis de l'architecte des Bâtiments de France." },
      { q: "Intervenez-vous sur toute l'île ?", r: "Oui, sur les dix communes, de Rivedoux-Plage aux Portes-en-Ré." },
    ],
    projets: ["maison-de-village-saint-clement-des-baleines"],
  },
  {
    slug: "oleron",
    nom: "Oléron",
    h1: "Décoratrice d'intérieur sur l'île d'Oléron",
    seoTitre: "Décoratrice d'intérieur à Oléron : rénovation et extension",
    description:
      "Décoratrice d'intérieur sur l'île d'Oléron : rénovation, extension et décoration de maisons de famille et de résidences secondaires, de Saint-Denis à Saint-Trojan.",
    lede: "Rénovations et extensions de maisons de famille, à une heure de La Rochelle.",
    communes: ["Saint-Denis-d'Oléron", "Saint-Pierre-d'Oléron", "Saint-Georges-d'Oléron", "Dolus-d'Oléron", "Le Château-d'Oléron", "Saint-Trojan-les-Bains"],
    texte: ["À Saint-Denis-d'Oléron, une maison de 92 m² est devenue une maison de famille de plus de 170 m² : redistribution complète, extension et décoration."],
    sections: [
      {
        titre: "Transformer une maison récente en maison de famille",
        paragraphes: [
          "Beaucoup de maisons de l'île sont des constructions récentes, sans charme particulier. Avec une redistribution des pièces, des matières naturelles et une charpente laissée apparente, elles peuvent devenir des lieux authentiques et chaleureux.",
        ],
      },
      {
        titre: "Agrandir pour accueillir toute la famille",
        paragraphes: ["Une extension bien pensée change la vie d'une résidence secondaire. À Saint-Denis-d'Oléron, 80 m² ont été ajoutés, avec un architecte partenaire pour le permis de construire."],
      },
    ],
    faq: [{ q: "Vous déplacez-vous sur toute l'île d'Oléron ?", r: "Oui. L'île est à environ une heure du studio ; des frais de déplacement s'appliquent." }],
    projets: ["maison-de-famille-saint-denis-d-oleron"],
  },
];

export const autresZones = ["Châtelaillon-Plage", "Rochefort", "Royan", "Saintes"];

/* ------------------------------------------------------------------ */
/* FAQ générale                                                        */
/* ------------------------------------------------------------------ */

export type Faq = QR;

export const faq: { groupe: string; items: Faq[] }[] = [
  {
    groupe: "Questions générales",
    items: [
      { q: "Jusqu'où va votre accompagnement ?", r: "Du simple rendez-vous conseil au projet complet : plans de principe, choix des matières et du mobilier, puis un suivi esthétique du chantier jusqu'à la réception." },
      { q: "Faites-vous uniquement de la conception, ou suivez-vous aussi les travaux ?", r: "Je conçois le projet puis j'assure un suivi esthétique du chantier. La coordination des travaux est confiée à un maître d'œuvre pour les projets importants." },
      { q: "Travaillez-vous avec des artisans que vous recommandez ?", r: "Oui, je travaille avec des artisans et des fournisseurs de la région, comme CB Sols pour les sols, Design 17 pour les cuisines ou Ryser pour les peintures." },
      { q: "Pouvez-vous déposer un permis de construire ?", r: "Les permis de construire sont réalisés avec un architecte partenaire. Je peux déposer moi-même une déclaration préalable." },
      { q: "Décoratrice ou architecte d'intérieur : quelle différence ?", r: "Je suis décoratrice d'intérieur : j'interviens sur l'agencement, les matières, les couleurs et le mobilier, avec des plans de principe. Les travaux soumis à permis de construire sont portés par un architecte partenaire." },
      { q: "Mon projet est déjà commencé, pouvez-vous intervenir ?", r: "[Réponse d'Anne à venir]" },
      { q: "Respectez-vous mon style ou imposez-vous votre vision ?", r: "[Réponse d'Anne à venir]" },
    ],
  },
  {
    groupe: "Particuliers",
    items: [
      { q: "Pouvez-vous intégrer nos meubles existants ?", r: "Oui. À Saint-Denis-d'Oléron, la redistribution de la maison a été pensée à partir des usages et du mobilier existant." },
      { q: "Combien de temps dure la conception ?", r: "Selon l'ampleur du projet, la conception demande de quelques heures à deux semaines de travail." },
      { q: "Combien coûte la prestation ?", r: "Le devis est établi après la première visite, avec un débriefing écrit. [Fourchettes à préciser]" },
      { q: "Intervenez-vous pour une seule pièce ?", r: "[Réponse d'Anne à venir]" },
    ],
  },
  {
    groupe: "Professionnels",
    items: [
      { q: "Pouvez-vous améliorer la circulation et la capacité d'accueil ?", r: "[Réponse d'Anne à venir]" },
      { q: "Prenez-vous en charge la signalétique ?", r: "Oui, la signalétique fait partie de mes services, comme pour la maternité de La Rochelle." },
      { q: "Tenez-vous compte de l'accessibilité PMR ?", r: "[Réponse d'Anne à venir]" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Artisans et partenaires (liste transmise par Anne, à valider)       */
/* Liens vérifiés le 08/10/2026 ; sans lien = site non trouvé.         */
/* ------------------------------------------------------------------ */

export type Partenaire = { nom: string; metier: string; url?: string; logo?: string }; // logo : public/partenaires/

export const partenaires: Record<string, Partenaire> = {
  maestro: { nom: "Travaux Maestro", metier: "Assistance à maîtrise d'ouvrage", logo: "maestro.jpg" },
  cbsols: { nom: "CB Sols", metier: "Revêtements de sol", url: "https://cbsols.fr" },
  design17: { nom: "Design 17", metier: "Cuisine, salle de bains, dressing", url: "https://www.design17.fr", logo: "design17.jpg" },
  dma: { nom: "Décoration Matériaux Atlantique", metier: "Cheministe, poêles et inserts" },
  ryser: { nom: "Ryser", metier: "Papiers peints et peintures", url: "https://ryser.fr", logo: "ryser.jpg" },
  cedeo: { nom: "Cedeo", metier: "Sanitaire et salle de bains", url: "https://www.cedeo.fr" },
  aubade: { nom: "Aubade", metier: "Salle de bains", url: "https://www.espace-aubade.fr" },
  labrouche: { nom: "Labrouche Antiquaire", metier: "Antiquaire de matériaux, Aytré", logo: "labrouche.jpg" },
  rohane: { nom: "La Forge de Rohane", metier: "Ferronnerie" },
  brossard: { nom: "Menuiserie Brossard", metier: "Menuiserie et agencement" },
  concas: { nom: "Samuel Concas", metier: "Architecte" },
  kheops: { nom: "Kheops création", metier: "[Métier à préciser]" },
  aubry: { nom: "François Aubry Menuiserie", metier: "Menuiserie" },
  pauzat: { nom: "Frédy Pauzat", metier: "Travertin" },
  aps: { nom: "APS Piscine", metier: "Piscine" },
};

export const partenairesStudio = ["maestro", "cbsols", "design17", "dma", "ryser", "cedeo", "aubade", "labrouche"];

/* ------------------------------------------------------------------ */
/* FAQ des pages sans contenu dédié (une FAQ sur chaque page)          */
/* ------------------------------------------------------------------ */

export const faqPages: Record<string, QR[]> = {
  accueil: [
    { q: "Où intervient Anne Boullet Studio ?", r: "À La Rochelle et à une heure autour : Île de Ré, Oléron, Châtelaillon-Plage, Rochefort, Royan et Saintes. Les missions à distance sont aussi possibles." },
    { q: "Travaillez-vous pour les particuliers et les professionnels ?", r: "Oui. Les particuliers représentent l'essentiel des projets, et j'accompagne aussi des lieux de santé, des bureaux et des hébergements." },
    { q: "Quelle mission choisir ?", r: "Le conseil pour avancer seul avec les bonnes pistes, la conception pour un projet qui touche à l'organisation des pièces, la décoration pour habiller un lieu déjà agencé." },
    { q: "Décoratrice ou architecte d'intérieur : quelle différence ?", r: "Je suis décoratrice d'intérieur : j'interviens sur l'agencement, les matières, les couleurs et le mobilier, avec des plans de principe. Les travaux soumis à permis de construire sont portés par un architecte partenaire." },
  ],
  realisations: [
    { q: "Quels types de projets réalisez-vous ?", r: "Des maisons de famille, des résidences secondaires, des maisons anciennes et des lieux professionnels : santé, bureaux, hébergement." },
    { q: "Vos projets sont-ils tous situés près de La Rochelle ?", r: "Ils se situent à une heure autour de La Rochelle, notamment sur l'Île de Ré et à Oléron." },
    { q: "Un projet comme ceux-ci est-il possible chez moi ?", r: "Tout commence par un premier échange, puis une visite sur place pour comprendre votre lieu et vos envies." },
  ],
  services: [
    { q: "Un savoir-faire peut-il être choisi seul ?", r: "Chaque savoir-faire s'inscrit dans une mission de conseil, de conception ou de décoration. Le premier échange permet de définir ce dont votre projet a besoin." },
    { q: "Réalisez-vous des perspectives 3D ?", r: "Oui, en option à l'avant-projet sommaire et dans l'avant-projet détaillé de la mission de conception." },
    { q: "Suivez-vous les travaux ?", r: "J'assure un suivi esthétique du chantier jusqu'à la réception. La coordination des entreprises est confiée à un maître d'œuvre pour les projets importants." },
  ],
  professionnels: [
    { q: "Quels lieux professionnels accompagnez-vous ?", r: "Les lieux de santé, les bureaux et les hébergements, comme les chambres d'hôtes et les locations saisonnières." },
    { q: "Prenez-vous en charge la signalétique ?", r: "Oui, la signalétique fait partie de mes services, comme pour la maternité de La Rochelle." },
    { q: "Impliquez-vous les équipes dans le projet ?", r: "Oui, c'est un atout : les équipes peuvent par exemple choisir le nom des salles." },
  ],
  studio: [
    { q: "Où est installé le studio ?", r: "À La Rochelle, en Charente-Maritime." },
    { q: "Avec quels artisans travaillez-vous ?", r: "Avec des artisans et des fournisseurs de la région, comme CB Sols pour les sols, Design 17 pour les cuisines ou Ryser pour les peintures." },
    { q: "Qu'est-ce qui guide vos projets ?", r: "Le respect de l'histoire des lieux, des matières naturelles, l'artisanat local et une relation de confiance." },
  ],
  contact: [
    { q: "Comment se passe le premier contact ?", r: "Un premier échange pour comprendre votre projet, puis une visite sur place suivie d'un devis accompagné d'un débriefing écrit." },
    { q: "Vous déplacez-vous chez moi ?", r: "Oui, à une heure autour de La Rochelle. Des frais de déplacement s'ajoutent au-delà de 15 minutes de route." },
    { q: "Que préparer avant de me contacter ?", r: "Quelques photos ou plans du lieu, la surface approximative et ce que vous souhaitez changer suffisent pour commencer." },
  ],
  mentions: [
    { q: "À quoi servent les données du formulaire ?", r: "Uniquement à répondre à votre demande." },
    { q: "Comment faire supprimer mes données ?", r: "Par simple e-mail : vos données sont modifiées ou supprimées sur demande." },
  ],
};
