import './tour.scss';
import ColonnadePerrault from '../../images/ColonnadePerrault.jpg';
import DenonWing from '../../images/DenonWing.jpg';
import GreekHall from '../../images/GreekHall.jpg';
import MonaLisa from '../../images/MonaLisa.jpg';
import NightPalace from '../../images/NightPalace.jpg';
import RoyalPalace from '../../images/RoyalPalace.jpg';

const Tour = () => {
    return (
        <div className="tour">
            <div className="container">
                <h1 className="tour__h1">Virtual tour</h1>
                <div className="tour__line"></div>

                <div className="tour__cards">
                    <div className="tour__card">
                        <img className="tour__card-img" src={RoyalPalace} alt="card" />
                        <h2 className="tour__card-h2">Royal Palace</h2>
                        <div className="tour__card-line"></div>
                        <p className="tour__card-text">360° Virtual Tour</p>
                        <p className="tour__card-text tour__card-text-18">Google Street Panorama View</p>
                    </div>
                    <div className="tour__card">
                        <img className="tour__card-img" src={DenonWing} alt="card" />
                        <h2 className="tour__card-h2">Denon Wing</h2>
                        <div className="tour__card-line"></div>
                        <p className="tour__card-text">360° Virtual Tour</p>
                        <p className="tour__card-text tour__card-text-18">Google Street Panorama View</p>
                    </div>
                    <div className="tour__card">
                        <img className="tour__card-img" src={ColonnadePerrault} alt="card" />
                        <h2 className="tour__card-h2">Colonnade Perrault</h2>
                        <div className="tour__card-line"></div>
                        <p className="tour__card-text">360° Virtual Tour</p>
                        <p className="tour__card-text tour__card-text-18">Google Street Panorama View</p>
                    </div>
                    <div className="tour__card">
                        <img className="tour__card-img" src={GreekHall} alt="card" />
                        <h2 className="tour__card-h2">Greek hall</h2>
                        <div className="tour__card-line"></div>
                        <p className="tour__card-text">360° Virtual Tour</p>
                        <p className="tour__card-text tour__card-text-18">Google Street Panorama View</p>
                    </div>
                    <div className="tour__card">
                        <img className="tour__card-img" src={MonaLisa} alt="card" />
                        <h2 className="tour__card-h2">Mona Lisa</h2>
                        <div className="tour__card-line"></div>
                        <p className="tour__card-text">360° Virtual Tour</p>
                        <p className="tour__card-text tour__card-text-18">Google Street Panorama View</p>
                    </div>
                    <div className="tour__card">
                        <img className="tour__card-img" src={NightPalace} alt="card" />
                        <h2 className="tour__card-h2">Night Palace</h2>
                        <div className="tour__card-line"></div>
                        <p className="tour__card-text">360° Virtual Tour</p>
                        <p className="tour__card-text tour__card-text-18">Google Street Panorama View</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tour