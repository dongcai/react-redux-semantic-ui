import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import reducer, * as widgetActions from 'redux/modules/widgets';
import WidgetForm from 'components/WidgetForm/WidgetForm';
import { Table, Label, Button } from 'semantic-ui-react';

const { isLoaded, load: loadWidgets } = widgetActions;

@provideHooks({
  defer: ({ store: { dispatch, getState, inject } }) => {
    inject({ widgets: reducer });

    if (!isLoaded(getState())) {
      return dispatch(loadWidgets()).catch(() => null);
    }
  }
})
@connect(
  state => ({
    widgets: state.widgets.data,
    editing: state.widgets.editing,
    error: state.widgets.error,
    loading: state.widgets.loading
  }),
  widgetActions
)
export default class Widgets extends Component {
  static propTypes = {
    widgets: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string,
    loading: PropTypes.bool,
    editing: PropTypes.objectOf(PropTypes.bool).isRequired,
    load: PropTypes.func.isRequired,
    editStart: PropTypes.func.isRequired
  };

  static defaultProps = {
    widgets: null,
    error: null,
    loading: false
  };

  render() {
    const handleEdit = widget => {
      const { editStart } = this.props;
      return () => editStart(String(widget.id));
    };
    const {
      widgets, error, editing, loading, load
    } = this.props;
    const styles = require('./Widgets.scss');
    return (
      <div className={`${styles.widgets} container`}>
        <h1>
          Widgets
          <Button positive loading={loading} onClick={load} floated="right">
            Reload Widgets
          </Button>
        </h1>
        <Helmet title="Widgets" />
        <p>
          If you hit 'Refresh' on your browser, the data loading will take place on the browser after the page is
          returned. If you navigated here from another page, the data was fetched from the client after the route
          transition. This uses the decorator method <code>@provideHooks</code> with the <code>defer</code> key. To
          block a route transition until some data is loaded, use the <code>fetch</code> key. To always render before
          loading data, even on the server, use <code>componentWillMount</code>.
        </p>
        <p>This widgets are stored in your session, so feel free to edit it and refresh.</p>
        {error && (
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" /> {error}
          </div>
        )}
        {widgets &&
          widgets.length && (
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Color</Table.HeaderCell>
                  <Table.HeaderCell>Sprockets</Table.HeaderCell>
                  <Table.HeaderCell>Owner</Table.HeaderCell>
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {widgets.map(widget =>
                  editing[widget.id] ? (
                    <WidgetForm form={String(widget.id)} key={String(widget.id)} initialValues={widget} />
                  ) : (
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon>{widget.id}</Label>
                      </Table.Cell>
                      <Table.Cell>{widget.color}</Table.Cell>
                      <Table.Cell>{widget.sprocketCount}</Table.Cell>
                      <Table.Cell>{widget.owner}</Table.Cell>
                      <Table.Cell>
                        <Button onClick={handleEdit(widget)}>Edit</Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          )}
      </div>
    );
  }
}
