import { useId } from 'react';

export default function Toolbar({ onSave, onDelete }) {
  const searchId = useId();

  return (
    <div className="toolbar">
      <button type="button" onClick={onSave}>
        Enregistrer
      </button>

      <button type="button" onClick={onDelete}>
        Supprimer
      </button>

      <div className="search">
        <label htmlFor={searchId}>Rechercher</label>
        <input id={searchId} type="search" />
      </div>
    </div>
  );
}