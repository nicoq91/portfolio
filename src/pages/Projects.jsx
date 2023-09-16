import React from 'react';
import { Typography } from '@mui/material';

function Projects() {
    return (
        <div>
            <Typography variant="h2">Mis Proyectos</Typography>
            <Typography variant="body1">
                Aquí encontrarás una selección de los proyectos en los que he trabajado.
            </Typography>
            {/* Puedes agregar tarjetas (Cards) de Material-UI para mostrar cada proyecto. */}
        </div>
    );
}

export default Projects;
