import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Display from '../../atoms/display'

const ListItems = ({item}) =>{
  return(
  <ListItemButton>
    <ListItemText primary={item.productName} />
    <Display item={item} />
  </ListItemButton>
  )
}
export default ListItems;