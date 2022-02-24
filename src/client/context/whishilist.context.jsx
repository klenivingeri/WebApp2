import { createContext, useState } from 'react'
import AllProductList from '../../api/AllProductList.json'

const { records } = AllProductList
export const WishlistContext = createContext({})
export const WishlistContextProvider = ({ children, ...rest }) => {

  const [recordsCar, setRecordsCar] = useState(records.orders)
  let carrinho = []
  function addItem(id) {
    const orders = recordsCar.map((order) => {
      if (order.id === id) {
        const quantity = (order.quantity + 25)
        const total = (quantity * order.price)
        return {
          ...order,
          quantity,
          total
        }
      }
      return order
    })
    setRecordsCar(orders)
  }

  function removeCar(id) {
    const orders = recordsCar.map((order) => {
      if (order.id === id) {
        const quantity = order.quantity !== 0 ? (order.quantity - 25) : 0
        const total = (quantity * order.price)
        return {
          ...order,
          quantity,
          total
        }
      }
      return order
    })
    setRecordsCar(orders)
  }

  return (
    <WishlistContext.Provider value={{
      addItem,
      recordsCar,
      removeCar,
      carrinho
    }}>
      {children}
    </WishlistContext.Provider>
  )
}
