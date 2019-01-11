import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../routes';

class Header extends React.Component<any, any> {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to={routes.SIGNOUT}>SignOut</Link>
          <Link to={routes.PROFILE}>Profile</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={routes.SIGNUP}>SignUp</Link>
          <Link to={routes.SIGNIN}>SignIn</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Link to={routes.ROOT}>Home</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    authenticated: state.authReducer.authenticated
  };
}

export default connect(mapStateToProps)(Header);