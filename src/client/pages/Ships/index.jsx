import AllProductList from '../../../api/AllProductList.json'
import Container from '../../organisms/container'
import OrderList from '../../organisms/orderList'
const { records } = AllProductList

const Ships = () => {
  return (
    <Container>
      <OrderList orders={records.ships} />
    </Container>
  )
}
export default Ships;

