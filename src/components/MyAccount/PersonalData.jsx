import { useState } from "react";

const PersonalData = (props) => {
    const { user } = props;
    const [isEditabled, setIsEditabled] = useState(false);

    return (
        <div className="modal-myaccount">
            {isEditabled
                ?
                <div>
                    <h3>DADOS PESSOAIS</h3>
                    <p>E-mail</p>
                    <input type="email" placeholder={user?.email} className="input" required />
                    <p>Nome:</p>
                    <input type="text" placeholder={user?.name} className="input" required />
                    <p>Telefone:</p>
                    <input type="text" placeholder={user?.phone} className="input" required />
                    <p>CPF</p>
                    <input type="text" placeholder={user?.cpf} className="input" required />
                </div>
                :
                <div>
                    <h3>DADOS PESSOAIS</h3>
                    <p>E-mail</p>
                    <span>{user?.email}</span>
                    <p>Nome:</p>
                    <span>{user?.name}</span>
                    <p>Telefone:</p>
                    <span>{user?.phone}</span>
                    <p>CPF</p>
                    <span>{user?.cpf}</span>
                </div>
            }
            {isEditabled
                ?
                <div className="div-button div-button-2">
                    <button onClick={() => setIsEditabled(!isEditabled)}>CANCELAR</button>
                    <button>SALVAR</button>
                </div>
                :
                <div className="div-button">
                    <button onClick={() => setIsEditabled(!isEditabled)}>ATUALIZAR</button>
                </div>
            }

        </div>
    )
}

export default PersonalData;