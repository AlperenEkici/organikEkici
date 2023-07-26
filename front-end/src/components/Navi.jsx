import React from 'react'
import { AppBar, Button, Container, InputBase, Toolbar, Typography, styled } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { useAuth0 } from '@auth0/auth0-react';

const StyledToolbar = styled(Toolbar)({
    backgroundColor: 'rgba(147, 189, 170, 1)',
    color: 'white',
    height: '80px'
})
const StyledContainer = styled(Container)({
    display: "flex",
    justifyContent: "space-between",
    maxWidth: '1250px'
})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    width: "30%",
    padding: "0px 2px",
    borderRadius: "20px",
    height: '50px',
    display: 'flex'

}))
const StyledButton = styled(Button)({
    variant: "text",
    color: 'white'
})
const StyleSearchIcon = styled(SearchIcon)({

    padding: '10px',
    borderRadius: "19.2px",
    backgroundColor: "#f49849",
    display: "flex",


})
export default function Navi() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

    return (
        <AppBar position="sticky" >
            <StyledToolbar >
                <StyledContainer maxWidth={false}>
                    <StyledButton href='/'>
                        <Typography variant='h6' sx={{ marginRight: '150px', display: { xs: "none", sm: "block" } }}>
                            Organik Ekici
                        </Typography>
                    </StyledButton>

                    <Search >
                        <InputBase sx={{ width: '400px' }} placeholder='Aramak istediğiniz ürünü yazın.' />
                        <Button>
                            <StyleSearchIcon />
                        </Button>
                    </Search>


                    {isAuthenticated ?
                        <StyledButton onClick={() => logout()}> Çıkış Yap</StyledButton>
                        :
                        <StyledButton onClick={() => loginWithRedirect()}>Giriş Yap</StyledButton >
                    }


                    <StyledButton href='/sepetdetayı' ><ShoppingBasketIcon />Sepetim</StyledButton>

                </StyledContainer>
            </StyledToolbar>


        </AppBar>
    )
}
