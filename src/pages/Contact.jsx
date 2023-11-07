import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

function Contact() {
    const buttonStyles = {
        background: 'rgb(255, 137, 6)',
        color:'white',
        '&:hover': {
            background: 'black',
            border:'2px solid rgb(255, 137, 6) ',
            color:'white',
           
        },
        '&.MuiInput-underline:after':{
            borderBottomColor: 'rgb(255, 137, 6)',
        }
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div style={{ width: '80%', maxWidth: '600px' }}>
                <Typography variant="h2" align="center">Contáctame</Typography>
                <Typography variant="body1" align="center" paragraph>
                    Si deseas ponerte en contacto conmigo, llena el siguiente formulario:
                </Typography>
                <form>
                    <TextField label="Nombre" fullWidth margin="normal" />
                    <TextField label="Correo electrónico" fullWidth margin="normal" />
                    <TextField label="Mensaje" multiline rows={4} fullWidth margin="normal" />
                    <Button variant="contained" color="inherit" type="submit" sx={buttonStyles} >Enviar</Button>
                </form>
            </div>
        </div>  
    );
}

export default Contact;

