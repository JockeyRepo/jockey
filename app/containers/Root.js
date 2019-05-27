import React, {
	Component
} from 'react';

import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom';
import Settings from '../components/Settings';
import Login from '../components/Login';
import Home from '../components/Home';
import Qr from '../components/QR';
import Faq from '../components/Faq';
import Filter from '../components/Filter';


import routes from '../constants/routes';


export default class Root extends Component {
	componentDidMount() {
		// add fetch stuff here
	}

	render() {
		return (
			<BrowserRouter>
        <div>
          <div className="titlebar" />

          <Switch>

            <Route path={routes.FILTER} component={Filter} />
            <Route path={routes.FAQ} component={Faq} />
            <Route path={routes.SETTINGS} component={Settings} />
            <Route path={routes.LOGIN} component={Login} />
            <Route path={routes.QR} component={Qr} />
            <Route path={routes.HOME} component={Home} />

          </Switch>
        </div>
      </BrowserRouter>
		);
	}
}
