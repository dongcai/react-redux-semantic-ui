import React, { Component } from 'react';
import { reduxForm, Field, propTypes } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { Form, Message } from 'semantic-ui-react';

import loginValidation from './loginValidation';

@reduxForm({
  form: 'login',
  validate: loginValidation
})
class LoginForm extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Field name="email" type="text" component={InputField} label="Email" />
        <Field name="password" type="password" component={InputField} label="Password" />
        {error && (
          <Message negative>
            <p>{error}</p>
          </Message>
        )}
        <Form.Button>Log In</Form.Button>
      </Form>
    );
  }
}

export default LoginForm;
