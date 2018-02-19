import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../../actions/auth';
import './styles.css';
import RenderField from '../../../public/components/renderField';
import { required, email, length } from 'redux-form-validators';

class Login extends Component {

  render() {
    const { handleSubmit, invalid } = this.props;

    return (
      <div className="container login-container d-flex justify-content-center align-items-center">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 mx-auto login-form-container">
          <div className="login-header">
            <h2 className="text-center mb-3">Sign in to your account</h2>
          </div>
          <form
            className="form login-form"
            onSubmit={handleSubmit(data => this.props.login(data))}>
            <Field
              name="email"
              component={RenderField}
              label="email"
              type="email"
              className="form-control"
              validate={[required({msg: 'Required'}), email({msg: 'Please input a valid email.'})]}
            />
            <Field
              name="password"
              component={RenderField}
              label="password"
              type="password"
              className="form-control"
              validate={[required({msg: 'Required'}), length({ min: 8, msg: 'Must be more than 8 letters.' })]}
            />
            <div className="form-group d-flex justify-content-center">
              <button type="submit"  disabled={invalid} className="btn btn-primary justify-content-center w-100 my-2">
                Sign in
              </button>
            </div>
          </form>
          <div className="login-footer">
            <p className="text-center">
              <a href="#">Forgot Password?</a>
            </p>
            <p className="text-center">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Login = reduxForm({
  form: 'login'
})(Login);

const actions = (dispatch) => {
  return {
    login: data => dispatch(login(data))
  };
};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, actions)(Login);
