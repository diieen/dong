import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import dataOngs from "../database/ongs"

export function Home() {
  const navigate = useNavigate();
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    dataOngs.then((data) => {
      setOngs(data);
    });
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {
        ongs.length > 0 && (
          ongs.map((ong, index) => {
            return (
              <button key={index} onClick={() => navigate(`/ong/${ong.slug}`)}>{ong.name}</button>
            )
          })
        )
      }
    </div>
  );
}
