import { useState } from 'react';
import UserIcon from '../assets/svg/UserIcon';
import LogoDong from '../assets/images/logo-dong.svg';
import RegisterModal from "../components/RegisterModal";
import Modal from "../components/Modal";
import LoginModal from "../components/LoginModal";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loginType, setLoginType] = useState(true);

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
            <div className='header-container flex-end gap-10'>
                <div className='flex gap-10 cursor-pointer' onClick={() => {
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
        </header>
    );
}

export default Header;