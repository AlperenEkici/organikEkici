import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../css/style.css"
import AdetArttirmaAzaltma from '../components/AdetArttirmaAzaltma';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SnackBar from '../components/SnackBar';
import { useParams } from 'react-router-dom';
import ProductService from '../services/productService';

export default function ProductDetail() {
  let { urunId } = useParams();

  const [product, setProduct] = useState({})

  useEffect(() => {
    let productService = new ProductService()
    productService.getByUrunId(urunId).then(result => setProduct(result.data))
  })


  return (
    <Container >
      <Box sx={{ marginBottom: '20px' }}>
        <Link href='/' sx={{ textDecoration: 'none' }}> Anasayfa</Link> <ArrowForwardIosIcon fontSize={'5px'} sx={{ marginBottom: '-3px' }} /><Link href={'/kategoriler/'+product.kategoriId} sx={{ textDecoration: 'none' }}>Ürünler</Link>
      </Box>
      <Box sx={{ borderRadius: '6px', border: '1px solid rgb(229, 229, 229)' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
            <img className='image' src={product.urunResmi} alt="s" />
          </Grid>

          <Grid item xs={6} >
            <Typography sx={{ marginTop: '30px', fontWeight: '600', fontSize: '18px' }}>
              {product.urunAdi}
            </Typography>
            <Typography sx={{ marginTop: '20px', marginBottom: '20px', fontSize: '20px' }}>
              {product.birimFiyati} TL
            </Typography>
            <Box display={'inline-flex'}>
              <AdetArttirmaAzaltma />

              <SnackBar />
            </Box>
            <Typography sx={{ marginBottom: '20px', fontWeight: '500', fontSize: '18px', textDecoration: 'underline' }}>
              Ürün Açıklaması
            </Typography>

            <Typography>
              {product.urunAçiklamasi}

            </Typography>
            <Typography sx={{ marginTop: '20px', color: 'green', fontSize: '18px' }}>
              Tam Agzınıza Layık Saglını Düşünenler İçin
            </Typography>


          </Grid>

        </Grid>
      </Box>
    </Container>

  )
}
