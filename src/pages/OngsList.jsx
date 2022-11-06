import { useEffect, useState } from "react";
import dataOngs from "../database/ongs"

const OngsList = () => {
    const [ongs, setOngs] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dataOngs.then((data) => {
            setOngs(data);
        });
    }, [])

    const filteredOngs = search.length > 0
        ? ongs.filter(ong => ong.name.toLowerCase().includes(search.toLowerCase()))
        : [];

    return (
        <div className="ongs-list">
            <h1>Lista de ONGs</h1>
            {
                filteredOngs.length > 0 ? (
                    <div>
                        {
                            filteredOngs.map((ong, index) => {
                                return (
                                    <div key={index} onClick={() => navigate(`/ong/${ong.slug}`)}>
                                        <img width="300" src={ong.logo} alt={`Logo ${ong.name}`} />
                                        <p>{ong.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <div>
                        {
                            ongs.length > 0 && (
                                ongs.map((ong, index) => {
                                    return (
                                        <div key={index} onClick={() => navigate(`/ong/${ong.slug}`)}>
                                            <img width="300" src={ong.logo} alt={`Logo ${ong.name}`} />
                                            <p>{ong.name}</p>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default OngsList;