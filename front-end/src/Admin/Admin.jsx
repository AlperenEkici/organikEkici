import { Container } from '@mui/material'
import React from 'react'
import ProductAdd from './ProductAdd'
import ProductSelect from './ProductSelect'

export default function Admin() {
  return (
    <Container sx={{alignItems:'center',marginTop:'10px'}}>
        
        <ProductAdd />
        <ProductSelect/>
    </Container>
  )
}
