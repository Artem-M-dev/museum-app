import './payment.scss';

import choice from '../../icons/payment/choice.svg';
import date from '../../icons/payment/datePayment.svg';
import time from '../../icons/payment/timePayment.svg';
import email from '../../icons/payment/emailPayment.svg';
import logo from '../../icons/payment/logoPayment.svg';
import name from '../../icons/payment/namePayment.svg';
import tel from '../../icons/payment/telPayment.svg';
import ticket from '../../icons/payment/ticketPayment.svg';
import minus from '../../icons/payment/minusPayment.svg';
import plus from '../../icons/payment/plusPayment.svg';

import visa from '../../icons/payment/Visa.svg';
import masterCard from '../../icons/payment/Mastercard.svg';
import checkOutline from '../../icons/payment/checkOutline.svg';
import cardFront from '../../images/payment/cardFront.png';
import cardBack from '../../images/payment/cardBack.png';
import triangle from '../../images/payment/Triangle.png';
import arrowUp from '../../icons/payment/arrowUp.svg';
import arrowDown from '../../icons/payment/arrowDown.svg'

const Payment = () => {
    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__cross">
                    <div className="payment__close"></div>
                </div>
                <div className="payment__info">
                    <div className="payment__header">
                        <img src={logo} alt="logo" />
                        <h1 className="payment__h1">BOOKING TICKETS</h1>
                        <p className="payment__header-text">Tour to Louvre</p>
                        <div className="payment__header-line"></div>
                    </div>
                    <div className="payment__choice">
                        <div className="payment__choice-wrapper">
                            <div className="payment__date">
                                <div className="payment__date-heading">
                                    <img src={date} alt="date" />
                                    <h3>Date</h3>
                                </div>
                                <img src={choice} alt="arrow" />
                            </div>
                            <div className="payment__time">
                                <div className="payment__time-heading">
                                    <img src={time} alt="time" />
                                    <h3>Time</h3>
                                </div>
                                <img src={choice} alt="arrow" />
                            </div>
                        </div>
                        <div className="payment__labels">
                            <label htmlFor="name" className="payment__name">
                                <img src={name} alt="person" />
                                <span>Name</span>
                                <input type="text" for="name" name="name"/> 
                            </label>
                            <label htmlFor="email" className="payment__name">
                                <img src={email} alt="email" />
                                <span>Email</span>
                                <input type="email" for="email" name="email"/> 
                            </label>
                            <label htmlFor="phone" className="payment__name">
                                <img src={tel} alt="phone" />
                                <span>Phone</span>
                                <input type="phone" for="phone" name="phone"/> 
                            </label>
                        </div>
                        <div className="payment__tickets">
                            <div className="payment__ticket">
                                <div className="payment__ticket-heading">
                                    <img src={ticket} alt="ticket" />
                                    <h3>Ticket Type</h3>
                                </div>
                                <img src={choice} alt="arrow" />
                            </div>
                            <div className="payment__ticket-entry">
                                <p className="payment__ticket-entry-heading">Entry ticket</p>
                                <div className="payment__ticket-entry-line"></div>
                                <div style={{marginTop: 15, alignItems: 'center'}} className="payment__ticket-entry-basic">
                                    <p className="payment__ticket-entry-price">Basic 18+ (20 €)</p>
                                    <div className="payment__ticket-entry-count">
                                        <button><img className="payment__ticket-entry-count-minus" src={minus} alt="minus" /></button>
                                        <p>2</p>
                                        <button><img className="payment__ticket-entry-count-plus" src={plus} alt="plus" /></button>
                                    </div>
                                </div>
                                <div style={{marginTop: 18, alignItems: 'center'}} className="payment__ticket-entry-basic">
                                    <p className="payment__ticket-entry-price">Senior 65+ (10 €)</p>
                                    <div className="payment__ticket-entry-count">
                                        <button><img className="payment__ticket-entry-count-minus" src={minus} alt="minus" /></button>
                                        <p>2</p>
                                        <button><img className="payment__ticket-entry-count-plus" src={plus} alt="plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="payment__purchase">
                    <div className="payment__purchase-info">
                        <img className="payment__purchase-info-img" src={triangle} alt="triangle" />
                        <h3 className="payment__purchase-info-h3">Overview</h3>
                        <p className="payment__purchase-info-undertext">Tour to Louvre</p>
                        <div className="payment__purchase-info-icons">
                            <div className="payment__purchase-info-icon">
                                <img src={date} alt="date" />
                                <p>Friday, August 19</p>
                            </div>
                            <div className="payment__purchase-info-icon">
                                <img src={time} alt="time" />
                                <p>16 : 30</p>
                            </div>
                            <div className="payment__purchase-info-icon">
                                <img src={checkOutline} alt="checkOutline" />
                                <p>Temporary exhibition</p>
                            </div>
                        </div>
                        <div className="payment__purchase-info-prices">
                            <div className="payment__purchase-info-price">
                                <div className="payment__purchase-info-price-wrapper">
                                    <div className="payment__purchase-info-price-count">2</div>
                                    <p className="payment__purchase-info-price-parameter">Basic (20 €)</p>
                                </div>
                                <p className="payment__purchase-info-price-result">40 €</p>
                            </div>
                            <div style={{marginTop: 5}} className="payment__purchase-info-price">
                                <div className="payment__purchase-info-price-wrapper">
                                    <div className="payment__purchase-info-price-count">2</div>
                                    <p className="payment__purchase-info-price-parameter">Senior (10 €)</p>
                                </div>
                                <p className="payment__purchase-info-price-result">20 €</p>
                            </div>
                        </div>
                        <div className="payment__purchase-info-line"></div>
                    </div>

                    <div className="payment__purchase-total">
                        <div className="payment__purchase-total-result">
                            <p className="payment__purchase-total-result-text">Total:</p>
                            <p className="payment__purchase-total-result-price">60 €</p>
                        </div>
                        <div className="payment__purchase-cards">
                            <div className="payment__purchase-cards-front">
                                <img src={cardFront} alt="cardFront" />
                                <div className="payment__purchase-cards-front-wrapper">
                                    <div className="payment__purchase-cards-front-inner">
                                        <div className="payment__purchase-cards-front-images">
                                            <img src={visa} alt="visa" />
                                            <img style={{marginTop: 15}} src={masterCard} alt="masterCard" />
                                        </div>
                                        <div className="payment__purchase-cards-front-dates">
                                            <p style={{marginTop: 15}}>Card number</p>
                                            <label htmlFor="buy">
                                                <input id="input-dates" type="text" for="buy" name="buy"/>
                                            </label>
                                            <p>Expiration date</p>
                                            <div className="payment__purchase-cards-front-dates-btns">
                                                <div className="payment__purchase-cards-front-dates-btn">
                                                    <div style={{paddingRight: 42}}>03</div>
                                                    <button>
                                                        <img src={arrowUp} alt="arrow" />
                                                        <img src={arrowDown} alt="arrow" />
                                                    </button>
                                                </div>
                                                <div className="payment__purchase-cards-front-dates-btn">
                                                    <div style={{paddingRight: 23}}>2025</div>
                                                    <button>
                                                        <img src={arrowUp} alt="arrow" />
                                                        <img src={arrowDown} alt="arrow" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Cardholder name</p>
                                        <label htmlFor="name">
                                            <input id="cardholder" type="text" name="name" for="name"/>
                                        </label> 
                                    </div>
                                </div>
                            </div>
                            <div className="payment__purchase-cards-back">
                                <img src={cardBack} alt="cardBack" />
                                <div className="payment__purchase-cards-back-inner">
                                    <div className="payment__purchase-cards-back-line"></div>
                                    <div className="payment__purchase-cards-back-wrapper">
                                        <p id="cvc">CVC/CVV</p>
                                        <label htmlFor="cvc">
                                            <input type="text" name="pay" for="cvc"/>
                                        </label>
                                        <p>The last <br />
                                            3 or 4 digits <br />
                                            on back <br />
                                            of the card</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="payment__purchase-btn">Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;