import React, { useContext } from 'react';
import Container from '../../organisms/container';
import OrderList from '../../organisms/orderList';
import { WishlistContext } from '../../context/whishilist.context';

const Ships = () => {
  const { recordsCar } = useContext(WishlistContext)
  const ships = recordsCar.filter((order) => { 
    if(order.type === 'ships'){
      return order
    }
  })
  return (
    <Container>
      <OrderList orders={ships} />
    </Container>
  )
}
export default Ships;

