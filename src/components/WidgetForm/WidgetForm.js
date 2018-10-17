import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  reduxForm, Field, getFormValues, SubmissionError
} from 'redux-form';
import { InputField, SelectField } from 'react-semantic-redux-form';
import { Button, Message } from 'semantic-ui-react';
import * as widgetActions from 'redux/modules/widgets';
import widgetValidation, { colors } from './widgetValidation';

@reduxForm({
  form: 'widget',
  validate: widgetValidation
})
@connect(
  (state, props) => ({
    saveError: state.widgets.saveError,
    values: getFormValues(props.form)(state)
  }),
  { ...widgetActions }
)
class WidgetForm extends Component {
  static propTypes = {
    editStop: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    save: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    saveError: PropTypes.objectOf(PropTypes.any).isRequired,
    form: PropTypes.string.isRequired,
    values: PropTypes.objectOf(PropTypes.any).isRequired
  };

  render() {
    const {
      editStop,
      form,
      handleSubmit,
      invalid,
      pristine,
      save,
      submitting,
      saveError: { [form]: saveError },
      values
    } = this.props;
    const styles = require('containers/Widgets/Widgets.scss');
    return (
      <tr className={submitting ? styles.saving : ''}>
        <td className={styles.idCol}>
          {values.id}
          <Field name="id" type="hidden" component="input" />
        </td>
        <td className={styles.colorCol}>
          <Field name="color" component={SelectField} options={colors} />
        </td>
        <td className={styles.sprocketsCol}>
          <Field name="sprocketCount" component={InputField} />
        </td>
        <td className={styles.ownerCol}>
          <Field name="owner" component={InputField} />
        </td>
        <td className={styles.buttonCol}>
          <Button onClick={() => editStop(form)} disabled={submitting}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(() => save(values).catch(err => {
              if (typeof err === 'object') {
                throw new SubmissionError(err);
              }
              return Promise.reject(err);
            }))}
            disabled={pristine || invalid || submitting}
          >
            Save
          </Button>
          {saveError && (
            <Message negative>
              <p>{saveError}</p>
            </Message>
          )}
        </td>
      </tr>
    );
  }
}

export default WidgetForm;
