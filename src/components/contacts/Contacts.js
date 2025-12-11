import './contacts.scss';

import mapContacts from '../../images/map.png'

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="container">
                <h1 className="contacts__h1">Contacts</h1>
                <div className="contacts__line"></div>
                <div className="contacts__map">
                    <div className="contacts__map-info">
                        <h3 className="contacts__map-h3">Palais Royal Musee du Louvre</h3>
                        <div className="contacts__map-info-text">
                            <p className="contacts__map-text">address: 75001 Paris, France</p>
                            <p className="contacts__map-text">phone: +33(0) 1 40 20 50 50</p>
                            <p className="contacts__map-text">mail: info@louvre.fr</p>
                        </div>
                    </div>
                    <img src={mapContacts} alt="map" />
                </div>
            </div>
        </div>
    )
}

export default Contacts;