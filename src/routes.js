import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Home from './Components/Home.js';
import Typedash from './Components/Typedash';
import Teachin from './Components/Teachin';
import Coco from './Components/Coco'
import Pol from './Components/Pol'

const Routes = () => (
	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="/typedash" component={Typedash} />
		<Route path="/teachin" component={Teachin} />
		<Route path="/coco" component={Coco} />
		<Route path="/pol" component={Pol} />
	</Router>
)


export default Routes