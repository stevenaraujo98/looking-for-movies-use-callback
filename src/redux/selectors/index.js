import { get } from 'lodash'

// Esto es para evitarme estar accediendo al state en el 
// const movie = useSelector(state => { console.log(state); });
// ESTO ES COMO LO DEVUELVE EL REDUCER
// que está en el index de la carpeta Result
// para tenerlo así 
// const movie = useSelector(state => movieResult(state));
export const isSearchLoading = state => get(state, 'search.isLoading');
export const movieResults = state => get(state, 'search.movieResults.Search');

export const movieResult = state => get(state, 'search.movieResult');