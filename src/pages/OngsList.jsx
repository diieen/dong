import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";
import dataOngs from "../database/ongs"

const OngsList = () => {
    const [ongs, setOngs] = useState([]);
    const [search, setSearch] = useState('');
    const teste = useLocation();
    console.log(teste)

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
            <BreadCrumb items={teste} />
            <h1>Lista de ONGs</h1>
            {
                filteredOngs.length > 0 ? (
                    <div>
                        {
                            filteredOngs.map((ong, index) => {
                                return (
                                    <Link key={index} to={`/ong/${ong.slug}`}>
                                        <div>
                                            <img width="300" src={ong.logo} alt={`Logo ${ong.name}`} />
                                            <p>{ong.name}</p>
                                        </div>
                                    </Link>
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
                                        <Link key={index} to={`/ong/${ong.slug}`}>
                                            <div>
                                                <img width="300" src={ong.logo} alt={`Logo ${ong.name}`} />
                                                <p>{ong.name}</p>
                                            </div>
                                        </Link>
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