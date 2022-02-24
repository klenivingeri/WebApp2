import { useContext } from 'react';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { WishlistContext } from '../../context/whishilist.context'

const Display = ({ item }) => {
  const { addItem, removeCar } = useContext(WishlistContext)
  const remove = (id) => {
    removeCar(id)
  }

  const add = (id) => {
    addItem(id)
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <RemoveCircleOutlineIcon fontSize="large" onClick={() => remove(item.id)} />
      <Box sx={{
        width: '68px',
        margin: '0 0 0 -2px',
        fontSize: '30px',
        textAlign: 'center'
      }}>
        {item.quantity}
      </Box>
      <AddCircleOutlineIcon fontSize="large" onClick={() => add(item.id)} />
    </Box>
  )
}
export default Display;