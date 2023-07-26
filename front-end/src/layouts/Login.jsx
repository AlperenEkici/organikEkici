
import { Link, TextField, Typography, styled } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react'

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',
});

const LoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
  padding: '20px',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
});

export default function Login() {
  return (
    <Container >
      <LoginForm >
        <TextField label="Email" variant="outlined" margin="normal" required />
        <TextField label="Password" type="password" variant="outlined" margin="normal" required />
        <Button variant="contained" type="submit" >
          Giriş Yap
        </Button>
        <Typography sx={{ marginTop: '30px', fontSize: '20px', color: 'inherit' }}>Henüz bir hesabın yok mu? </Typography>
        <Link href='/kayıt'> Kaydol</Link>
      </LoginForm>
    </Container>
  )
}
