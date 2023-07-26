import { Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import Buy from './Buy'

export default function CartDetail() {
  return (
    <Container >
      <Grid container >
        <Grid item xs={8}>
          <TableContainer>
            <Table>
              <TableHead >
                <TableRow >
                  <TableCell sx={{ width: '50%' }}>ÜRÜN</TableCell>
                  <TableCell sx={{ width: '20%' }}>FİYAT</TableCell>
                  <TableCell sx={{ width: '20%' }}>ADET</TableCell>
                  <TableCell >TOPLAM</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                <TableCell>
                  <img width={70} src='Images/zeytinyagi-5-lt.webp' alt='zeytinyağı' />
                  <Typography >
                    Organik Zeytinyağı 5L
                  </Typography>

                </TableCell>
                <TableCell>
                  500 Tl
                </TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Button sx={{
            bgcolor: '#1976d2', padding: '10px 50px', color: 'white', marginLeft: '200px', marginTop: '50px',
            '&:hover': {
              backgroundColor: '#1976d2'

            }
          }
          }>
            <Buy />
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
