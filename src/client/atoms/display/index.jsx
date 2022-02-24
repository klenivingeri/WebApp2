import { useContext } from 'react';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { WishlistContext } from '../../context/whishilist.context'

const Display = ({ item }) => {
  const { addItem, removeCar } = useContext(WishlistContext)
  const remove = (id, type) => {
    removeCar(id, type)
  }

  const add = (id, type) => {
    addItem(id, type)
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <RemoveCircleOutlineIcon fontSize="large" onClick={() => remove(item.id, item.type)} />
      <Box sx={{
        width: '68px',
        margin: '0 0 0 -2px',
        fontSize: '30px',
        textAlign: 'center'
      }}>
        {item.quantity}
      </Box>
      <AddCircleOutlineIcon fontSize="large" onClick={() => add(item.id, item.type)} />
    </Box>
  )
}
export default Display;