import React, { useContext } from 'react';
import Container from '../../organisms/container';
import OrderList from '../../organisms/orderList';
import { WishlistContext } from '../../context/whishilist.context';

const Sodas = () => {
  const { recordsCar } = useContext(WishlistContext);
  const soda = recordsCar.filter((order) => { 
    if(order.type === 'soda'){
      return order
    }
  })

  return (
    <Container>
      <OrderList orders={soda} />
    </Container>
  )
}
export default Sodas;

