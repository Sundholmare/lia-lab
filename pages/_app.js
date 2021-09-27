import '../styles/globals.css'
import { useState } from 'react';
import { PersonProvider } from 'context/index';

function MyApp({ Component, pageProps }) {

  return (
    <PersonProvider>
      <Component {...pageProps} />
    </PersonProvider>)
}

export default MyApp
