import AllProductList from '../../../api/AllProductList.json'
import Container from '../../organisms/container'
import OrderList from '../../organisms/orderList'
const { records } = AllProductList

const Sodas = () => {
  return (
    <Container>
      <OrderList orders={records.soda} />
    </Container>
  )
}
export default Sodas;

