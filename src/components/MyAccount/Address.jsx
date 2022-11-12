import Star from "../../assets/svg/Star.svg";
import StarSelected from "../../assets/svg/StarSelected.svg";
import Trash from "../../assets/svg/Trash.svg";
import Pencil from "../../assets/svg/Pencil.svg";

const Address = (props) => {
    const { user } = props;
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
                                    <img src={Star} alt="" />
                                    <img src={StarSelected} alt="" />
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