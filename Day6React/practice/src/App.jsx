import React from 'react'
import Hotel from './Hotel'
import MarketStock from './MarketStock'
import styles from './h2.module.css'
const App = () => {


//   LISTS AND KEYS
 
// Create a component - Restaurant - restaurants ---- [
//     {
//         id: ,
//         name: "",
//         cuisine: "",
//         rating: "",
//         eta: "",
//         image: "",
//         isOpen: 
//     }
// ]
 
 
// Display the data using RestaurantCard



 
  return (
    <>
      <MarketStock/>
      <h2 className='subheading'>External Css</h2>
      <h2 className='inline' style={{ color: "yellow", fontSize: "30px", textAlign: "center" }}>Inline Css</h2>
      <h2 className={styles.modular}>Modular Css</h2>
    </>
  )
}

export default App
