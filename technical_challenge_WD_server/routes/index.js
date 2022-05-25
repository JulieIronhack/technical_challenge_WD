module.exports = app => {

    // PHONE ROUTES
    const phoneRoutes = require('./phone.routes')
    app.use('/api/phones', phoneRoutes)

}