import React from 'react';
import { styled } from '@mui/system'
import logo from '../../../assets/logo.png';
import CircularProgressWithLabel from '../../molecules/loadding'

const Loadding = styled('div')({
  padding: '10px 0px',
  color: '#FFFFFF',
  top: 0,
  position: 'fixed',
  backgroundColor: '#C33C47',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1.2em',
  flexDirection: 'column',
  justifyContent: 'center',
  zIndex: 999,
})
const Home = () => {
return (<>
  <Loadding >
    <img src={logo}/> 
  <CircularProgressWithLabel />
  </Loadding>
</>)
}
export default Home;