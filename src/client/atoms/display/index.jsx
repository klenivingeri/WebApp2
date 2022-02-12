import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { WishlistContext } from '../../context/whishilist.context'

const Display = ({ item }) => {
  const { addCar, removeCar } = useContext(WishlistContext)
  const [value, setValue] = useState(0);
  const remove = (price) => {
    if (value < 25) {
      return
    }
    setValue(value - 25);
    removeCar(value - 25, price);
  }

  const add = (price) => {
    setValue(value + 25);
    addCar(value + 25, price);
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <RemoveCircleOutlineIcon fontSize="large" onClick={() => remove(item.price)} />
      <Box sx={{
        width: '68px',
        margin: '0 0 0 -2px',
        fontSize: '30px',
        textAlign: 'center'
      }}>
        {value}
      </Box>
      <AddCircleOutlineIcon fontSize="large" onClick={() => add(item.price)} />
    </Box>
  )
}
export default Display;