import * as React from 'react';
import { styled } from '@mui/system';

const MyContainer = styled('div')({
  margin: '50px 0px',
})
const Container = ({children}) => {
  return (<MyContainer>{children}</MyContainer>)
}
export default Container;