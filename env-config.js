const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://api.example.com' : 'https://localhost:8080',
  'process.env.GA_ID': 'UA-114220861-1',
  'process.env.APP_PAGE_TITLE': '%TITLE% - Alexander Street Video',
};
