import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import GetAppIcon from '@mui/icons-material/GetApp';
function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Logo
                </Typography>
                <Button color="inherit" component={Link} to="/">Inicio</Button>
                <Button color="inherit" component={Link} to="/acerca-de-mi">Acerca de mí</Button>
                <Button color="inherit" component={Link} to="/proyectos">Proyectos</Button>
                <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
                <IconButton color="inherit" aria-label="descargar currículum" component="a" href="/path-to-your-cv.pdf" download>cv
                    <GetAppIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
