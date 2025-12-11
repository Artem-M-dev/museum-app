import './picture.scss';
import PictureImg from '../images/picture.png';
import Line from '../icons/PictureLine.svg'

const Picture = () => {
    return (
        <div className="picture">
            <div className="container">
                <div className="picture__wrapper">
                    <div className="picture__content">
                        <h1 className="picture__h1">Picture explore</h1>
                        <div className="picture__line"></div>
                        <div className="picture__description">
                            <p className="picture__text">Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.</p>
                            <p className="picture__text">It was cleaned in 1984 to remove a <span>"yellow veil"</span> of dust that had gathered since the previous restoration in the 19th century.</p>
                            <p className="picture__text">The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.</p>
                        </div>
                    </div>
                    <div className="picture__images">
                        <img src={PictureImg} alt="peoples" />
                        <img className="picture__icon" src={Line} alt="line" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Picture