module.exports = app => {

    // AUTH ROUTES
    const phonesRoutes = require('./phones.routes')
    app.use('/api/phones', phonesRoutes)

}