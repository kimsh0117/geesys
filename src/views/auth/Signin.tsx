import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';

class Signin extends React.Component<InjectedFormProps<any> & any> {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/profile');
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name='login'
            type='email'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name='password'
            type='password'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up</button>
      </form>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    errorMessage: state.authReducer.errorMessage
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm<any, any>({ form: 'signin'})
)(Signin);
