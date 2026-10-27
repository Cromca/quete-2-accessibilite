import { useId, useState } from 'react';

export default function SearchBar() {
  const searchId = useId();
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  function handleSearch(event) {
    event.preventDefault();

    setMessage(
      query.trim()
        ? `Recherche simulée pour : ${query.trim()}`
        : 'Saisis un terme à rechercher.'
    );
  }

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor={searchId}>Rechercher</label>

      <input
        id={searchId}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button type="submit">Rechercher</button>

      <p role="status">{message}</p>
    </form>
  );
}