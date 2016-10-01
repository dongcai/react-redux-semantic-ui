import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { Notifs, InfoBar } from 'components';
import { push } from 'react-router-redux';
import config from 'config';
import { asyncConnect } from 'redux-connect';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];

    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }
    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user
  }),
  { logout, pushState: push })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    notifs: PropTypes.object,
    route: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  sortBy = fn => (a, b) => (fn(a) < fn(b) && -1) || (fn(a) > fn(b) && 1) || 0;

  render() {
    const { user, notifs, route: { navbarItems } } = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
                <div className={styles.brand} />
                <span>{config.app.title}</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              {navbarItems.sort(this.sortBy(v => v.pos)).map(({ item: Item }, i) => <Item key={i} user={user} />)}

              {user && <LinkContainer to="/logout">
                <NavItem eventKey={7} className="logout-link" onClick={this.handleLogout}>
                  Logout
                </NavItem>
              </LinkContainer>}
            </Nav>
            {user && <p className={`${styles.loggedInMessage} navbar-text`}>
              Logged in as <strong>{user.email}</strong>.
            </p>}
            <Nav navbar pullRight>
              <NavItem
                eventKey={1} target="_blank" title="View on Github"
                href="https://github.com/erikras/react-redux-universal-hot-example">
                <i className="fa fa-github" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {notifs.global && <div className="container">
            <Notifs
              className={styles.notifs}
              namespace="global"
              NotifComponent={props => <Alert bsStyle={props.kind}>{props.message}</Alert>}
            />
          </div>}

          {this.props.children}
        </div>
        <InfoBar />

        <div className="well text-center">
          Have questions? Ask for help{' '}
          <a href="https://github.com/erikras/react-redux-universal-hot-example/issues" target="_blank">on Github</a>
          {' '}or in the{' '}
          <a href="https://discord.gg/0ZcbPKXt5bZZb1Ko" target="_blank">#react-redux-universal</a>
          {' '}Discord channel.
        </div>
      </div>
    );
  }
}
