const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handle).listen(3000, err => {
    if (err){
      throw err;
    }

    console.log('> Ready on http://localhost:3000');
  });
});
