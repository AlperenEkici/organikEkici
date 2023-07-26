import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, Link } from '@mui/material';
import "swiper/swiper-bundle.min.css";
import { Autoplay, Pagination } from "swiper";
import "../css/style.css"


export default function SwiperSlider() {

    return (
        <Container sx={{ padding: '40px' }}>
            <Swiper
                style={{
                    "--swiper-pagination-color": "green",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "15px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",

                }}
                modules={[Pagination, Autoplay]}

                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}


                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}




            >
                <SwiperSlide >
                    <Link href='/products/8'>
                        <img style={{ width: "100%", height: '100%' }} src="Images/salca.jpg" alt="Domates Salçası" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/products/16'>
                        <img style={{ width: "100%", height: '100%' }} src="Images/bebek zeytin.jpg" alt="Bebe Zeytin"></img>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </Container>
    )
}
