import users from './users';

export default function services() {
  const app = this;

  app.configure(users);
}
