import { useState } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";
import PaymentData from "../components/PaymentData";
import "../sass/donate.scss"
import dataOngs from "../database/ongs"

const Donate = () => {
    const [selected, setSelected] = useState(null);
    const url = useLocation();
    const [ongs, setOngs] = useState([]);
    dataOngs.then((data) => {
        setOngs(data);
    });
    
    return (
        <div className="donate">
            <BreadCrumb items={url}/>
            <div className="donate-main">
                <h2>Doações</h2>
                <p>Lista de ONGS:</p>
                <select name="" id="" onChange={(e) => {setSelected(e.target.value)}}>
                    <option value={null} disabled selected>Selecione uma ONG</option>
                    {
                        ongs.map((ong, index) => {
                            return (
                                ong.paymentData ? (<option value={index}>{ong.name}</option>) : null
                            )
                        })
                    }
                </select>
                <PaymentData ong={ongs[selected].paymentData}/>
            </div>
        </div>
    );
    }

export default Donate;