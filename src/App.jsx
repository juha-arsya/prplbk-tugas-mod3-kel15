import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (count === 10) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [count]);

  return (
    <div className="App">
      <div className="card">
        <h2 className="card-title">TUGAS MODUL 3 | KELOMPOK 15</h2>
        <h2 className="card-title">COUNTER</h2>
        <div>
          <button
            className="counter-button"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button
            className="counter-button"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <p className="counter-value">Counter: {count}</p>
        </div>
        {showMessage && (
          <p className="message">Counter sudah mencapai angka 10!</p>
        )}
      </div>
    </div>
  );
}

export default App;
