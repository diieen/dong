import { X } from 'phosphor-react';
import UserIcon from '../assets/images/user-icon.svg';

const LoginModal = (props) => {
    const {setIsOpen, setLoginType} = props;
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
            </div>
            <div className="login-content-3">
                <form action="" className='form-login'>
                    <input type="email" className="input login-email" placeholder='Ex: teste@gmail.com' required/>
                    <input type="password" className="input login-senha" placeholder='Senha' required/>
                    <a href="" className="link-login">Esqueci minha senha </a>
                    <button type="submit" className="btn-login">Entrar</button>
                </form>
            </div>
            <div className="login-content-4" onClick={() => {setLoginType(false)}}>
                <p>Casdastre-se</p>
            </div>
        </div>
    );
}

export default LoginModal;