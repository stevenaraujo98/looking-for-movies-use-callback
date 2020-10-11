import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Results from './pages/Results';
import MovieDetail from './pages/MovieDetail';
import Counter from './pages/Counter';

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path='/result' component={Results}/>
				<Route path='/movie/:id' component={MovieDetail}/>
				<Route path='/counter' component={Counter}/>
			</div>
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
