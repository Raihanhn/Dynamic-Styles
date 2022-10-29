import React from 'react'
import glass from './glass.css'
import Tilt from 'react-parallax-tilt'
import img from '../../assets/img/pic-4.png'

const Glass = () => {
  return (
    <div className="container">
        <Tilt>
        <div className="card">
            <div className="content">
                <h2>01</h2>
                <h3>Card One</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quam molestias quis nemo accusantium debitis a laudantium in temporibus modi.</p>
                <a href="#">Read More</a>
            </div>
        </div>
        </Tilt>

        <Tilt>
          <div className="card">
            <div className="content">
              <img src={img} alt="" />
                <h1 className='name'>Erika watson</h1>
                <p className='riko'>Front End Developer</p>
                <a href="#">message me</a>
            </div>
          </div>
        </Tilt>

    </div>
  )
}

export default Glass