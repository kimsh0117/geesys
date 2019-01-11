import * as React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';

const RootView: React.SFC<{}> = ({children}) => (
  <React.Fragment>
    <Helmet
      titleTemplate='React TypeScript Boilerplate - %s'
      defaultTitle='React TypeScript Boilerplate'
    />
    <Header />
    <main>
      {children}
    </main>
  </React.Fragment>
);

export default RootView;