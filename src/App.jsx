import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
 
  return (
    
      <ChakraProvider>
       <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Pet Shop Nieve'/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer title='Pet Shop Nieve' />} />
          <Route path='/producto/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
       </BrowserRouter> 
      </ChakraProvider>
     
  )
}

export default App