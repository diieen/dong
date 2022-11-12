const Address = (props) => {
    const { user } = props;
    return (
        <div>
            <h3>ENDEREÇOS</h3>
            <div>
            {user?.Address?.map((address, index) => {
                    return (
                        <div key={index}>
                            <p>endereço {index + 1}</p>
                            <span>{address.cep} ; {address.street} ; {address.number} ; {address.district} ; {address.city} {address.state}</span>
                        </div>
                    )
                })}
            </div>
            <button>Adicionar</button>
        </div>

    )
}

export default Address;