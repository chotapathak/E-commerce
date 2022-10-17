import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div>
      <div className="hero-banner-container">
        <div>
          {/* {console.log(heroBanner)} */}
          <p className='beats-solo'>{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <img src={urlFor(heroBanner.image)} alt='headphones'
          className='hero-banner-image' />

          <div>
            <Link href="/product/ID">
              <button type='button'>{heroBanner.buttonText}</button>
            </Link> 
            <div className='desc'>
                <h5>{heroBanner.desc}</h5>
                <p>DESCRIPTION</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner