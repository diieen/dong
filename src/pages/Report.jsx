import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";

export function Report() {
  const [img, setImg] = useState(null);
  const [cords, setCords] = useState({});
  const [address, setAddress] = useState('');
  const url = useLocation();

  const changeImg = (e) => {
    let reader = new FileReader();

    reader.onload = (e) => {
        setImg(e.target.result);
    }

    reader.readAsDataURL(e);
  }

  const geolocation = navigator.geolocation.watchPosition(
    (position => {
      if (position.coords.accuracy <= 20) {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=18&addressdetails=1`)
        .then(res => res.json())
        .then(data => {
          alert(`${data.address.road}, ${data.address.suburb} - ${data.address.city}`);
          navigator.geolocation.clearWatch(geolocation);
        })
      }
    })
  );

  // if (cords.accuracy <= 20) {
  //   navigator.geolocation.clearWatch(geolocation);

  //   setAddress('foi')
  // }

  return (
    <div>
      <BreadCrumb items={url} />
      <h1>Report</h1>
      <form action="">
        <input type="file" onChange={(e) => changeImg(e.target.files[0])} />
        {
            img && <img src={img} alt="img" />
        }
        <button type="submit">Enviar</button>
        <p>Coordenadas: {cords.lat}, {cords.long}</p>
        <p>Accuracy: {cords.accuracy}</p>
        <p>Address: {address}</p>
      </form>
    </div>
  );
}
