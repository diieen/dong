import { Link } from "react-router-dom";
import "../sass/breadcrumb.scss"

const BreadCrumb = ({ items }) => {
    const path = items.pathname.split("/");
    console.log(items);
    
    return (
        <div className="breadcrumb">
            <Link to="/" className="breadcrumb-item">Home</Link>
            {
                path.map((item, index) => {
                    if (index !== 0) {
                        return (
                            <div key={index} className={`bread-content bread-${index}`}>
                                <span>/</span>
                                <Link to={`/${item}`} className={`${index == path.length - 1 ? "breadcrumb-strong" : ""} breadcrumb-item`}>{item == "reportar-abandono" ? "Reportar abandono" : item == "doacao" ? "doação" : item}</Link>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default BreadCrumb;