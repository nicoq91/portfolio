import React from 'react';
import { Typography } from '@mui/material';

function About() {
    return (
        <div>
            <Typography variant="h2">Acerca de mí</Typography>
            <Typography variant="body1">
                Soy Nico Quiroga, nací en [tu lugar de nacimiento] y desde joven me apasionó la tecnología.
                Estudié [tu formación académica] y he trabajado en [empresas o proyectos destacados].
            </Typography>
            {/* Puedes agregar más detalles sobre ti, tu educación, experiencia, habilidades, etc. */}
        </div>
    );
}

export default About;
