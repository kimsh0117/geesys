import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './reducers';
import thunk from 'redux-thunk';

import 'normalize.css';
import 'styles/main.scss';

import Root from 'views';

import history from 'utils/history';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk, logger));
const store = createStore(reducers,
{
},
composeEnhancers);

import routes from './routes';
import HomeView from 'views/home';
import Signin from 'root/views/auth/Shignin';
import Signout from 'views/auth/Signout';

import Profile from 'components/Profile';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Root>
        <Route path={routes.ROOT} exact component={HomeView}/>
        <Route path={routes.SIGNIN} component={Signin}/>
        <Route path={routes.PROFILE} component={Profile}/>
        <Route path={routes.SIGNOUT} component={Signout}/>
      </Root>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
