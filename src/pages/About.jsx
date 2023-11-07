import React from 'react';
import { Stack, Typography } from '@mui/material';

import LogoHtml from '../assets/img/Html5Logo.png';
import LogoCss from '../assets/img/LogoCss.png'
import LogoJs from '../assets/img/JavaScriptLogo.png';
import LogoReact from '../assets/img/ReactLogol.png';
import LogoMongo from '../assets/img/MongoDB-Logo.png';
import LogoMui from '../assets/img/LogoMui.png'


function About() {
    console.log (LogoJs)
    return (
        <Stack gap={2} p={3}>
            <Typography variant="h2" className='title'>Acerca de mí</Typography>
            <Typography variant="body1" className='bodyText'>
                Programador full stack especializado en HTML5, CSS, JavaScript, React, Node.js y MongoDB. Con muchas horas en formación autodidacta y en el desarrollo de proyectos propios, demostrando mi compromiso y destreza en el área. Me caracterizo por mi habilidad resolutiva, enfoque en mejora continua y deseo de innovar en soluciones tecnológicas. Estoy listo para aportar valor en nuevos desafíos profesionales.
            </Typography>
            <Typography variant="h2" className='title'>Habilidades y conocimientos </Typography>
            {/* Puedes agregar más detalles sobre ti, tu educación, experiencia, habilidades, etc. */}
            <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                <img src={LogoHtml} alt="logotipo de html" style={{ width: '100px', height: '100px'  }} />
                <img src={LogoCss} alt="logotipo de css" style={{ width: '100px', height: '100px'  }} />
                <img src={LogoJs} alt="logotipo de javascript " style={{ width: '100px', height: '100px'  }} />
                <img src={LogoReact} alt="logotipo de React" style={{ width: '100px', height: '100px'  }} />
                <img src={LogoMongo} alt="logotipo de Mongo" style={{ width: '100px', height: '100px'  }} />
                <img src={LogoMui} alt="logotipo de material ui " style={{ width: '100px', height: '100px'}} />
            </Stack>
            <Typography variant="h2" className='title'>Educación </Typography>
        </Stack>
    );
}

export default About;
