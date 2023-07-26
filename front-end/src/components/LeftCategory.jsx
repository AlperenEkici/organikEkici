import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'

export default function LeftCategory() {
    return (<>
        <Typography sx={{ fontSize: '25px', color: '#eb8024', marginBottom: '15px' }} variant='h4'>
            Kategoriler
        </Typography>
        <Box sx={{ padding: '21px 15px', backgroundColor: '#eef0f1', borderRadius: '10px', height: '1000px' }}>
            <Stack>
                <Link href="/kategoriler/3" underline='none' sx={{ marginBottom: '10px', color: 'inherit' }}>
                    Süt Ürünleri
                </Link>
                <Link href="/kategoriler/2" underline='none' sx={{ marginBottom: '10px', color: 'inherit' }}>
                    Taze Meyve
                </Link>
                <Link href="/kategoriler/1" underline='none' sx={{ marginBottom: '10px', color: 'inherit' }}>
                    Konserve Gıda
                </Link>
            </Stack>



        </Box></>
    )
}
