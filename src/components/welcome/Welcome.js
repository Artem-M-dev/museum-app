import './welcome.scss';
import Frame from '../../icons/Frame.svg';
import Mona from '../../images/mona.png';
import Left from '../../icons/left.svg';
import Right from '../../icons/right.svg';



const Welcome = () => {
    return (
        <div className="welcome">
            <div className="container">
                <div className="welcome__head">
                    <div className="welcome__head-elements">
                        <img src={Frame} alt="frame" />
                        <p>Louvre</p>
                    </div>
                    <ul className="welcome__text">
                        <a href="#">Visiting</a>
                        <a href="#">Explore</a>
                        <a href="#">Video</a>
                        <a href="#">Gallery</a>
                        <a href="#">Tickets</a>
                        <a href="#">Contacts</a>
                    </ul>
                </div>
                <div className="welcome__content">
                    <div className="welcome__content-wrapper">
                        <div className="welcome__content-info">
                            <h1 className="welcome__content-h1">Welcome</h1>
                            <h1 className="welcome__content-h1">to the Louvre</h1>
                            <p className="welcome__content-text">From the castle to the museum</p>
                            <button className="welcome__content-btn">Discover the Louvre</button>
                        </div>
                        <img className="welcome__content-img" src={Mona} alt="mona" />
                    </div>

                    <div className="welcome__pagination">
                        <p className="welcome__pagination-text">01 | 05</p>
                        <ul>
                            <a className="welcome__pagination-square welcome__pagination-square-active"></a>
                            <a className="welcome__pagination-square"></a>
                            <a className="welcome__pagination-square"></a>
                            <a className="welcome__pagination-square"></a>
                            <a className="welcome__pagination-square"></a>
                        </ul>
                        <div className="welcome__pagination-arrows">
                            <a href="#"><img className="welcome__pagination-arrow" src={Left} alt="arrow" /></a>
                            <a href="#"><img className="welcome__pagination-arrow" src={Right} alt="arrow" /></a>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome