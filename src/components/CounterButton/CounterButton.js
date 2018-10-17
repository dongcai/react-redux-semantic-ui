import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'multireducer';
import * as counterActions from 'redux/modules/counter';
import { Button } from 'semantic-ui-react';

@connect(
  (state, { multireducerKey: key }) => ({ count: state.counter[key].count }),
  (dispatch, { multireducerKey: key }) => bindActionCreators(counterActions, dispatch, key)
)
class CounterButton extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    color: PropTypes.string
  };

  static defaultProps = {
    color: ''
  };

  render() {
    const { count, increment, color } = this.props;
    return (
      <Button color={color} onClick={increment} style={{ marginBottom: '10px' }}>
        You have clicked me
        {' '}
        {count}
        {' '}
time
        {count === 1 ? '' : 's'}
        .
      </Button>
    );
  }
}

export default CounterButton;
