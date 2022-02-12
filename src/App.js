import React from 'react';
import Pages from './routes-pages';
import { BrowserRouter } from 'react-router-dom';
import Header from './client/organisms/header'
import Footer from './client/organisms/footer'

function App() {
  return (
    <BrowserRouter>
    <div className="App" >
    <Header />
    <Pages />
    <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;
