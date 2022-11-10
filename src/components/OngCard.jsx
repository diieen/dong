import { Link } from "react-router-dom";

const OngCard = ({ ong, key }) => {
    // console.log(ong,"ong")
    return (
        <>
            <Link key={key} to={`/ong/${ong.slug}`} className="ong-card">
                <div className="ong-card-content">
                    <img width="300" src={ong.logo} alt={`Logo ${ong.name}`} className="ong-card-image" />
                    <p className="ong-card-text">{ong.name}</p>
                </div>
            </Link>
        </>
    )
}

export default OngCard;