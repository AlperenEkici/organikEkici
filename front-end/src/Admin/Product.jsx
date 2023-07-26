import React from 'react'
import ProductDelete from './ProductDelete'
import ProductUpdate from './ProductUpdate'
import { Container } from '@mui/material'

export default function Product() {
  return (
    <Container sx={{alignItems:'center',marginTop:'10px'}}>
    <ProductDelete/>
    <ProductUpdate/>
    </Container>
  )
}
