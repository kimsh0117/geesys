import * as React from 'react';
import requireAuth from '../hoc/requireAuth';

// const style = require('./style.scss');

const Profile: React.SFC<{}> = () => (
  <div>Profile</div>
);

export default requireAuth(Profile);