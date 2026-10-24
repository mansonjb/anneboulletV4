# Direction artistique · Anne Boullet Studio

Document de cadrage visuel, à valider avant la maquette d'accueil.
Sources : atelier du 29/09, réponses d'Anne (08/10), 355 photos des 7 projets, logo, 5 sites aimés + 1 site rejeté analysés en capture (08/10/2026).

## 1. Ce qu'Anne veut, lu dans ses références

| Site | Ce qu'elle a retenu | Ce que ça dit concrètement |
|---|---|---|
| CB Sols | légèreté, fluidité, rigueur, esprit magazine, mots percutants | titres courts en serif avec un mot en italique, numérotation, fond crème, infos lisibles en 3 secondes |
| Studio Castille | (aimé) | fond crème rosé, titres en capitales fines, photos de travail (nuanciers, échantillons, mains), beaucoup d'air |
| Constance Laurand | sobriété, photos qui parlent, aéré | portfolio en grille 2 colonnes, légende minuscule sous chaque photo, presque zéro texte |
| Studio Heju | légèreté, douceur, simplicité | logo et menu en capitales géométriques très espacées + serif Garamond. **C'est exactement le système de son logo.** |
| Mon Concept Habitation | (aimé) | parcours client en étapes, preuves (chiffres, avis), CTA clair |
| Aurélie Rousselin (rejeté) | dégradés, surcharge, cadres filaires, croquis en fond | cadres fins autour des photos, croquis gris en fond, blocs gris pleins, gros boutons noirs, titre posé sur photo dans un cartouche |

**Le dénominateur commun** : fond clair et chaud, une photo forte à la fois, typographie fine (capitales espacées + serif), texte court, aucun ornement. L'émotion vient des photos et du vide, jamais du décor de la page.

**La nuance importante** : Anne aime l'épure de Laurand et Heju, mais elle a aussi besoin de ce que fait CB Sols (dire vite qui elle est, où, pour qui, combien de temps) parce que son site doit ramener des clients en local. Notre ligne : **la forme de Heju, la clarté de CB Sols.**

## 2. Ce que disent ses photos

- **Deux familles de qualité.** Photos de photographe pro (Oléron, Parpaillaud, Saint Claude, Ermitage, Beguin, Maternité) : lumineuses, chaudes, beaucoup de verticales de détail. Photos smartphone (Bodilis, 4000x3000, perspectives déformées) : à garder en page projet uniquement, jamais en accueil.
- **Définitions inégales.** Oléron 4724 px, Ermitage et Beguin 2362 px, Maternité 2000 px, Parpaillaud et Saint Claude 1500 px seulement. Conséquence : le plein écran est réservé à Oléron, Ermitage et Beguin ; Parpaillaud et Saint Claude vivent en demi-largeur ou en diptyque.
- **Le format dominant est vertical (2:3)** : détails de matières, luminaires, niches, poignées. C'est un cadeau pour une mise en page magazine (diptyques, photo verticale + texte).
- **Ses couleurs sont déjà là.** Terracotta et rouille (Parpaillaud, Ermitage, Beguin), vert de gris et sauge (zellige, cuisines Parpaillaud et Saint Claude, Maternité), bois blond et ocre (Oléron), blanc chaud partout. Les 3 pistes couleur demandées (vert, terracotta, beige) sortent donc directement de ses chantiers : c'est l'argument à lui présenter.
- **Aucune photo d'Anne au travail** pour l'instant (portrait demandé). Castille montre que ces images (mains, nuancier, échantillons) humanisent énormément. À suggérer pour une prochaine séance photo.

## 3. Le logo, et ce qu'il impose

Capitales sans-serif géométriques très espacées (dessin type Avenir, vectorisé) + « Studio » en Times Italic entre deux filets. Le site reprend ce duo :

- **Capitales espacées** (Jost, libre, cousine de Futura et Avenir) : menu, surtitres, légendes, boutons.
- **Serif avec une vraie italique** : titres, avec un mot clé en italique, comme « Studio » dans le logo.
- Logo intégré en SVG (pas en image), couleur encre, jamais en couleur d'accent.

## 4. Les trois exigences et leurs règles

### Éditorial
- Une idée par écran. Pas de grille de cartes chargée.
- Titres serif grands (clamp 40 à 88 px), mot clé en italique, interlignage serré.
- Légendes type magazine sous chaque photo : `MAISON DE FAMILLE · SAINT-DENIS-D'OLÉRON · 170 M²`.
- Diptyques (paysage + verticale de détail), décalages de grille, marges généreuses.
- Numérotation discrète (01, 02...) pour missions et méthode, comme CB Sols.
- Texte **jamais posé sur une photo** : il vit à côté ou dessous. Ça règle à la fois le refus des dégradés (pas de voile sombre) et le contraste.

### Performant
- Next 16, rendu statique, zéro carrousel automatique, zéro vidéo en hero.
- Images : jamais d'original dans le repo. Dérivés AVIF/WebP en 640/1080/1600/2400 via next/image, `sizes` précis, hero en `priority`. Cible : hero < 250 Ko, LCP < 2 s en 4G.
- 2 familles de polices en variable, auto-hébergées (next/font), sous-ensemble latin.
- JS client limité au formulaire et au menu mobile.

