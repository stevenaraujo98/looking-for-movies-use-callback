import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search'; // necesario para mandar la accion al dispatch
import { isSearchLoading, movieResults } from '../../redux/selectors';
import MovieResult from '../../components/MovieResult';


export default ({ location }) => {
    //location contiene el pathname, el search que es el queryparams
    //console.log(queryString.parse(location.search));
    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));

    //console.log(movies);
    //console.log(isLoading);

    React.useEffect(() => {
        const { movieName } = queryString.parse(location.search);

        //Esto tambien evitaria llamar el api a cada rato
        /**
         * if ( movieName && !movies ){
         *  dispatch(searchMovie({ movieName }))
         * }
        */

        dispatch(searchMovie({ movieName })) //de acuerdo a la saga como reciba el payload se manda el parametro
    }, []);// [] para evitar se actualice o dentro para evitar llame el api a cada momento

    const renderMovies = () => {
        if(movies){
            return movies.map((value, index) => <MovieResult key={index} {...value}/>)
        }else if(isLoading){
            return <CircularProgress size={100} color="primary" />
        }else {
            return <div/>
        }
    }

    return (<Container>{renderMovies()}</Container>)
}