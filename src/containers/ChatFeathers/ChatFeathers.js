import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import reducer, * as chatActions from 'redux/modules/chat';
import { withApp } from 'hoc';
import {
  Button,
  Segment,
  Form,
  Label,
  Input,
  Icon,
  Header,
  Container,
  Message
} from 'semantic-ui-react';

@provideHooks({
  fetch: async ({ store: { dispatch, getState, inject } }) => {
    inject({ chat: reducer });

    const state = getState();

    if (state.online) {
      return dispatch(chatActions.load()).catch(() => null);
    }
  },
})
@connect(
  state => ({
    user: state.auth.user,
    messages: state.chat.messages,
  }),
  { ...chatActions }
)
@withApp
class ChatFeathers extends Component {
  static propTypes = {
    app: PropTypes.shape({
      service: PropTypes.func,
    }).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string,
    }).isRequired,
    addMessage: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    message: '',
    error: null,
  };

  componentDidMount() {
    this.props.app.service('messages').on('created', this.props.addMessage);
  }

  componentWillUnmount() {
    this.props.app
      .service('messages')
      .removeListener('created', this.props.addMessage);
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await this.props.app
        .service('messages')
        .create({ text: this.state.message });
      this.setState({ message: '', error: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message || false });
    }
  };

  render() {
    const { user, messages } = this.props;
    const { error } = this.state;
    return (
      <Container>
        <Segment raised color="blue">
          <Header as="h3">
            <Icon name="chat" />
            Chat with Feathers.
          </Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field inline>
              <Label>Message</Label>
              <Input
                type="text"
                ref={c => {
                  this.message = c;
                }}
                placeholder="Enter your message"
                value={this.state.message}
                onChange={event => this.setState({ message: event.target.value })
                }
              />
              <Button onClick={this.handleSubmit} icon="send" content=" Send" />
              {error && (
                <Label as={error}>
                  <Icon name="cancel" />
                  {error}
                </Label>
              )}
            </Form.Field>
          </Form>
        </Segment>
        {user && (
          <Segment color="teal" raised style={{ overflow: 'auto', maxHeight: '65vh' }}>
            {messages.slice(0).reverse().map(msg => (
              <Message key={`chat.msg.${msg._id}`} raised size="tiny">
                {msg.sentBy.email}
                :&nbsp;&nbsp;
                {msg.text}
              </Message>
            ))}
          </Segment>
        )}
      </Container>
    );
  }
}

export default ChatFeathers;
