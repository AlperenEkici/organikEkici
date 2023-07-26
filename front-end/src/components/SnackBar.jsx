import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Typography } from '@mui/material';
import { useState } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar() {
    const [open, setOpen] = useState(false);



    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (<>
        <Stack >
            <Button onClick={handleClick} sx={{
                bgcolor: 'rgba(147, 189, 170, 1)', marginLeft: '30px', color: 'white', padding: '16px 24px', ":hover": {
                    bgcolor: 'rgba(50, 189, 170, 1)'
                }, marginBottom: '20px'
            }} >

                <ShoppingCartIcon />
                <Typography textTransform={'capitalize'} >
                    Sepete Ekle
                </Typography>

            </Button>

            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} >

                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Sepete Eklendi <Link href='/sepetdetayı' sx={{ fontWeight: '500', fontSize: '18px', color: 'black' }}> Sepete Git</Link>
                </Alert>
            </Snackbar>
        </Stack>
    </>
    );
}