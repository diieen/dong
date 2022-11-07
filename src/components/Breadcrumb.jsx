import { Link } from "react-router-dom";
import "../sass/breadcrumb.scss"

const BreadCrumb = ({ items }) => {
    const path = items.pathname.split("/");
    // console.log(path);
    
    return (
        <div className="breadcrumb">
            <Link to="/" className="breadcrumb-item">Home</Link>
            {
                path.map((item, index) => {
                    if (index !== 0) {
                        return (
                            <>
                                <span> / </span>
                                <Link key={index} to={`/${item}`} className={`${index == path.length - 1 ? "breadcrumb-strong" : ""} breadcrumb-item`}>{item == "reportar-abandono" ? "Reportar abandono" : item}</Link>
                            </>
                        )
                    }
                })
            }
        </div>
    );
}

export default BreadCrumb;