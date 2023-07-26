import React from 'react'
import { Typography } from '@mui/material'
import RecommendedProducts from '../layouts/RecommendedProducts'
import Kategory from '../components/Kategory'
import SwiperSlider from '../components/SwiperSlider'
import Topsales from './Topsales'
import Footer from './Footer'

export default function Home() {
  return (<>
    <SwiperSlider />
    <Kategory />
    <Typography sx={{ marginBottom: '30px', marginTop: '40px', textAlign: 'center', color: '#67767b', fontSize: '25px' }} variant='h4'>
      En Çok Satanlar
    </Typography>
    <Topsales />

    <Typography sx={{ marginBottom: '30px', marginTop: '40px', textAlign: 'center', color: '#67767b', fontSize: '25px' }} variant='h4'>
      Önerilen Ürünler
    </Typography>
    <RecommendedProducts />
    <Footer />


  </>
  )
}
