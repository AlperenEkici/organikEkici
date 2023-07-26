import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/productService';
import LeftCategory from '../components/LeftCategory';

export default function CategorysList() {
  let { kategoriId } = useParams();
  const [kategoriler, setKategoriler] = useState([])

  useEffect(() => {
    let productService = new ProductService()
    productService.getByKategoryId(kategoriId).then(result => setKategoriler(result.data))
  })
  return (


    <Container maxWidth={'xl'}>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LeftCategory />

        </Grid>
        
          {
            kategoriler.map(kategoriler => (
              <Grid item xs={2}>
                <Button href={`/products/${kategoriler.urunId}`}>
                  <Card className='zoom' sx={{ maxWidth: 222, height: 377, borderRadius: '6px', border: '1px solid rgb(229, 229, 229)' }}>
                    <CardMedia
                      sx={{ borderRadius: '6px', marginBottom: '10px', marginTop: '10px', marginRight: '35px', marginLeft: '35px', height: 222, width: '150px' }}
                      image={kategoriler.urunResmi}
                      title={kategoriler.urunAdi}
                    />
                    <CardContent sx={{ height: 160, padding: '8px' }}>
                      <Typography variant='h3' sx={{ marginBottom: '10px', fontSize: '12px', fontWeight: '600px', lineHeight: '16px' }}>
                        {kategoriler.urunAdi}
                      </Typography>
                      <Typography sx={{ fontSize: '14px', fontWeight: '700px', lineHeight: '20px' }}>
                        {kategoriler.birimFiyati} TL
                      </Typography>
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
            ))
          }



        
      </Grid>
    </Container>
  )
}
