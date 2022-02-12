import * as React from 'react';
import { styled } from '@mui/system';
import Navigation from './navigation'

const MyFooter = styled('div')({
  bottom: 0,
  position: 'fixed',
  backgroundColor: '#ff0000',
  width: '100%',
  zIndex: 100,
});

const Footer = () => {
  return (
    <MyFooter>
      <Navigation />
    </MyFooter>

  )
}
export default Footer;