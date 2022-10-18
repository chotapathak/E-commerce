// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React from 'react'
import {HeroBanner, Product , FooterBanner} from '../components'
import { client } from '../lib/client'

// It getting data from async function getServerSide and getting props to populate
const Home = ({products, bannerData}) => {
  return (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

    <div className='products-heading'>
      <h2>Best Selling products</h2>
      <p>Speaker of many variations</p>
    </div>

     {/* mapping product by name  */}
    <div className='products-container'>
      { products?.map(
          (product) =>   <Product key={product.id} product={product} />)
      }

    </div>
    <FooterBanner  footerBanner={bannerData && bannerData[0]}/>
    </div>
  )
}

// async function
export const getServerSideProps = async () => {

  // filtering items we need to download
  // type is fixed [products] AND product is users query
  const query = '*[_type == "product"]';
  // fetched query data from client server in lib folder
  // to communicate with our sanity backend
  const products = await client.fetch(query);

  // banner data
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // return products and bannerData as props
  return {
    props: {products, bannerData}
  }
}
export default Home
