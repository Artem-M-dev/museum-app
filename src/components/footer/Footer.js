import './footer.scss';

import facebook from '../../icons/footer/facebookFooter.svg';
import instagram from '../../icons/footer/instagram.svg';
import pinterest from '../../icons/footer/pinterest.svg';
import twitter from '../../icons/footer/twitter.svg';
import youtube from '../../icons/footer/youtube.svg';
import logo from '../../icons/Frame.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__up">
                    <div className="footer__logo">
                        <img src={logo} alt="logo" />
                        <p className="footer__logo-text">Louvre</p>
                    </div>
                    <div className="footer__contacts">
                        <div className="footer__contacts-left">
                            <a href="">Visiting</a>
                            <a href="">Explore</a>
                            <a href="">Video</a>
                        </div>
                        <div className="footer__contacts-right">
                            <a href="">Gallery</a>
                            <a href="">Tickets</a>
                            <a href="">Contacts</a>
                        </div>
                    </div>
                    <div className="footer__messagers">
                        <div className="footer__messager">
                            <a href=""><img src={youtube} alt="youtube" /></a>
                        </div>
                        <div className="footer__messager">
                            <a href=""><img src={instagram} alt="instagram" /></a>
                        </div>
                        <div className="footer__messager">
                            <a href=""><img src={facebook} alt="facebookFooter" /></a>
                        </div>
                        <div className="footer__messager">
                            <a href=""><img src={twitter} alt="twitter" /></a>
                        </div>
                        <div className="footer__messager">
                            <a href=""><img src={pinterest} alt="pinterest" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__line"></div>
            <div className="container">
                <div className="footer__bottom">
                    <p className="footer__end">© 2021</p>
                    <p className="footer__end">The Rolling Scopes School</p>
                    <p className="footer__end">Username</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;