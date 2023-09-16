import React from 'react';
import { Typography } from '@mui/material';

function Home() {
    return (
        <div>
            <Typography variant="h2">Bienvenido a mi portafolio</Typography>
            <Typography variant="body1">
                Soy [tu nombre], un desarrollador Full Stack especializado en el stack MERN.
            </Typography>
            {/* Puedes agregar más contenido aquí, como una imagen o una breve introducción. */}
        </div>
    );
}

export default Home;
