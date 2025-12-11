import './tickets.scss';

import ticketsImg from '../../images/ticketsImg.png';
import parallax from '../../images/parallax.png'

const Tickets = () => {
    return (
        <div className="tickets">
            <div className="container">
                <h1 className="tickets__h1">BUY TICKETS</h1>
                <div className="tickets__line"></div>
                <div className="tickets__buy">
                    <img src={ticketsImg} alt="preview" />
                    <div className="tickets__payment"> 
                        <div className="tickets__payment-type">
                            <h3 className="tickets__payment-type-h3">Ticket Type</h3>
                            <div className="tickets__payment-labels">
                                <label className="tickets__payment-label" htmlFor="textPayment">
                                    <input type="radio" for="textPayment" name="text"/>
                                    <span className="tickets__payment-inputText">Permanent exhibition</span>
                                </label>
                                <label className="tickets__payment-label" htmlFor="textPayment">
                                    <input type="radio" for="textPayment" name="text"/>
                                    <span className="tickets__payment-inputText">Temporary exhibition</span>
                                </label>
                                <label className="tickets__payment-label" htmlFor="textPayment">
                                    <input type="radio" for="textPayment" name="text"/>
                                    <span className="tickets__payment-inputText">Combined Admission</span>
                                </label>
                            </div>
                        </div>
                        <div className="tickets__payment-amount">
                            <h3 className="tickets__payment-amount-h3">Amount</h3>
                            <p className="tickets__payment-amount-text m-25">Basic 18+</p>
                            <div className="tickets__payment-amount-count">
                                <button className="tickets__cursor"><span>–</span></button>
                                <p>1</p>
                                <button className="tickets__cursor"><span>+</span></button>
                            </div>
                            <p className="tickets__payment-amount-text m-10">Senior 65+</p>
                            <div className="tickets__payment-amount-count">
                                <button className="tickets__cursor"><span>–</span></button>
                                <p>1</p>
                                <button className="tickets__cursor"><span>+</span></button>
                            </div>
                            <p className="tickets__payment-amount-total">Total €220</p>
                            <button className="tickets__payment-amount-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <img style={{width: '100%', marginTop: 75}} src={parallax} alt="parallax" />
        </div>
    )
}

export default Tickets