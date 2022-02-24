import React, {useContext} from 'react';
import { styled } from '@mui/system'
import { Box } from '@mui/material';
import Cart from '../../atoms/icones/cart'
import currency from '../../util/currency'
import { WishlistContext } from '../../context/whishilist.context'

const MyHeader = styled('div')({
  padding: '10px 0px',
  color: '#FFFFFF',
  top: 0,
  position: 'fixed',
  backgroundColor: '#C33C47',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1.2em',
  justifyContent: 'space-around',
  zIndex: 99,
})

const Header = () => {
  const { recordsCar } = useContext(WishlistContext);
  const getTotal = (total, item) => total + item.total
  const total = recordsCar.reduce(getTotal, 0);

  return (
  <MyHeader>
    <Box>Salgados para festa:</Box>
    <Box>{ currency(total) }</Box>
    <Cart />
  </MyHeader>)
}
export default Header;