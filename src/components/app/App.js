import './App.scss';
import '../../sass/modern-normalize.min.css';
import '../../sass/basic.scss'

import Welcome from '../welcome/Welcome';
import Tour from '../tour/Tour';
import Picture from '../../picture/Picture';
import VideoJourney from '../videoJourney/VideoJourney';
import Gallery from '../gallery/Gallery';
import Tickets from '../tickets/Tickets';
import Contacts from '../contacts/Contacts';
import Footer from '../footer/Footer';
import Payment from '../payment/Payment';

function App() {
  return (
    <>
      <Welcome/>
      <Tour/>
      <Picture/>
      <VideoJourney/>
      <Gallery/>
      <Tickets/>
      <Contacts/>
      <Footer/>
      {/* <Payment/> */}
    </>
  );
} 

export default App;
