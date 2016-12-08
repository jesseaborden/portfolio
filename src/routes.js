import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Home from './Components/Home.js';
import Typedash from './Components/Typedash';
import Teachin from './Components/Teachin';

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="/typedash" component={Typedash} />
		<Route path="/teachin" component={Teachin} />
	</Router>
)


export default Routes