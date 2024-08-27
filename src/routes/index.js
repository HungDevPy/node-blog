const newRouter = require('./news'); // Ensure the correct path
const siteRouter=require('./site')
function route(app) {
    // Home route
    
    // News route
    app.use('/news', newRouter); // This will use the router defined in news.js
    app.use('/',siteRouter);
}

module.exports = route;