### Accessible
- Contrastes vérifiés AA (tableau ci-dessous). Les couleurs d'accent servent aux surfaces et aux petits éléments ; le texte courant reste encre.
- Corps 17 px minimum, 60 à 70 caractères par ligne, interlignage 1,6.
- Capitales espacées seulement sur des libellés courts (jamais un paragraphe).
- Focus visible, cibles tactiles 44 px, `prefers-reduced-motion` respecté, alt descriptifs (pièce + matière + commune, utiles aussi au SEO).

### Le point « texte justifié »
Anne a cité les textes non justifiés comme un défaut. Le justifié crée des trous dans les lignes sur mobile et gêne la lecture (WCAG 1.4.8). Proposition : **paragraphes d'intro justifiés avec césure automatique sur ordinateur, alignés à gauche sur mobile**, colonnes étroites. Visuellement elle aura le bloc net qu'elle aime, sans pénaliser la lecture.

## 5. Typographie

| Rôle | Police | Réglages |
|---|---|---|
| Titres, chapô, citations | Newsreader (serif variable, italique dessinée, optimisée écran) | 400, italique pour le mot clé, interlettrage -1 % |
| Libellés, menu, légendes, boutons | Jost | 400 à 500, capitales, interlettrage 0,18 em, 11 à 13 px |
| Texte courant | Jost | 400, 17 à 18 px, interlignage 1,6 |

Écartées : Cormorant (utilisée par le site rejeté), Playfair (trop « déco »), polices à contraste extrême illisibles en petit.

## 6. Couleurs

Base commune aux 3 pistes :

| Jeton | Valeur | Usage | Contraste sur papier |
|---|---|---|---|
| `paper` | #F7F3EE | fond | |
| `ink` | #2A2622 | texte, logo | 13,6:1 |
| `muted` | #655D54 | légendes, texte secondaire | 5,9:1 |
| `line` | #E2DACE | séparateurs fins (pas de cadres autour des photos) | décoratif |

Les 3 pistes, tirées de ses projets :

| Piste | Accent texte (AA) | Accent surface | Teinte de fond de section | Projets d'origine |
|---|---|---|---|---|
| **Vert** (vert de gris, sauge) | #46523F (7,5:1) | #56634F | #E3E6DC | zellige et cuisine Parpaillaud, Saint Claude, Maternité |
| **Terracotta** (rouille) | #8F4327 (6,3:1) | #A5502F | #F1E1D6 | murs Parpaillaud, Ermitage, Beguin |
| **Beige** (sable, bois blond) | #77603F (5,4:1) | #8A6D4C | #EDE4D6 | bois et lin d'Oléron |

Règle : l'accent couvre moins de 10 % de l'écran (un fond de section, un bouton, un trait). Les photos portent la couleur.

## 7. Accueil : déroulé proposé

1. **En-tête** : logo SVG à gauche, menu en capitales espacées à droite, bouton « Prendre rendez-vous ».
2. **Ouverture sur une réalisation** : photo pleine largeur d'Oléron (seule série assez définie), légende magazine dessous, puis H1 hors photo : *Décoratrice d'intérieur à La Rochelle et sur l'Île de Ré*, avec une ligne de réassurance (particuliers et professionnels, à 1 h autour de La Rochelle).
3. **Manifeste** : une phrase d'Anne en grand serif (« traduire un espace neuf comme un lieu qui a toujours vécu »), 3 lignes justifiées dessous.
4. **Réalisations** : 3 projets en diptyques alternés (Oléron, Parpaillaud, Ermitage), légende + 1 phrase + lien.
5. **Trois missions** : Conseils, Conception, Décoration. Liste typographique numérotée, pas de cartes encadrées.
6. **Méthode en 5 temps** : de la première rencontre à la réception du chantier.
7. **Espaces professionnels** : bande teintée, photo Maternité, secteurs (santé, bureaux, hébergement).
8. **Zone d'intervention** : communes en liste typographique, liens vers les pages locales.
9. **Artisans et partenaires** (après confirmation d'Anne).
10. **Questions fréquentes** : 4 à 5 questions, lien vers la FAQ complète.
11. **Contact** : formulaire court (particulier/pro, type de projet, commune, surface, mission) + téléphone, WhatsApp, e-mail.
12. **Pied de page** : coordonnées complètes (NAP identique à la fiche Google), mentions.

## 8. À faire / à ne pas faire

**Oui** : vide, une photo forte à la fois, légendes précises, capitales espacées, italique en accent, fond crème, séparateurs fins entre éléments de liste, photos de matières en gros plan.

**Non** : dégradés, voiles sombres sur photo, cadres autour des images, croquis ou motifs en fond, blocs gris, boutons noirs massifs, carrousels automatiques, icônes décoratives, emojis, animations au défilement appuyées, plus de deux polices.

## 9. Étapes suivantes

1. Sélection et nommage des ~40 photos maîtresses (sujet vérifié image par image), génération des dérivés optimisés hors repo.
2. Planche de style (typo, 3 pistes couleur, composants) à valider en interne.
3. Maquette d'accueil codée, déclinée en vert, terracotta et beige sur la même page, présentée à Anne.

## Note confidentialité

Le repo `mansonjb/anneboullet` est **public**. Ne pas y verser `brief-anne.md` (tarif Conseils non affiché, liens WeTransfer) ni le carnet de projet Costes (données clients). Les originaux photo restent hors repo.
