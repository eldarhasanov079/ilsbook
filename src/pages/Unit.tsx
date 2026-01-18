import React from "react";
import { Link, useParams } from "react-router-dom";
import { units } from "../data/listenings";

export default function Unit() {
  const { unitId } = useParams();
  const unitNum = Number(unitId);
  const tracks = units[unitNum];

  if (!tracks) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Unit not found</h1>
        <Link to="/">Back to all units</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <Link to="/">← Back</Link>
      <h1>Unit {unitNum}</h1>

      <ul style={{ paddingLeft: 18 }}>
        {tracks.map((t) => (
          <li key={t.file} style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 6 }}>{t.title}</div>

            <audio controls preload="none" style={{ width: "100%", maxWidth: 520 }}>
              <source src={t.file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <div style={{ marginTop: 6 }}>
              <a href={t.file} download>
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
