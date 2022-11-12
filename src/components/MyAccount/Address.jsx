import Star from "../../assets/svg/Star.svg";
import StarSelected from "../../assets/svg/StarSelected.svg";
import Trash from "../../assets/svg/Trash.svg";
import Pencil from "../../assets/svg/Pencil.svg";
import { useState } from "react";

const Address = (props) => {
    const { user } = props;
    const [star, setStar] = useState(false);
    return (
        <div className="modal-myaccount">
            <h3>ENDEREÇOS</h3>
            <div>
                {user?.Address?.map((address, index) => {
                    return (
                        <div key={index}>
                            <div className="header-address">
                                <p>endereço {index + 1}</p>
                                <div>
                                    {star ?
                                        <div onClick={() => { setStar(false) }}>
                                            <img src={StarSelected} alt="" />
                                        </div>
                                        :
                                        <div onClick={() => { setStar(true) }}>
                                            <img src={Star} alt="" />
                                        </div>
                                    }
                                    <img src={Pencil} alt="" />
                                    <img src={Trash} alt="" />
                                </div>
                            </div>
                            <span>{address.cep} ; {address.street} ; {address.number} ; {address.district} ; {address.city} {address.state}</span>
                        </div>
                    )
                })}
            </div>
            <div className="div-button">
                <button>ADICIONAR</button>
            </div>
        </div>

    )
}

export default Address;