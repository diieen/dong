const ChangePassword = (props) => {
    return (
        <div>
            <h3>TROCAR SENHA</h3>
            <div className="">
                <input type="password" placeholder="Nova Senha" required/>
                <input type="password" placeholder="Confirmar Senha" required/>
                <button type="submit">ATUALIZAR</button>
            </div>
        </div>
    )
}

export default ChangePassword;