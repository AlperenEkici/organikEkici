import React from 'react'
import { TextField, Button, Typography } from '@mui/material';

export default function ProductAdd() {
    return (<>
    <Typography sx={{marginBottom:'20px'}} variant='h2' color="error">
    Ürün Ekle
    </Typography>

        <form style={{marginBottom:'50px'}}>
      <TextField sx={{marginRight:'100px'}}
        label="Ürün Adı"
      />
      <TextField
        label="Fiyat"
      />
      <Button sx={{marginLeft:'50px'}} type="submit" variant="contained" color="primary">
        Ekle
      </Button>
    </form>
    </>

    )
}
