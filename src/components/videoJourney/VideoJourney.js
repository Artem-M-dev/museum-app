import './videoJourney.scss';
import MainVideo from '../../images/journeyMainVideo.png';
import play from '../../icons/journey/play.svg';
import pause from '../../icons/journey/pause.svg'
import longVideo from '../../icons/journey/longVideo.svg';
import volume from '../../icons/journey/volume.svg';
import volumeLine from '../../icons/journey/volumeLine.svg';
import fullscreen from '../../icons/journey/fullscreen.svg';
import poster1 from '../../images/journey/poster1.png';
import poster2 from '../../images/journey/poster2.png';
import poster3 from '../../images/journey/poster3.png';
import ellipse from '../../icons/journey/EllipseMona.svg';
import youtubeIcon from '../../icons/journey/youtubeIcon.svg';
import left from '../../icons/journey/Vector_left.svg'
import right from '../../icons/journey/Vector_right.svg'



const VideoJourney = () => {
    return (
        <div className="journey">
            <div className="container">
                <div className="journey__info">
                    <h1 className="journey__h1">Video journey</h1>
                    <p className="journey__text">Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code</p>
                </div>
                <div className="journey__video">
                    <img style={{width: '100%'}} src={MainVideo} alt="video" />
                    <img src={play} alt="play video" className="journey__video-play" />
                    <div className="journey__video-player">
                        <div className="journey__video-wrapper">
                            <button className="journey__cursor">
                                <img src={pause} alt="pause" className="journey__video-pause" />
                            </button>
                            <button className="journey__cursor">
                                <img src={longVideo} alt="video long" className="journey__video-long" />
                            </button>
                            <button className="journey__cursor">
                                <img src={volume} alt="volume" className="journey__video-volume" />
                            </button>
                            <button className="journey__cursor">
                                <img src={volumeLine} alt="volume line" className="journey__video-volume-bar" />
                            </button>
                            <button className="journey__cursor">
                                <img src={fullscreen} alt="fullscreen" className="journey__video-fullscreen" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="journey__slider">
                    <div className="journey__videos">
                        <div className="journey__video-card">
                            <img className="journey__video-preview" src={poster3} alt="video preview" />
                            <div className="journey__video-card-info">
                                <img className="journey__video-info-avatar" src={ellipse} alt="mona lisa" />
                                <p className="journey__video-card-info-description">Exposition - Le Corps et l’Ame. De Dona...</p>
                                <div className="journey__video-card-info-dots">
                                    <div className="journey__video-card-info-dot"></div>
                                    <div className="journey__video-card-info-dot"></div>
                                    <div className="journey__video-card-info-dot"></div>
                                </div>
                            </div>
                            <img className="journey__video-youtube" src={youtubeIcon} alt="" />
                        </div>
                        <div className="journey__video-card">
                            <img className="journey__video-preview" src={poster1} alt="video preview" />
                            <div className="journey__video-card-info">
                                <img className="journey__video-info-avatar" src={ellipse} alt="mona lisa" />
                                <p className="journey__video-card-info-description">Au Louvre ! La Venus de Milo</p>
                                <div className="journey__video-card-info-dots">
                                    <div className="journey__video-card-info-dot"></div>
                                    <div className="journey__video-card-info-dot"></div>
                                    <div className="journey__video-card-info-dot"></div>
                                </div>
                            </div>
                            <img className="journey__video-youtube" src={youtubeIcon} alt="" />
                        </div>
                        <div className="journey__video-card">
                            <img className="journey__video-preview" src={poster2} alt="video preview" />
                            <div className="journey__video-card-info">
                                <img className="journey__video-info-avatar" src={ellipse} alt="mona lisa" />
                                <p className="journey__video-card-info-description">Promenade dans les collections mesop...</p>
                                <div className="journey__video-card-info-dots">
                                    <div className="journey__video-card-info-dot"></div>
                                    <div className="journey__video-card-info-dot"></div>
                                    <div className="journey__video-card-info-dot"></div>
                                </div>
                            </div>
                            <img className="journey__video-youtube" src={youtubeIcon} alt="" />
                        </div>

                    </div>
                    <div className="journey__pagination">
                        <button className="journey__cursor"><img src={left} alt="left" /></button>
                        <button className="journey__cursor"><div className="journey__pagination-dot journey__pagination-dot-active"></div></button>
                        <button className="journey__cursor"><div className="journey__pagination-dot"></div></button>
                        <button className="journey__cursor"><div className="journey__pagination-dot"></div></button>
                        <button className="journey__cursor"><div className="journey__pagination-dot"></div></button>
                        <button className="journey__cursor"><div className="journey__pagination-dot"></div></button>
                        <button className="journey__cursor"><img src={right} alt="right" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoJourney