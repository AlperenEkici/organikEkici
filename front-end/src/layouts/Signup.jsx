import { Button, Link, TextField, Typography, styled } from '@mui/material';

const LoginForm = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '350px',
  padding: '20px',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '30px',
});

export default function Signup() {
  return (
    <Container >
      <LoginForm >

        <TextField label="Kullanıcı adı" variant="outlined" margin="normal" />
        <TextField label="Şifre" variant="outlined" margin="normal" />
        <TextField label="Ad" variant="outlined" margin="normal" />
        <TextField label="Soyad" variant="outlined" margin="normal" />
        <TextField label="Telefon" variant="outlined" margin="normal" />
        <TextField label="e-posta" variant="outlined" margin="normal" />
        <Button variant="contained" type="submit">
          Kayıt Ol
        </Button>
        <Typography sx={{ marginTop: '20px', fontSize: '20px', color: 'inherit' }}>Zaten bir hesabın var mı?  </Typography>
        <Link href='/giriş'>  Giriş yap</Link>
      </LoginForm>
    </Container>

  )
}
