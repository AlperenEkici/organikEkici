import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../layouts/Home';
import Login from '../layouts/Login';
import Signup from '../layouts/Signup';
import CartDetail from '../layouts/CartDetail';
import { Button } from '@mui/material';
import Admin from '../Admin/Admin';
import Product from '../Admin/Product';
import ProductDetail from '../layouts/ProductDetail';
import CategorysList from '../layouts/CategorysList';


export default function Dashboard() {
  return (<>
    <Button href='/admin' color="error">Admin Paneli</Button>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/giriş' element={<Login />} />
        <Route path='/kayıt' element={<Signup />} />
        <Route path='/sepetdetayı' element={<CartDetail />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/product' element={<Product />} />
        <Route path='/products/:urunId' element={<ProductDetail />} />
        <Route path='/kategoriler/:kategoriId' element={<CategorysList />} />
      </Routes>
    </BrowserRouter>

  </>

  )
}
