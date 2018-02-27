/**
 * APP central Routes Configuration
*/
const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes();

routes.add('search', '/search/:keyword');
routes.add('channels', '/channels/:category');
