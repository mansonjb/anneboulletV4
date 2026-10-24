import { contact, missions, secteurs, services, zones } from "@/data/site";
import { Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="ft ft2">
      <div className="ft-brand">
        <Logo />
        <address>
          Anne Boullet Studio
          <br />
          Décoratrice d&apos;intérieur
          <br />
          {contact.adresse}
          <br />
          {contact.ville}
          <br />
          {contact.tel}
        </address>
      </div>
      <nav className="ft-cols" aria-label="Plan du site">
        <div>
          <p>Missions</p>
          <ul>
            {missions.map((m) => (
              <li key={m.slug}>
                <a href={`/missions/${m.slug}`}>{m.titre}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Savoir-faire</p>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`/services/${s.slug}`}>{s.nom}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Professionnels</p>
          <ul>
            {secteurs.map((s) => (
              <li key={s.slug}>
                <a href={`/professionnels/${s.slug}`}>{s.nom}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Secteurs</p>
          <ul>
            {zones.map((z) => (
              <li key={z.slug}>
                <a href={`/zones/${z.slug}`}>{z.nom}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Le studio</p>
          <ul>
            <li>
              <a href="/realisations">Réalisations</a>
            </li>
            <li>
              <a href="/studio">Anne Boullet</a>
            </li>
            <li>
              <a href="/questions-frequentes">Questions fréquentes</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/mentions-legales">Mentions légales</a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="ft4-mark" aria-hidden="true">
        Anne Boullet <em>studio</em>
      </p>
    </footer>
  );
}
