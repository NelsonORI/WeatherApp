import './Home.css'
import Navbar from '../components/Navbar';
import Today from '../components/Today';
import Week from '../components/Week';

function Home(){
    return(
        <div className="Home-Container">
            <Navbar />
            <div className='Weather-Wrapper'>
                <Today/>
                <Week/>
            </div>
        </div>
    )
}

export default Home;