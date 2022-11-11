import { useEffect, useState } from 'react';
import UserIcon from '../assets/svg/UserIcon';
import LogoDong from '../assets/images/logo-dong.svg';
import RegisterModal from "../components/RegisterModal";
import Modal from "../components/Modal";
import getUsers from '../database/users';
import LoginModal from "../components/LoginModal";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loginType, setLoginType] = useState(true);
    const [user, setUser] = useState();

    const saveUser = () => {
        getUsers.then((data) => {
            let users = data.find((user) => user.email === localStorage.user);
            if (users) {
                setUser(users)
            }
        });
    }

    useEffect(() => {
        localStorage.user ?
        saveUser()
        : null
    },[isOpen])

    return (
        <header className="header">
            <Modal isOpen={isOpen}>
                {
                    loginType ? <LoginModal setIsOpen={setIsOpen} setLoginType={setLoginType} /> : <RegisterModal setIsOpen={setIsOpen} setLoginType={setLoginType} />
                }
            </Modal>
            <div className='header-container justify-between'>
                <a href="/reportar-abandono" className='title-header'>Reportar abandono </a>
                <a href="/doacao" className='title-header'>Doações</a>
                <a href="/ong" className='title-header'>Ongs</a>
            </div>
            <div className='header-container justify-center'>
                <a href="/">
                    <img src={LogoDong} alt="" />
                </a>
            </div>
            {user 
            ?
            <div className='header-container flex-end gap-10'>
                <div className='flex gap-10 cursor-pointer align-center' onClick={() => {
                }}>
                    <UserIcon/>
                    <p className='title-header'>{user.name}</p>
                </div>
                <div className='flex cursor-pointer' onClick={() => {
                    localStorage.removeItem('user');
                    localStorage.removeItem('logged');
                    window.location.reload(true);
                }}>
                    <p className='title-header title-header-2'>(Sair)</p>
                </div>
            </div>
            : 
            <div className='header-container flex-end gap-10'>
                <div className='flex gap-10 cursor-pointer align-center' onClick={() => {
                    setIsOpen(true);
                    setLoginType(true);
                }}>
                    <UserIcon/>
                    <p className='title-header'>LOGIN</p>

                </div>
                <div className='flex cursor-pointer' onClick={() => {
                    setIsOpen(true);
                    setLoginType(false);
                }}>
                    <p className='title-header'>CADASTRE-SE</p>
                </div>
            </div>
            }
            
        </header>
    );
}

export default Header;