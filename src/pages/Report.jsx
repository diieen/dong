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

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position => {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=18&addressdetails=1`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setAddress(data.address)
          })
      })
    );
  }

  return (
    <div className="ong-main">
      <BreadCrumb items={url} />
      <h1>Reportar abandono</h1>
      <p>Encontrou um animalzinho abandonado ? </p>
      <p>Onde ele se encontra?</p>
      <button onClick={getLocation}>Usar minha localização atual</button>
      <input type="text" className="input register-address" name="street" placeholder='Rua' required value={address.road || ""} />
      <input type="text" className="input register-number" name="number" placeholder='Número' required />
      <input type="text" className="input register-bairro" name="district" placeholder='Bairro' required value={address.suburb || ""} />
      <input type="text" className="input register-city" name="city" placeholder='Cidade' required value={address.city || ""} />
      <input type="text" className="input register-state" name="state" placeholder='Estado' required value={address.state || ""} />
      <textarea name="" id="" cols="30" rows="10" placeholder="Descrição do local ou observações"></textarea>
      <p>Caracteristcas do animal:</p>
      <textarea name="" id="" cols="30" rows="10" placeholder="Descreva o animal o mais detalhado possivel (Como por exemplo: Raça; Cor; estatura; etc.)"></textarea>
      <p>Tem uma imagem do local ou do animal?</p>
      
      <form action="">
        <input type="file" accept="image/png, image/jpeg" multiple onChange={(e) => changeImg(e.target.files[0])} />
        {
          img && <img src={img} alt="img" />
        }
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
