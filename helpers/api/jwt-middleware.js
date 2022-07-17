const expressJwt = require('express-jwt');
const util = require('util');

export { jwtMiddleware };

const jwtMiddleware = (req, res) => {
  const middleware = expressJwt({
    secret: process.env.AUTH_SECRET,
    algorithms: ['HS256'],
  }).unless({
    path: ['/api/bot/servers'],
  });
  return util.promisify(middleware)(req, res);
};
