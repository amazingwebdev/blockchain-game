import React, { Component } from 'react';

import './styles.css';

export default class RenderField extends Component {

  render() {
    const { input, label, type, meta: { touched, error } } = this.props;

    return (
      <div className="form-group">
        <div className="d-flex">
          <label className="text-capitalize">{label}</label>
          {
            touched && error && <span className="text-right flex-content-width text-danger">{error}</span>
          }
        </div>
        <div>
          <input {...input} type={type} className="w-100" />
        </div>
      </div>
    )
  }
}