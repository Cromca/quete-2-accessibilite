import { useState } from 'react';
import Toolbar from './Toolbar';
import HelpButton from './HelpButton';
import SearchBar from './SearchBar';
import EmailForm from './EmailForm';
import './App.css';

export default function App() {
  const [message, setMessage] = useState('');

  return (
    <>
      <header>
        <h1>Exercices d’accessibilité en React</h1>
      </header>

      <main>
        <section>
          <h2>Quête 2 — Toolbar accessible</h2>

          <Toolbar
            onSave={() => setMessage('Enregistrement effectué.')}
            onDelete={() => setMessage('Suppression effectuée.')}
          />

          <p role="status">{message}</p>
        </section>

        <section>
          <h2>Quête 3 — Bouton d’aide accessible</h2>

          <p>Consulte les formats d’image acceptés :</p>

          <HelpButton />
        </section>

        <section>
          <h2>Quête 4 — Navigation clavier</h2>

          <SearchBar />
        </section>

        <section>
          <h2>Quête 5 — Contrastes et messages d’erreur</h2>

          <p>
            Une erreur doit être expliquée par un texte,
            pas seulement signalée par une couleur.
          </p>

          <EmailForm />
        </section>
      </main>

    </>
  );
}