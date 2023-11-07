import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import "./header.css";

function Header() {
  return (
    <AppBar
      position="static"

      sx={{ boxShadow: "none", padding: 0, backgroundColor: '#0f0e17' }}
    //   sx={{ boxShadow:"none", padding: 0 ,backgroundColor:{xs:"red", lg:"black"} }}

    >
      <Toolbar>
        <Button
          color="inherit"
          component={Link}
          to="/"
          className="custom-button"
        >
          Inicio
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/acerca-de-mi"
          className="custom-button"
        >
          Acerca de mí
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/proyectos"
          className="custom-button"
          
        >
          Proyectos
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contacto"
          className="custom-button"
        >
          Contacto
        </Button>
          {/* boton de delete */}
        <Button
          color="inherit"
          aria-label="descargar currículum"
          component="a"
          href="/path-to-your-cv.pdf"
          download
          sx={{color:'white',background:'#ff8906' ,position: 'absolute',right:'20px', width: '300px', border:'3px solid #ff8906',padding:'10px'}}
        >
          {" "}
          Descargar Curriculum{" "}
         <DownloadIcon/>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
