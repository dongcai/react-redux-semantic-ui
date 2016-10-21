export default function plugins(options = {}) {
  return () => {
    const app = this;

    app.configure(require('./chat/plugin').call(app, options.chat));
  };
}
