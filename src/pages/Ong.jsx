import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";
import "../sass/ong.scss"

export function Ong(props) {
  const ong = props.data;
  const teste = useLocation();
  console.log(ong)
  
  return (
    <div className="ong-main padding-footer">
        <BreadCrumb items={teste} />
        <div className="ong-content">
          <h1>{ong.name}</h1>
          <div>
            <img src={ong.logo} alt={`Logo ${ong.name}`} />
          </div>
          <p>Fundacao: <span>{ong.foundation}</span></p>
          <p>Sobre a <strong>{ong.name}</strong></p>
          <span>{ong.description}</span>
          <p>Telefone: <span>{ong.tel}</span></p>
          <p>Site: <a target="_blank" href={ong.site}>{ong.site} </a></p>
          <p></p>
          <p>Endereço: <span>{ong.address}; {ong.city} - {ong.district}</span></p>
        </div>
    </div>
  )
}