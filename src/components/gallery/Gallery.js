import './gallery.scss';

import gallery1 from '../../images/gallery/galery1.png';
import gallery2 from '../../images/gallery/galery2.png';
import gallery3 from '../../images/gallery/galery3.png';
import gallery4 from '../../images/gallery/galery4.png';
import gallery5 from '../../images/gallery/galery5.png';
import gallery6 from '../../images/gallery/galery6.png';
import gallery7 from '../../images/gallery/galery7.png';
import gallery8 from '../../images/gallery/galery8.png';
import gallery9 from '../../images/gallery/galery9.png';
import gallery10 from '../../images/gallery/galery10.png';
import gallery11 from '../../images/gallery/galery11.png';
import gallery12 from '../../images/gallery/galery12.png';
import shadow from '../../images/gallery/shadow.png';

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="container">
                <h1 className="gallery__h1">Art Gallery</h1>
                <div className="gallery__wrapper">
                    <div className="gallery__images">
                        <div className="gallery__images-right">
                            <img src={gallery1} alt="gallery" />
                            <img src={gallery4} alt="gallery" />
                            <img src={gallery7} alt="gallery" />
                            <img src={gallery10} alt="gallery" />
                        </div>
                        <div className="gallery__images-middle">
                            <img src={gallery2} alt="gallery" />
                            <img src={gallery5} alt="gallery" />
                            <img src={gallery8} alt="gallery" />
                            <img src={gallery11} alt="gallery" />
                        </div>
                        <div className="gallery__images-right">
                            <img src={gallery3} alt="gallery" />
                            <img src={gallery6} alt="gallery" />
                            <img src={gallery9} alt="gallery" />
                            <img src={gallery12} alt="gallery" />
                        </div>
                    </div>
                    <img className="gallery__shadow" src={shadow} alt="shadow" />
                </div>
            </div>
        </div>
    )
}

export default Gallery