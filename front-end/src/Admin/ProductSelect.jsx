import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

export default function ProductSelect() {
    return (
        <div>

            <Typography sx={{ marginBottom: '20px' }} variant='h2' color="error">
                Ürünü Seç  (Sil,Güncelle)
            </Typography>
            <form >
                <TextField
                    label="Ürün Adı"

                />
                <Button href="/admin/product" sx={{ marginLeft: '50px' }} type="submit" variant="contained" color="primary">
                    Seç
                </Button>


            </form>
        </div>
    )
}
