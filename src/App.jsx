import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/chechout/Checkout'


function App() {
 
  return (
    
      <ChakraProvider>
       <ContextProvider>
       <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<ItemListContainer title='Pet Shop Nieve'/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer title='Pet Shop Nieve' />} />
          <Route path='/producto/:productId' element={<ItemDetailContainer />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
       </BrowserRouter> 
       </ContextProvider>
      </ChakraProvider>
     
  )
}

export default App