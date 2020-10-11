import React from 'react';
import { Button, Card, Grid, Typography } from '@material-ui/core';

// nos permitirá tener un history dentro del componente ya que por si solo no posee el history
import { withRouter } from 'react-router-dom'; 

import styles from './styles'

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
    const classes = styles();
    //console.log(history);

    const handleSeeMovieClick = () => {
        history.push(`/movie/${imdbID}`);
    }

    return (
        <Card className={classes.cardContainer}>
            <Grid container >
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster}/>
                </Grid>

                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="primary" variant="contained" onClick={handleSeeMovieClick}>Ver mas</Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default withRouter(MovieResult);//Es necesario englobarlo para poder tener le history