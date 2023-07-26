import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import "../css/style.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import ProductService from '../services/productService';
export default function RecommendedProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data))
    }, [])

    return (

        <Container  >
            <Swiper spaceBetween={20} slidesPerView={5} navigation={true} modules={[Navigation]}>

                {
                    products.map(products => (
                        <SwiperSlide >
                            <Button href={`/products/${products.urunId}`}>
                                <Card
                                    className='zoom' sx={{
                                        maxWidth: 222, height: 377, borderRadius: '6px', border: '1px solid rgb(229, 229, 229)'
                                    }}>
                                    <CardMedia
                                        sx={{ borderRadius: '6px', marginBottom: '10px', marginTop: '10px', marginRight: '35px', marginLeft: '35px', height: 222, width: '150px' }}
                                        image={products.urunResmi}
                                        title={products.urunAdi}
                                    />
                                    <CardContent sx={{ height: 160, padding: '8px' }}>
                                        <Typography variant='h3' sx={{ marginBottom: '10px', fontSize: '12px', fontWeight: '600px', lineHeight: '16px' }}>
                                            {products.urunAdi}
                                        </Typography>
                                        <Typography sx={{ color: 'rgba(148, 189, 170, 1)', fontSize: '14.5px', fontWeight: 900, lineHeight: '20px' }}>
                                            {products.birimFiyati} TL
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Button>
                        </SwiperSlide>
                    ))
                }



            </Swiper>

        </Container>

    )
}
