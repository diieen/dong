import { useState } from "react";

export function Report() {
  const [img, setImg] = useState(null);
  const [cords, setCords] = useState({});
  const [cords2, setCords2] = useState({});

  const changeImg = (e) => {
    let reader = new FileReader();

    reader.onload = (e) => {
        setImg(e.target.result);
    }

    reader.readAsDataURL(e);
  }

  navigator.geolocation.getCurrentPosition((position => {
    setCords({
      lat: position.coords.latitude, 
      long: position.coords.longitude
    });
  }))

  navigator.geolocation.watchPosition((position => {
    setCords2({
      lat: position.coords.latitude, 
      long: position.coords.longitude
    });
  }))

  return (
    <div>
      <h1>Report</h1>
      <form action="">
        <input type="file" onChange={(e) => changeImg(e.target.files[0])} />
        {
            img && <img src={img} alt="img" />
        }
        <button type="submit">Enviar</button>
        <p>Coordenadas: {cords.lat}, {cords.long}</p>
        <p>Coordenadas2: {cords2.lat}, {cords2.long}</p>
      </form>
    </div>
  );
}
