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
// PWA
import registerServiceWorker from './registerServiceWorker';
// configuration redux store
const composeEnhancers = composeWithDevTools(applyMiddleware(thunk, logger));
// store
// first parameter all reducer
// second parameter defaulte reducers
const store = createStore(reducers, {}, composeEnhancers);

// import views(container) componensts
import routes from './routes';
import HomeView from 'views/home';
import Signin from 'views/auth/Signin';
import Signout from 'views/auth/Signout';
// import components(stateless) components
import Signup from 'components/Signup';
import Profile from 'components/Profile';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Root>
        {/* pass the components as children */}
        {/* have to refactoring chileren components as array */}
        <Route path={routes.ROOT} exact component={HomeView}/>
        <Route path={routes.SIGNIN} component={Signin}/>
        <Route path={routes.PROFILE} component={Profile}/>
        <Route path={routes.SIGNOUT} component={Signout}/>
        <Route path={routes.SIGNUP} component={Signup}/>
      </Root>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
