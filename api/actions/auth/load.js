export default function load(req) {
  return req.session.user || null;
}
