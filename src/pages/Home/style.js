import { makeStyles } from '@material-ui/styles';

const centeredStyledObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'Column',
        ...centeredStyledObj
    },
    cardContainer: {
        flexDirection: 'Column',
        width: 400,
        height: 200,
        padding: '2rem',
        ...centeredStyledObj
    },
    title: {
        fontSize: '4rem'
    },
    titleGridContainer: {
        ...centeredStyledObj
    },
    textFieldSearch: {
        width: '90%'
    },
    searchButton: {
        marginLeft: '.5rem'
    },
    buttonsContainer: {
        marginTop: '.5rem'
    },
    movieIcon: {
        fontSize: '4rem'
    }
});