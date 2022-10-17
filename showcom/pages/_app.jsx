import React from 'react'
import '../styles/globals.css'

//this is new way to accept components and props  
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
// also config the babel 
// use presets: @babel/preset-react to solve jsx and babel error  
export default MyApp
