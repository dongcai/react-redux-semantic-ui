import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, fieldPropTypes } from 'redux-form';
import {
  Form, Label, Input as InputComponent, Table, Button
} from 'semantic-ui-react';
import { CheckboxField } from 'react-semantic-redux-form';
import { connect } from 'react-redux';
import { isValidEmail } from 'redux/modules/survey';
import surveyValidation from './surveyValidation';

function asyncValidate(data, dispatch) {
  if (!data.email) return Promise.resolve();
  return dispatch(isValidEmail(data));
}

const Input = ({
  input,
  label,
  type,
  showAsyncValidating,
  styles,
  required,
  width,
  meta: {
    touched, error, dirty, active, visited, asyncValidating
  },
  ...rest
}) => (
  <Form.Field error={!!(touched && error)} required={required} className={styles.inputGroup}>
    {label && <span>{label}</span>}
    {showAsyncValidating && asyncValidating && <i className={`fa fa-cog fa-spin ${styles.cog}`} />}
    <InputComponent required={required} {...input} {...rest} />
    <div className={styles.flags}>
      {dirty && (
        <span className={styles.dirty} title="Dirty">
          D
        </span>
      )}
      {active && (
        <span className={styles.active} title="Active">
          A
        </span>
      )}
      {visited && (
        <span className={styles.visited} title="Visited">
          V
        </span>
      )}
      {touched && (
        <span className={styles.touched} title="Touched">
          T
        </span>
      )}
    </div>
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

Input.propTypes = fieldPropTypes;

@reduxForm({
  form: 'survey',
  validate: surveyValidation,
  asyncValidate,
  asyncBlurFields: ['email']
})
@connect(state => ({
  active: state.form.survey ? state.form.survey.active : ''
}))
class SurveyForm extends Component {
  static propTypes = {
    active: PropTypes.string,
    asyncValidating: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  };

  static defaultProps = {
    active: null
  };

  render() {
    const {
      asyncValidating, dirty, active, handleSubmit, invalid, reset, pristine, valid
    } = this.props;
    const styles = require('./SurveyForm.scss');

    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Field name="name" type="text" component={Input} label="Full Name" styles={styles} />

          <Field
            name="email"
            type="text"
            component={Input}
            label="Email"
            className="form-control"
            styles={styles}
            asyncValidating={asyncValidating}
          />

          <Field
            name="occupation"
            type="text"
            component={Input}
            label="Occupation"
            className="form-control"
            styles={styles}
          />

          <Field name="currentlyEmployed" component={CheckboxField} label="Currently Employed?" styles={styles} />

          <div>
            <Button positive onClick={handleSubmit}>
              Submit
            </Button>
            <Button as="a" negative onClick={reset}>
              Reset
            </Button>
          </div>
        </Form>

        <h4>Props from redux-form</h4>

        <Table celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Active Field</Table.Cell>
              <Table.Cell>{active}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Dirty</Table.Cell>
              <Table.Cell className={dirty ? 'positive' : 'negative'}>{dirty ? 'true' : 'false'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Pristine</Table.Cell>
              <Table.Cell className={pristine ? 'positive' : 'negative'}>{pristine ? 'true' : 'false'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Valid</Table.Cell>
              <Table.Cell className={valid ? 'positive' : 'negative'}>{valid ? 'true' : 'false'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Invalid</Table.Cell>
              <Table.Cell className={invalid ? 'positive' : 'negative'}>{invalid ? 'true' : 'false'}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default SurveyForm;
