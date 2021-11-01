// for import css from modules
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: '0736b',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        PRODUCTION: false
    }
});