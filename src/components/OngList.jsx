import { useEffect, useState } from "react";
import dataOngs from "../database/ongs"
import OngCard from "./OngCard";

const OngList = () => {
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
        <div className="ongs-list-container">
            {
                filteredOngs.length > 0 ? (
                    <>
                        {
                            filteredOngs.map((ong, index) => {
                                const data = {
                                    key: index,
                                    ...ong
                                }
                                return (
                                    <OngCard ong={data}/>
                                )
                            })
                        }
                    </>
                ) : (
                    <>
                        {
                            ongs.length > 0 && (
                                ongs.map((ong, index) => {
                                    const data = {
                                        key: index,
                                        ...ong
                                    }
                                    return (
                                        <OngCard ong={data}/>
                                    )
                                })
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

export default OngList;