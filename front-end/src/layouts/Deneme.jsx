import React, { useEffect, useState } from 'react'
import ProductService from '../services/productService'
import { Input } from '@mui/material'

export default function Deneme() {
    const [urunId, setUrunId] = useState({})
    const [product, setProduct] = useState({})
    useEffect(() => {
        let productService = new ProductService()
        productService.getByUrunId(urunId)
        .then(result => setProduct(result.data))
      },[urunId,product])
    return (
    <div>
        {product.urunAdi}
        <p>
        <Input type='text' value={urunId} onChange={e=>setUrunId(e.target.value)}> giriş</Input>
        </p>
    </div>
  )
}
