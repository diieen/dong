import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";
import OngList from "../components/OngList";
import "../sass/ongs-list.scss"


const OngsList = () => {
    const url = useLocation();

    return (
        <div className="ongs-list">
            <div className="ongs-list-main">
                <BreadCrumb items={url} />
                <h1>Ongs</h1>
                <OngList/>
            </div>
            
        </div>
    );
}

export default OngsList;