import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import logoRojo from '../assets/img/logoRojo.jpg';
import logoPortfolio from '../assets/img/imagenPortfolio.jpg'
function Projects() {
    return (
        <div>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>Mis Proyectos:</Typography>
            <Typography variant="body2" sx={{textAlign:'center', marginBottom:'80px'}}>
                Aquí encontrarás una selección de los proyectos en los que he trabajado.
            </Typography>
            <Grid container spacing={6} justifyContent={'center'}>
                <Grid item>
                    <Card sx={{ maxWidth: '250px', background: '#fffffe' , border:'1px solid #ccc ', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                        <CardMedia
                            sx={{ height: '100px', width: '200px', backgroundSize: '100px', margin:' 0 auto' }}
                            image={logoRojo}
                            alt="imagen"
                            title="imagen portfolio"
                        />
                        <CardContent sx={{ padding: '1px' }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', background: '#ff8906', width: '345px', textAlign: 'left' }}>
                                Portfolio
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descubre cómo realicé este portfolio. Tecnologías, códigos y más...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Compartir</Button>
                            <Button size="small">ver</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: '250px', background: '#fffffe', border:'1px solid #ccc ', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                        <CardMedia
                            sx={{ height: '100px', width: '200px', backgroundSize: '100px', margin:' 0 auto' }}
                            image={logoPortfolio}
                            alt="imagen"
                            title="imagen portfolio"
                        />
                        <CardContent sx={{ padding: '1px' }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', background: '#ff8906', width: '345px', textAlign: 'left' }}>
                                Libreta
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descubre cómo realicé esta libreta. Tecnologías, códigos y más...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Compartir</Button>
                            <Button size="small">ver</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: '250px', background: '#fffffe', border:'1px solid #ccc ', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                        <CardMedia
                            sx={{ height: '100px', width: '200px', backgroundSize: '100px', margin:' 0 auto' }}
                            image={logoRojo}
                            alt="imagen"
                            title="imagen portfolio"
                        />
                        <CardContent sx={{ padding: '1px' }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', background: '#ff8906', width: '345px', textAlign: 'left' }}>
                                Calculadora
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descubre cómo realicé esta libreta. Tecnologías, códigos y más...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Compartir</Button>
                            <Button size="small">ver</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects;
