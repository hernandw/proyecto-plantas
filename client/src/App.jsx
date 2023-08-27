import AppRouter from "./components/AppRouter"

import Footer from "./components/Footer"

import { MyContext } from "./context/MyContext"
import { productos } from './data/getDataProduct'
import Navbar from "./components/NavBar"
import { useState } from "react"

const App = () => {
const [dataProducts, setDataProducts] = useState(productos);
 return (
    <div>
    <MyContext.Provider value={{ dataProducts, setDataProducts }}>
    <Navbar />
    <AppRouter />
    <Footer />
    </MyContext.Provider>
    </div>
  )
}

export default App