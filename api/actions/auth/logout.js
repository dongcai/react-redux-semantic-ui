export default function logout(req) {
  return new Promise(resolve => {
    if (req.session) {
      req.session.destroy(() => {
        req.session = null;
        return resolve(null);
      });
    }
  });
}
