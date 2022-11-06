import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";

export function Ong(props) {
  const ong = props.data;
  const teste = useLocation();
  //console.log(teste)
  
  return (
    <div>
        <BreadCrumb items={teste} />
        <h1>{ong.name}</h1>
        <p>Fundado em {ong.foundation}</p>
        <p>{ong.description}</p>
        <p>{ong.tel}</p>
        <a target="_blank" href={ong.site}>{ong.site}</a>
        <p>{ong.address}</p>
        <p>{ong.city} - {ong.district}</p>
    </div>
  )
}