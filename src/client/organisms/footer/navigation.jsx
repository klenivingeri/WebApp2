import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LiquorIcon from '@mui/icons-material/Liquor';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{background:'#f0f0f0' }}
      >
        <BottomNavigationAction 
        component={Link} 
        to="/page/Ships" 
        label="Salgados" 
        icon={<ListAltIcon />} 
        />
        <BottomNavigationAction 
        component={Link} 
        to="/page/Sodas" 
        label="Bebidas" 
        icon={<LiquorIcon />}
        />
        <BottomNavigationAction 
        component={Link} 
        to="/page/Checkout" 
        label="Carrinho" 
        icon={<ShoppingCartRoundedIcon />} 
        />
      </BottomNavigation>
    </Box>
  );
}
