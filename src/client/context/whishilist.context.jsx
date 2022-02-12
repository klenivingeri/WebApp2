import { createContext, useState } from 'react'

export const WishlistContext = createContext({})

export const WishlistContextProvider = ({ children, ...rest }) => {
  const [totalCar, setTotalCar] = useState(0);

  function addCar(value, price) {
    setTotalCar((value * price))
  } 
  function removeCar(value, price){
    if (value === 0) {
      setTotalCar(0)
      return
    }
    setTotalCar((value * price))
  }

  return (

    <WishlistContext.Provider value={{
      addCar,
      removeCar,
      totalCar,
    }}>
      {children}
    </WishlistContext.Provider>
  )

}
