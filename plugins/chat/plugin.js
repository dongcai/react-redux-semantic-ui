import messages from './services/messages';
import makeDebug from 'debug';

const debug = makeDebug('plugins:chat');

const defaults = {
  messagesEndpoint: '/messages'
};

export default function chat(options) {
  debug('Initializing chat plugin');
  return () => {
    const app = this;
    const config = { ...defaults, options };

    app.configure(messages.bind(app, config));
  };
}
