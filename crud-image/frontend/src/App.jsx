import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/add' element={<ProductForm />} />
          <Route path='/edit/:id' element={<ProductForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}