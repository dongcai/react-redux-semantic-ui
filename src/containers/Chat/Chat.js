import { socket } from 'app';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Icon, Input, Label } from 'semantic-ui-react';

@connect(state => ({ user: state.auth.user }))
class Chat extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    })
  };

  static defaultProps = {
    user: null
  };

  state = {
    message: '',
    messages: []
  };

  componentDidMount() {
    socket.on('msg', this.onMessageReceived);
    setTimeout(() => {
      socket.emit('history', { offset: 0, length: 100 });
    }, 100);
  }

  componentWillUnmount() {
    socket.removeListener('msg', this.onMessageReceived);
  }

  onMessageReceived = data => {
    const { messages } = this.state;
    messages.push(data);
    this.setState({ messages });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { user } = this.props;
    const msg = this.state.message;
    if (!msg.trim()) return false;

    this.setState({ message: '' });

    socket.emit('msg', {
      from: (user && user.email) || 'Anonymous',
      text: msg
    });
  };

  render() {
    const styles = require('./Chat.scss');

    return (
      <di className={`${styles.chat} container`}>
        <h1>Chat</h1>

        <Container>
          <form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              ref={c => {
                this.message = c;
              }}
              placeholder="Enter your message"
              value={this.state.message}
              onChange={event => {
                this.setState({ message: event.target.value });
              }}
            />
            {' '}
            <Button primary onClick={this.handleSubmit}>
              Send
            </Button>
          </form>
          <ul>
            {this.state.messages.slice(0).reverse().map(msg => (
              <li key={`chat.msg.${msg.id}`}>
                <Label as='a' outline inverted>
                  <Icon name='chat' color="blue" />
                  {msg.from}
                </Label>
                {' '}
                <Label basic color='teal' pointing='left'>
                  {msg.text}
                </Label>
              </li>
            ))}
          </ul>
        </Container>
      </di>
    );
  }
}

export default Chat;
