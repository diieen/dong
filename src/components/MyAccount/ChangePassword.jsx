const ChangePassword = (props) => {
    return (
        <div className="modal-myaccount">
            <h3>TROCAR SENHA</h3>
            <div className="password-change">
                <input type="password" placeholder="Nova Senha" className="input" required/>
                <input type="password" placeholder="Confirmar Senha" className="input" required/>
                <button type="submit">ATUALIZAR</button>
            </div>
        </div>
    )
}

export default ChangePassword;