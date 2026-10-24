import { partenaires } from "@/data/site";
import Image from "next/image";
import { Arrow } from "./ui";

export default function Partenaires({ cles, compact = false }: { cles: string[]; compact?: boolean }) {
  const liste = cles.map((k) => partenaires[k]).filter(Boolean);
  return (
    <ul className={`partners${compact ? " compact" : ""}`}>
      {liste.map((p) => (
        <li key={p.nom}>
          {p.url ? (
            <a href={p.url} target="_blank" rel="noopener">
              <Logo p={p} />
              <span className="serif">{p.nom}</span>
              <span>{p.metier}</span>
              <Arrow size={12} />
            </a>
          ) : (
            <div>
              <Logo p={p} />
              <span className="serif">{p.nom}</span>
              <span>{p.metier}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

// Logo dans un cadre de hauteur fixe ; sans logo, le nom tient lieu de marque
function Logo({ p }: { p: { nom: string; logo?: string } }) {
  return (
    <span className="pt-logo" aria-hidden="true">
      {p.logo ? <Image src={`/partenaires/${p.logo}`} alt="" fill sizes="220px" /> : <span className="pt-word">{p.nom}</span>}
    </span>
  );
}
