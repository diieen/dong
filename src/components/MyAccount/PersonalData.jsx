import { useState } from "react";

const PersonalData = (props) => {
    const { user } = props;
    const [isEditabled, setIsEditabled] = useState(false);

    return (
        <div className="">
            {isEditabled
                ?
                <>
                    <h3>DADOS PESSOAIS</h3>
                    <p>E-mail</p>
                    <span>{user?.email}</span>
                    <p>Nome:</p>
                    <span>{user?.name}</span>
                    <p>Telefone:</p>
                    <span>{user?.phone}</span>
                    <p>CPF</p>
                    <span>{user?.cpf}</span>
                </>
                :
                <>
                    <h3>DADOS PESSOAIS</h3>
                    <input type="text"/>
                    <span>{user?.email}</span>
                    <input type="text"/>
                    <span>{user?.name}</span>
                    <input type="text"/>
                    <span>{user?.phone}</span>
                    <input type="text"/>
                    <span>{user?.cpf}</span>
                </>
            }
            <button onClick={() => {setIsEditabled(!isEditabled)}}>aaaaaa</button>
        </div>
    )
}

export default PersonalData;