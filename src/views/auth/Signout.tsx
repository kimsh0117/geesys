import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// const style = require('./style.scss');

class Signout extends React.Component<any> {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return <div>Sorry to see you go</div>;
  }
}

export default connect(null, actions)(Signout);