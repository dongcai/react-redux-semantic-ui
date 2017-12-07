import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from 'redux/modules/info';
import { Message, Button } from 'semantic-ui-react';

@connect(state => ({ info: state.info.data }), { load })
export default class InfoBar extends Component {
  static propTypes = {
    info: PropTypes.shape({
      message: PropTypes.string,
      time: PropTypes.number
    }),
    load: PropTypes.func.isRequired
  };

  static defaultProps = {
    info: null
  };

  render() {
    const { info, load } = this.props; // eslint-disable-line no-shadow
    const styles = require('./InfoBar.scss');
    return (
      <div className={styles.wrapper}>
        <Message info>
          This is an info bar <strong>{info ? info.message : 'no info!'}</strong>
          <span className={styles.time}>{info && new Date(info.time).toString()}</span>
          <Button onClick={load}>Reload from server</Button>
        </Message>
      </div>
    );
  }
}
