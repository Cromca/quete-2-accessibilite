import { useId, useState } from 'react';

export default function HelpButton() {
  const [isOpen, setIsOpen] = useState(false);
  const helpId = useId();

  return (
    <div>
      <button
        type="button"
        aria-label="Aide sur le format des images"
        aria-expanded={isOpen}
        aria-controls={helpId}
        onClick={() => setIsOpen((open) => !open)}
      >
        ?
      </button>

      <div id={helpId} role="status">
        {isOpen ? 'Ce champ accepte les formats JPG et PNG.' : ''}
      </div>
    </div>
  );
}