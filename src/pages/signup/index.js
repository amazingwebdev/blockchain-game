import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';
import RenderField from '../../utils/components/renderField';
import { required, email, length, confirmation } from 'redux-form-validators';
import { signup } from '../../actions/authActions';

class Signup extends Component {
  render() {
    const { handleSubmit, invalid } = this.props;

    return (
      <div className="container signup-container d-flex justify-content-center align-items-center">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 mx-auto signup-form-container">
          <div className="signup-header">
            <h2 className="text-center mb-3">Create Your Account</h2>
          </div>
          <form onSubmit={handleSubmit(data => this.props.signup(data))}>
            <Field
              name="name"
              component={RenderField}
              label="name"
              type="text"
              className="form-control"
              validate={[required({msg: 'Required'})]}
            />
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
            <Field
              name="confirm_password"
              component={RenderField}
              label="confirm password"
              type="password"
              className="form-control"
              validate={[
                required({msg: 'Required'}),
                length({ min: 8, msg: 'Must be more than 8 letters.' }),
                confirmation({ field: 'password', fieldLabel: 'password', msg: 'Re-enter.' })
              ]}
            />
            <div className="form-group d-flex justify-content-center">
              <button type="submit"  disabled={invalid} className="btn btn-primary justify-content-center w-100 my-2">
                Create Account
              </button>
            </div>
          </form>
          <div className="signup-footer">
            <p className="text-center">
              Already have an account? <Link to="/login">Login Now</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Signup = reduxForm({
  form: 'signup'
})(Signup);

const actions = (dispatch) => {
  return {
    signup: data => dispatch(signup(data))
  };
};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, actions)(Signup);