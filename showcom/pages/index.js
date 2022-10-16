// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import MyApp from './_app'
import React from 'react'
import {Footer,Cart,Layout,Banner,NavBar,HeroBanner, Product , FooterBanner} from '../components'

const Home = () => {
  return (
    <>
    <HeroBanner/>
    <div className='products-heading'>
      <h2>Best Selling products</h2>
      <p>Speaker of many variations</p>
    </div>
    
    <div className='products-container'>
      {['Product 1', 'Product 2'].map(
        (product) =>   product)}

    </div>
    <Footer/>
    </>
  )
}

export default Home