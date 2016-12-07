import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Home from './Components/Home.js'
import Typedash from './Components/Typedash'

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="/typedash" component={Typedash} />
	</Router>
)


export default Routes