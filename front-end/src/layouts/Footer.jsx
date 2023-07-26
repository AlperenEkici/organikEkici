import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import "../css/style.css"

export default function Footer() {
  return (
    <Box sx={{ marginTop: '30px', width: '100%', height: '20%', bgcolor: 'black' }}>
      <Container className='footer'>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography variant={'h5'} sx={{ marginBottom: '30px', color: 'white' }}>
              Organik Ekici
            </Typography>
            <Typography sx={{ marginBottom: '30px', color: 'white' }}>
              Biz Kimiz
            </Typography>


          </Grid>
          <Grid item xs={5}>
            <Typography sx={{ marginBottom: '30px', color: 'white' }}>
              Bayimiz Olun
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{ marginBottom: '30px', color: 'white' }}>
              İletişim
            </Typography>

            <Link href='https://github.com/SDU-Bilgisayar-Muhendisligi/organikgurmem/wiki' sx={{ marginBottom: '30px', color: 'white' }}>
              <GitHubIcon />
            </Link>

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
