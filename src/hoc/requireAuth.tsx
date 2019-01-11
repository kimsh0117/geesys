import * as React from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends React.Component<any> {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state: any) {
    return { auth: state.authReducer.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};