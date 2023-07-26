import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function ProductList() {


    return (
        <div>
            <Card sx={{ maxWidth: '232', marginTop: '20px', marginRight: '16px', bgcolor: '#eef0f1' }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image="https://www.organikgurmem.com/include/resize.php?path=images/urunler/organik-tam-bugday-unu-800-gr-999_1.webp&width=300"
                    title="un"
                />
                <CardContent>
                    <Typography component="div">
                        Organik Tam Bugday Unuu
                    </Typography>
                    <Typography variant='h6' >
                        50.00TL
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{ bgcolor: '#d5e2e7', color: 'black' }}>Sepete Ekle</Button>
                </CardActions>
            </Card>
        </div>
    )
}
