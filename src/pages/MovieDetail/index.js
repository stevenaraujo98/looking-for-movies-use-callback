import React from 'react'
import { CircularProgress, Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieById } from '../../redux/actions/search';// necesario para mandar la accion al dispatch
import { movieResult as movieResultSelector } from '../../redux/selectors';

export default ({ match }) => {
    //match es como history al recibirlo del anterior componente
    const dispatch = useDispatch();
    const movieSelector = useSelector(state => movieResultSelector(state));
    
    //console.log(movieSelector);

    React.useEffect(() => {
        const movieId = match.params.id;
        dispatch(searchMovieById({ movieId })) //de acuerdo a la saga como reciba el payload se manda el parametro
    }, [])

    if(!movieSelector)
        return <CircularProgress size={100} color="primary"/>
    else
        return (
            <Container>
                <Typography variant="h3">{movieSelector.Title}</Typography>
                <img src={movieSelector.Poster} alt={movieSelector.Title}/>
                <Typography><strong>Actores:</strong>{movieSelector.Actors}</Typography>
                <Typography><strong>Director:</strong>{movieSelector.Director}</Typography>
                <Typography><strong>Pais:</strong>{movieSelector.Country}</Typography>
                <Typography><strong>Premios:</strong>{movieSelector.Awards}</Typography>
                <Typography><strong>Sinopsis:</strong>{movieSelector.Plot}</Typography>
            </Container>
        )
}