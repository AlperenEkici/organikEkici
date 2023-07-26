import { Button, Typography } from '@mui/material'
import React from 'react'

export default function ProductUpdate() {
  return (<>
    <Typography sx={{marginBottom:'20px'}} variant='h2' color="error">
            Ürün Güncelle
        </Typography>
        <form >
      <Typography>ürün resmi ve adı</Typography>
      <Button sx={{marginLeft:'50px'}} type="submit" variant="contained" color="primary">
        Güncelle
      </Button>
    </form>
    </>
  )
}
