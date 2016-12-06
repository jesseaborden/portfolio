import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Home from './Components/Home.js'

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
	</Router>
)


export default Routes