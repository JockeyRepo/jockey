import React from 'react';

import {
	render
} from 'react-dom';
import {
	AppContainer
} from 'react-hot-loader';


import Root from './containers/Root';

import {
	library
} from '@fortawesome/fontawesome-svg-core';
import {
	fab
} from '@fortawesome/free-brands-svg-icons';
import {
	faFire,
	faSearch,
	faArrowLeft,
	faCalendarDay
} from '@fortawesome/free-solid-svg-icons';

// Font Awesome
library.add(
	fab,
	faFire,
	faSearch,
	faArrowLeft,
	faCalendarDay
);
import './app.global.css';



render(
	<AppContainer>
    <Root/>
  </AppContainer>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./containers/Root', () => {
		const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
		render(
			<AppContainer>
        <NextRoot/>
      </AppContainer>,
			document.getElementById('root')
		);
	});
}
