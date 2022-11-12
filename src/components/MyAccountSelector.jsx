import { useState } from "react";
import Address from "./MyAccount/Address";
import Awards from "./MyAccount/Awards";
import ChangePassword from "./MyAccount/ChangePassword";
import PersonalData from "./MyAccount/PersonalData";

const MyAccountSelector = (props) => {
    const { user } = props;
    const [type, setType] = useState(1);
    // 1- Personal Data   2- Address   3- Awards   4- Change Password

    return (
        <div className="flex links-container">
            <div className="my-account-links">
                <div onClick={() => {setType(1)}}>
                    <p className={`${type == 1 ? "link-selected" : ""}`}>Dados Pessoais</p>
                </div>
                <div onClick={() => {setType(2)}}>
                    <p className={`${type == 2 ? "link-selected" : ""}`}>Endereços</p>
                </div>
                <div onClick={() => {setType(3)}}>
                    <p className={`${type == 3 ? "link-selected" : ""}`}>Pontuação e premios</p>
                </div>
                <div onClick={() => {setType(4)}}>
                    <p className={`${type == 4 ? "link-selected" : ""}`}>Trocar a senha</p>
                </div>
                <div onClick={() => {
                    localStorage.removeItem("logged");
                    localStorage.removeItem("user");
                    window.location.reload(true);
                    window.location.href = "/";
                }}>
                    <p>Sair</p>
                </div>
            </div>
            <div>
                {type === 1 && <PersonalData user={user}/>}
                {type === 2 && <Address user={user}/>}
                {type === 3 && <Awards user={user}/>}
                {type === 4 && <ChangePassword user={user}/>}
            </div>
        </div>
    )
}

export default MyAccountSelector;