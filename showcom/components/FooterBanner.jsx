import React from 'react'
import Link from 'next/Link'
import {urlFor} from '../lib/client'

const FooterBanner = ({ footerBanner: { discount,
  LargeText, LargeText2, saleTime, smallText, midText, desc, product, buttonText, image }}) => {
  return (
    <div className='footer-banner-container'>
    <div className='banner-desc'>

      <div className='left'>
        <p>{discount}</p>
        <h3>{LargeText}</h3>
        <h3>{LargeText2}</h3>
        <p>{saleTime}</p>
      </div>

      <div className='right'>
      <p>{smallText}</p>
      <h3>{midText}</h3>
      <p>{desc}</p>
      <Link href={`/product/${product}`}>
      <button type='button'>{buttonText}</button>
      </Link>
      </div>

    </div>
    </div>
  )
}

export default FooterBanner
