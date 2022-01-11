import React from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init({
    duration:2000
});

const Landingscreen = () => {
    return (
        <div className='App'>
      
        <div className='row Landing'>
            <div className='col-md-12'>
                <h1 data-aos='flip-left' style={{fontSize:'130px'}}>LMS PROJECT</h1>
                <Link to='/login'>
                <button data-aos='flip-right' className='btn landingbtn'>Get Started</button>
                </Link>

            </div>
            
        </div>
        </div>
    )
}

export default Landingscreen
