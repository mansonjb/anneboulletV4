"use client";

import { useState } from "react";
import { Arrow } from "./ui";

// Maquette : le formulaire vérifie les champs et confirme, sans envoi réel (à brancher au lancement).
export default function ContactForm({ id = "c" }: { id?: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-ok" role="status">
        <p className="serif">Merci, votre demande est bien notée.</p>
        <p>Anne vous recontacte rapidement pour un premier échange. (Maquette : l&apos;envoi réel sera branché au lancement.)</p>
        <button type="button" className="ghost" onClick={() => setSent(false)}>
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      aria-label="Demande de rendez-vous"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <fieldset className="field">
        <legend>Vous êtes</legend>
        <div className="seg">
          <label>
            <input type="radio" name={`${id}-profil`} value="particulier" defaultChecked /> Particulier
          </label>
          <label>
            <input type="radio" name={`${id}-profil`} value="professionnel" /> Professionnel
          </label>
        </div>
      </fieldset>
      <div className="row2">
        <div className="field">
          <label htmlFor={`${id}-projet`}>Type de projet</label>
          <select id={`${id}-projet`} name="projet">
            <option>Maison</option>
            <option>Appartement</option>
            <option>Résidence secondaire</option>
            <option>Local professionnel</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor={`${id}-mission`}>Mission souhaitée</label>
          <select id={`${id}-mission`} name="mission">
            <option>Je ne sais pas encore</option>
            <option>Conseils</option>
            <option>Conception</option>
            <option>Décoration</option>
          </select>
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor={`${id}-commune`}>Commune</label>
          <input id={`${id}-commune`} name="commune" type="text" autoComplete="address-level2" required />
        </div>
        <div className="field">
          <label htmlFor={`${id}-surface`}>Surface approximative</label>
          <input id={`${id}-surface`} name="surface" type="text" inputMode="numeric" placeholder="en m²" />
        </div>
      </div>
      <div className="field">
        <label htmlFor={`${id}-msg`}>Votre projet en quelques mots</label>
        <textarea id={`${id}-msg`} name="message" required />
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor={`${id}-nom`}>Nom</label>
          <input id={`${id}-nom`} name="nom" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor={`${id}-mail`}>E-mail ou téléphone</label>
          <input id={`${id}-mail`} name="contact" type="text" autoComplete="email" required />
        </div>
      </div>
      <button className="pill-btn bg-surface" type="submit">
        Envoyer la demande
        <span className="arrow">
          <Arrow />
        </span>
      </button>
    </form>
  );
}
