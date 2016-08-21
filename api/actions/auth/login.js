import { createValidatorPromise as createValidator, required, email } from '../../utils/validation';

export default function login(req) {
  return new Promise((resolve, reject) => {
    const user = {
      email: req.body.email,
      password: req.body.password
    };

    createValidator({
      email: [required, email],
      password: [required]
    })(user)
      .catch(err => reject(err));

    req.session.user = user;
    resolve(user);
  });
}
