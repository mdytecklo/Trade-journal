import React, { useState } from "react";

function App() {
  const [trades, setTrades] = useState([]);
  const [form, setForm] = useState({
    date: "",
    ticker: "",
    direction: "",
    entry: "",
    exit: "",
    size: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTrade = () => {
    setTrades([...trades, { ...form, id: Date.now() }]);
    setForm({
      date: "",
      ticker: "",
      direction: "",
      entry: "",
      exit: "",
      size: "",
      notes: "",
    });
  };

  return (
    <div>
      <h1>Trade Journal</h1>
      <div>
        <input name="date" value={form.date} onChange={handleChange} placeholder="Date" />
        <input name="ticker" value={form.ticker} onChange={handleChange} placeholder="Ticker" />
        <input name="direction" value={form.direction} onChange={handleChange} placeholder="Direction" />
        <input name="entry" value={form.entry} onChange={handleChange} placeholder="Entry Price" />
        <input name="exit" value={form.exit} onChange={handleChange} placeholder="Exit Price" />
        <input name="size" value={form.size} onChange={handleChange} placeholder="Size" />
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" />
        <button onClick={handleAddTrade}>Add Trade</button>
      </div>

      <div>
        {trades.map((trade) => (
          <div key={trade.id}>
            <strong>{trade.ticker}</strong> ({trade.direction}) – {trade.date}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
