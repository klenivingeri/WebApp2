import * as React from 'react';
import List from '@mui/material/List';
import ListItems from './listItems';

const OrderList = ({orders}) => {
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {orders.map(order => (<ListItems item={order} key={order.productName} />))}
    </List>
  );
}
export default OrderList;