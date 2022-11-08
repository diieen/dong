const PaymentData = (props) => {
    const { ong } = props;
    
    console.log(ong, "ong");
    return (
        <div>
            <p>PIX:</p>
            <p>{ong.paymentData.pix}</p>
            <p>Copiar chave pix</p>
            <p>DADOS BANCARIOS:</p>
            <p>Agencia: {ong.paymentData.AG}</p>
            <p>Conta: {ong.paymentData.CC}</p>
        </div>
    );
};

export default PaymentData;