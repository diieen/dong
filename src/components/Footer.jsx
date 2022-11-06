import FacebookIcon from '../assets/images/facebook.svg';
import LogoDong from '../assets/images/logo-dong.svg';
import InstagramIcon from '../assets/images/instagram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-content'>
                <div className="flex align-center">
                    <img src={LogoDong} alt="" className='footer-imagem'/>
                    <p className='footer-text'>2022 © Copyright D'ONG</p>
                </div>
                <div className="flex links-footer">
                    <a href=""className='link-footer' >
                        <img src={FacebookIcon} alt=""/>
                    </a>
                    <a href="" className='link-footer'>
                        <img src={InstagramIcon} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;