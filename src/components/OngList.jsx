import { useEffect, useState } from "react";
import dataOngs from "../database/ongs"
import OngCard from "./OngCard";

const OngList = () => {
    const [ongs, setOngs] = useState([]);

    useEffect(() => {
        dataOngs.then((data) => {
            setOngs(data);
        });
    }, [])

    return (
        <div className="ongs-list-container">
            <>
                {
                    ongs.length > 0 && (
                        ongs.map((ong, index) => {
                            const data = {
                                key: index,
                                ...ong
                            }
                            return (
                                <OngCard key={index} ong={data} />
                            )
                        })
                    )
                }
            </>
        </div>
    )
}

export default OngList;