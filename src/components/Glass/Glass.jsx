import React from 'react'
import glass from './glass.css'
import Tilt from 'react-parallax-tilt'

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
    </div>
  )
}

export default Glass