import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Buy() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div><Button onClick={handleClickOpen} sx={{
            bgcolor: '#1976d2', color: 'white', marginLeft: '2px', marginTop: '2px',
            '&:hover': {
                backgroundColor: '#1976d2'

            }
        }
        }> Satın Al
        </Button>
            <Dialog
                open={open}

                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Satın Al"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Onaylıyormusunuz
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hayır</Button>
                    <Button onClick={handleClose}>Evet</Button>
                </DialogActions>
            </Dialog></div>
    )
}
