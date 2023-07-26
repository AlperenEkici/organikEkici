import React from 'react'
import { Button, Typography } from '@mui/material'
export default function ProductDelete() {
  return (<>
        <Typography sx={{marginBottom:'20px'}} variant='h2' color="error">
            Ürün Sil
        </Typography>
        <form >
        <Typography>ürün resmi ve adı</Typography>
      <Button sx={{marginLeft:'50px'}} type="submit" variant="contained" color="primary">
        Sil
      </Button>
    </form> 
    </>
  )
}
