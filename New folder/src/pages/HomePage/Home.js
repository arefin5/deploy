import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from '../../images/home.png';

const Home = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-8 text-center' style={{padding:"60px 0"}}>
              <div>
                <img src={HomeImage} alt="quiz app" />
              </div>
                {/* <h2>Everything is fine. Now Remember Each Question has 1 min</h2> */}
            
            </div>
        </div>
    </div>
  )
}

export default Home