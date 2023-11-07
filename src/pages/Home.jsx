import React from 'react';
import { Stack, Typography } from '@mui/material';
import Fotomia from '../assets/img/fotoMia1.jpg'

function Home() {
    return (
        <div>
            <Typography variant="h2" sx={{ marginTop: "35px", marginLeft: '100px' }}>Hola, soy Nico Quiroga.</Typography>
            <Stack sx={{ width: '700px', display: 'flex', flexDirection: 'row', justifyContent: "center", margin:'0 auto', marginTop: '30px' }}>
                <img src={Fotomia} alt="fotografia del desarrollador" style={{ width: '300px', height: '300px'  }} />
                <Typography variant="body2" sx={{ background: 'whitesmoke', color: 'black' , borderRadius:'15px 15px 15px 15px', marginLeft:'30px',width:'350px' }}>
                    Desarrollador Full Stack especializado en el stack MERN.
                    
                </Typography>
                
            </Stack>
            {/* Puedes agregar más contenido aquí, como una imagen o una breve introducción. */}
        </div>
    );
}

export default Home;
