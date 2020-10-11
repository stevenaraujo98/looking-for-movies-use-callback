import React from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import { MovieIcon } from '../../icons';
import styles from './style';

export default ({ history }) => {
    const [searchText, setSearchText] = React.useState('');
    const classes = styles();

    const handleSearchTextChange = e => {
        setSearchText(e.target.value);
    };

    const handleCleanTextClick = e => { setSearchText('') };
    const handleSearchTextClick = e => { history.push(`/result?movieName=${searchText}`) };

    //console.log(history);//contiene toda la info de la ruta
    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}> {/**Container para decir que es la fila  */}
                    <Grid>
                        <Typography className={classes.title}>Bienvenido!</Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}/>
                    </Grid>
                </Grid>

                <TextField value={searchText} placeholder="Buscar..." className={classes.textFieldSearch} onChange={handleSearchTextChange}/>

                <Grid className={classes.buttonsContainer}>
                    {/** variant="contained" para que sea un boton elevado */}
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>
    )
}