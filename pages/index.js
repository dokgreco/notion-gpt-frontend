import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState("");
  const [risposta, setRisposta] = useState("");

  const chiedi = async () => {
    const res = await fetch(`${process.env.API_BASE_URL}/chatbot?query=${encodeURIComponent(query)}`);
    const data = await res.json();
    setRisposta(data.risposta);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Innovation Advisor Chatbot</h2>
      <input 
        style={{ width: '80%', padding: 10 }} 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Chiedi qualcosa..." 
      />
      <button style={{ padding: 10, marginLeft: 10 }} onClick={chiedi}>
        Invia
      </button>
      <div style={{ marginTop: 20 }}>
        <strong>Risposta:</strong>
        <p>{risposta}</p>
      </div>
    </div>
  );
}
