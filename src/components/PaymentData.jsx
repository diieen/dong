import { CopySimple } from "phosphor-react";
import { useEffect, useState } from "react";

const PaymentData = (props) => {
    const { ong } = props;
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(ong.pix);
        setCopied(true);
    }

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [copied]);
    
    console.log(ong, "ong");
    return (
        <div className="payment-data-conteiner">
            <p className="pix">PIX:</p>
            <div>
                <p className="pix-2">{ong.pix}</p>
                <div className="pix-3">
                    <p onClick={copyToClipboard}>{copied ? "Chave copiada" : "Copiar chave pix"}</p>
                    <CopySimple size={14} color="#38250F" />
                </div>
            </div>
            <div className="bank-conteiner">
                <p className="bank">DADOS BANCARIOS:</p>
                <p>{ong.bank}</p>
                <p className="bank-ag">Agencia: {ong.AG}</p>
                <p className="bank-cc">Conta: {ong.CC}</p>
            </div>
        </div>
    );
};

export default PaymentData;