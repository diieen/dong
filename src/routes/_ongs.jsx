import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Ong } from "../pages/Ong";

import dataOngs from "../database/ongs"

export function Ongs() {
  const { slug } = useParams();
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    dataOngs.then((data) => {
      setOngs(data);
    });
  }, []);

  return (
    <>
      {ongs.map((ong, index) => {
        if (ong.slug === slug) {
          return (
            <Ong data={ong} />
          );
        }
      })}
    </>
  );
}
