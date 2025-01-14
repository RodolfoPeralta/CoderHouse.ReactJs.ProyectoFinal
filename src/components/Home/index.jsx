import '../Home/home.css';
import gibson from '../../assets/img/logos/gibson_logo.png';
import fender from '../../assets/img/logos/fender_logo.png';
import epiphone from '../../assets/img/logos/epiphone_logo.png';
import yamaha from '../../assets/img/logos/yamaha_logo.jpg';
import takamine from '../../assets/img/logos/takamine_logo.svg';
import guitarrista from '../../assets/img/guitarrista.webp';

// Component

const Home = () => {
    return(
        <div className='homeContainer'>
            <div className='guitarrist'><img src={guitarrista} alt="" /></div>
            <div className='imgContainer'>
                <div className='items'><img className='item' src={gibson} alt="" /></div>
                <div className='items'><img className='item' src={fender} alt="" /></div>
                <div className='items'><img className='item' src={epiphone} alt="" /></div>
                <div className='items'><img className='item' src={yamaha} alt="" /></div>
                <div className='items'><img className='item' src={takamine} alt="" /></div>
            </div>
        </div>
    )
}

export default Home;