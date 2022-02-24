import React, { useState } from 'react';
import Pages from './routes-pages';
import { BrowserRouter } from 'react-router-dom';
import Header from './client/organisms/header'
import Footer from './client/organisms/footer'
import Home from './client/pages/Home'

function App() {
  const [status, setStatus] = useState(true)
  setTimeout(() => {
    console.log('teste')
    setStatus(false)
  }, 2000);
  return (
    <BrowserRouter>
      <div className="App" >
        {status && <Home />}
        <Header />
        <Pages />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
