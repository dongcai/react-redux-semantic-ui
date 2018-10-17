import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { provideHooks } from 'redial';
import Helmet from 'react-helmet';
import { Container, Message, Segment } from 'semantic-ui-react';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { Notifs, InfoBar } from 'components';
import config from 'config';
import Navigation from '../../components/Navigation/Navigation';

@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    if (!isAuthLoaded(getState())) {
      await dispatch(loadAuth()).catch(() => null);
    }
    if (!isInfoLoaded(getState())) {
      await dispatch(loadInfo()).catch(() => null);
    }
  }
})
@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user
  }),
  { logout, pushState: push }
)
@withRouter
class App extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    notifs: PropTypes.shape({
      global: PropTypes.array
    }).isRequired,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static defaultProps = {
    user: null
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      const redirect = this.props.location.query && this.props.location.query.redirect;
      this.props.pushState(redirect || '/login-success');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { user, notifs, route } = this.props;
    const styles = require('./App.scss');

    let leftItems = [
      {
        as: 'Link',
        content: 'Chat',
        key: 'chat',
        to: '/chat'
      },
      {
        as: 'Link',
        content: 'Chat with Feathers',
        key: 'chat-with-feathers',
        to: '/chat-with-feathers'
      },
      {
        as: 'Link',
        content: 'Widget',
        key: 'widget',
        to: '/widgets'
      },
      {
        as: 'Link',
        content: 'Survey',
        key: 'survey',
        to: '/survey'
      },
      {
        as: 'Link',
        content: 'About',
        key: 'about',
        to: '/about'
      }
    ];

    if (!user) {
      leftItems = leftItems.filter(item => item.key !== 'chat-with-feathers');
    }

    const rightItems = !user
      ? [
        {
          as: 'Link',
          content: 'Login',
          key: 'login',
          to: '/login'
        },
        {
          as: 'Link',
          content: 'Register',
          key: 'register',
          to: '/register'
        }
      ]
      : [
        {
          as: 'Link',
          content: 'Logout',
          key: 'logout',
          to: '/logout'
        }
      ];

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />

        <Navigation leftItems={leftItems} rightItems={rightItems} mobileOnly>
          <Container>
            {notifs.global && (
              <Notifs
                className={styles.notifs}
                namespace="global"
                NotifComponent={props => <Message warning>{props.message}</Message>}
              />
            )}
            {renderRoutes(route.routes)}
            <InfoBar />
          </Container>
        </Navigation>

        <Segment textAlign="center" vertical inverted>
          <p>
            Have questions? Ask for help
            {' '}
            <a
              href="https://github.com/dongcai/react-redux-semantic-ui/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              on Github.
            </a>
            .
          </p>
        </Segment>
      </div>
    );
  }
}

export default App;
