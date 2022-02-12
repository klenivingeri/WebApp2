import { Routes, Route } from 'react-router-dom';
import Home from './client/pages/Home';
import Ships from './client/pages/Ships';
import Sodas from './client/pages/Sodas';
import Checkout from './client/pages/Checkout';
import Form from './client/pages/Form';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" exact="true" element={<Home />} />
      <Route path="/page/Ships" element={<Ships/>} />
      <Route path="/page/Sodas" element={<Sodas/>} />
      <Route path="/page/Checkout" element={<Checkout />} />
      <Route path="/page/Form" element={<Form />} />
    </Routes>
  )
}
export default Pages;