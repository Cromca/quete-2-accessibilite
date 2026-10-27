import { useId, useState } from 'react';

export default function EmailForm() {
  const emailId = useId();
  const errorId = `${emailId}-error`;

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const input = event.currentTarget.elements.namedItem('email');

    if (!input.validity.valid) {
      setError('Saisis une adresse e-mail valide, par exemple nom@exemple.fr.');
      setMessage('');
      input.focus();
      return;
    }

    setError('');
    setMessage('Adresse valide. Aucun envoi réel effectué.');
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor={emailId}>Adresse e-mail (obligatoire)</label>

      <input
        id={emailId}
        name="email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
      />

      <p
        id={errorId}
        role="alert"
        style={{ color: '#ffffff', backgroundColor: '#9b1c1c' }}
      >
        {error}
      </p>

      <button type="submit">Vérifier l’adresse</button>

      <p role="status">{message}</p>
    </form>
  );
}