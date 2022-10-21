import React from 'react'
import '../styles/globals.css'
import {Layout} from '../components';
import {StateContext} from '../context/StateContext'
import {Toaster} from 'react-hot-toast'

//this is new way to accept components and props
function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </StateContext>
)
}
// also config the babel
// use presets: @babel/preset-react to solve jsx and babel error
export default MyApp
