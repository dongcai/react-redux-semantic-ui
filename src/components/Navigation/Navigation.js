// Modified from https://codesandbox.io/s/5z18q98on
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { Container, Icon, Image, Menu, Sidebar, Responsive } from 'semantic-ui-react';

const NavBarMobile = props => (
  <Sidebar.Pushable>
    <Sidebar as={Menu} animation="push" inverted visible={props.visible} width="tiny" style={{ height: '100vh' }}>
      <Menu vertical inverted fluid>
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        {_.map(props.leftItems, item => (
          <Menu.Item as={Link} to={item.to} key={item.key} onClick={props.onToggle}>
            {item.content}
          </Menu.Item>
        ))}
      </Menu>
    </Sidebar>
    <Sidebar.Pusher dimmed={props.visible} onClick={props.onPusherClick} style={{ minHeight: '100vh' }}>
      <Menu fixed="top" inverted>
        <Menu.Item onClick={props.onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        {!props.visible && (
          <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
        )}
        <Menu.Menu position="right">
          {_.map(props.rightItems, item => (
            <Menu.Item as={Link} to={item.to} key={item.key}>
              {item.content}
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu>
      {props.children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

NavBarMobile.propTypes = {
  children: PropTypes.node.isRequired,
  leftItems: PropTypes.arrayOf(PropTypes.object),
  onPusherClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  rightItems: PropTypes.arrayOf(PropTypes.object),
  visible: PropTypes.bool
};

NavBarMobile.defaultProps = {
  leftItems: [],
  rightItems: [],
  visible: false
};

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
    </Menu.Item>
    {_.map(leftItems, item => (
      <Menu.Item as={Link} to={item.to} key={item.key}>
        {item.content}
      </Menu.Item>
    ))}
    <Menu.Menu position="right">
      {_.map(rightItems, item => (
        <Menu.Item as={Link} to={item.to} key={item.key}>
          {item.content}
        </Menu.Item>
      ))}
    </Menu.Menu>
  </Menu>
);

NavBarDesktop.propTypes = {
  leftItems: PropTypes.arrayOf(PropTypes.object),
  rightItems: PropTypes.arrayOf(PropTypes.object)
};

NavBarDesktop.defaultProps = {
  leftItems: [],
  rightItems: []
};

const NavBarChildren = ({ children }) => <Container style={{ marginTop: '6em' }}>{children}</Container>;

NavBarChildren.propTypes = {
  children: PropTypes.node.isRequired
};

export default class Navigation extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    leftItems: PropTypes.arrayOf(PropTypes.any).isRequired,
    rightItems: PropTypes.arrayOf(PropTypes.any).isRequired
  };

  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div style={{ flex: 1 }}>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}
