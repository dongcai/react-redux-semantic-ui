import React, { Component } from 'react';
import { reduxForm, Field, propTypes } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { Form, Message } from 'semantic-ui-react';
import registerValidation from './registerValidation';

@reduxForm({
  form: 'register',
  validate: registerValidation
})
export default class RegisterForm extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Field name="email" type="text" component={InputField} label="Email" />
        <Field name="password" type="password" component={InputField} label="Password" />
        <Field name="password_confirmation" type="password" component={InputField} label="Password confirmation" />
        {error && (
          <Message negative>
            <p>{error}</p>
          </Message>
        )}
        <Form.Button>Register</Form.Button>
      </Form>
    );
  }
}
