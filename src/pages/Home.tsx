import React from "react";
import { Link } from "react-router-dom";
import { unitNumbers } from "../data/listenings";

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Book Listenings</h1>
      <p>Select a unit:</p>

      <ul>
        {unitNumbers.map((u) => (
          <li key={u}>
            <Link to={`/unit/${u}`}>Unit {u}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
