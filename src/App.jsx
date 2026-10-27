import { useState } from 'react';
import Toolbar from './Toolbar';
import './App.css';

export default function App() {
  const [message, setMessage] = useState('');

  return (
    <>
      <header>
        <h1>Quête 2 — HTML sémantique en React</h1>
      </header>

      <main>
        <h2>Mes actions</h2>

        <Toolbar
          onSave={() => setMessage('Enregistrement effectué.')}
          onDelete={() => setMessage('Suppression effectuée.')}
        />

        <p role="status">{message}</p>
      </main>

    </>
  );
}