import { X } from 'phosphor-react';
import { useState } from 'react';

import UserIcon from '../assets/images/user-icon.svg';
import getUsers from '../database/users';

const LoginModal = (props) => {
    const {setIsOpen, setLoginType} = props;
    const [wrongPassword, setWrongPassword] = useState(false);

    const login = (e) => {
        e.preventDefault();
        setWrongPassword(false);

        let email= e.target.email.value;
        let password = e.target.password.value;

        getUsers.then((data) => {
            let user = data.find((user) => user.email === email && user.password === password);
            if (user) {
                localStorage.setItem('user', user.email);
                localStorage.setItem('logged', true);
                window.location.reload();
            } else {
                setWrongPassword(true);
            }
        });
    }

    return(
        <div className="container-modal-login">
            <div className='icon-x' onClick={() => {
                setIsOpen(false);
                setLoginType(true);
                }}>
                <X size={40} color="#B87932" />
            </div>
            <div className="login-content-1">
                <img src={UserIcon} alt=""/>
                <span className="content-1-text">ACESSO</span>
            </div>
            <div className="login-content-2">
                <p className="content-2-text">Entrar com e-mail e senha </p>
                { wrongPassword && <span>E-mail ou senha inválidos</span> }
            </div>
            <div className="login-content-3" onSubmit={(e) => login(e)}>
                <form action="" className='form-login'>
                    <input type="email" name="email" className="input login-email" placeholder='Ex: teste@gmail.com' required/>
                    <input type="password" name="password" className="input login-senha" placeholder='Senha' required/>
                    <a href="" className="link-login">Esqueci minha senha </a>
                    <button type="submit" className="btn-login">Entrar</button>
                </form>
            </div>
            <div className="login-content-4" onClick={() => {setLoginType(false)}}>
                <p>Cadastre-se</p>
            </div>
        </div>
    );
}

export default LoginModal;