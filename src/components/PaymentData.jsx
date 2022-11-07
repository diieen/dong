const PaymentData = (props) => {
    const { ong } = props;
    
    //console.log(ong);
    return (
        <div>
            <p>PIX:</p>
            <p>{ong.pix}</p>
            <p>Copiar chave pix</p>
            <p>DADOS BANCARIOS:</p>
            <p>Agencia: {ong.AG}</p>
            <p>Conta: {ong.CC}</p>
        </div>
    );
};

export default PaymentData;