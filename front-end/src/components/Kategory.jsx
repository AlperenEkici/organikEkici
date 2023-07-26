import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import "../css/style.css"
export default function Kategory() {
    return (
        <Container >
            <Typography sx={{ textAlign: 'center', color: '#67767b', fontSize: '25px' }} >
                Popüler Kategoriler
            </Typography>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
                navigation={true} modules={[Navigation]}
            >

                <SwiperSlide >

                    <Button href="/kategoriler/3" sx={{
                        '&:hover': {
                            backgroundColor: 'white'
                        }
                        , marginLeft: '50px', alignItems: 'center'
                    }}>
                        <Card variant='text' >
                            <CardMedia
                                className="yuvarlak "
                                component="img"

                                image="https://static.wixstatic.com/media/1fb098_ad8f4daaded64f23a685fa2137295c46~mv2.png/v1/fill/w_640,h_400,al_c,lg_1,q_85,enc_auto/1fb098_ad8f4daaded64f23a685fa2137295c46~mv2.png"
                                alt="Süt"
                            />
                            <CardContent>
                                <Typography  >
                                    Süt Ürünleri
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>
                </SwiperSlide>


                <SwiperSlide>
                    <Button href="/kategoriler/2" sx={{
                        '&:hover': {
                            backgroundColor: 'white'
                        }
                        , marginLeft: '40px', alignItems: 'center'
                    }}>
                        <Card variant='text' >
                            <CardMedia
                                className="yuvarlak "
                                component="img"

                                image="https://www.californiastrawberries.com/wp-content/uploads/2021/05/Rainbow-Fruit-Salad-1024.jpg"
                                alt="Ozel Beslenme"
                            />
                            <CardContent>
                                <Typography >Taze Meyve</Typography>
                            </CardContent>
                        </Card>
                    </Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Button href="/kategoriler/1" sx={{
                        '&:hover': {
                            backgroundColor: 'white'
                        }
                        , marginLeft: '40px', alignItems: 'center'
                    }}>
                        <Card variant='text' >
                            <CardMedia
                                className="yuvarlak "
                                component="img"

                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNQPSxS6YXW9lzf2us2VnDutvu4zpyes1ZQ&usqp=CAU"
                                alt="Toz"
                            />
                            <CardContent>
                                <Typography >Konserve Gıda</Typography>
                            </CardContent>
                        </Card>
                    </Button>
                </SwiperSlide>

            </Swiper>
        </Container>


    )
}
