import { useState } from 'react';
import Toolbar from './Toolbar';
import HelpButton from './HelpButton';
import SearchBar from './SearchBar';
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
      </main>

    </>
  );
}