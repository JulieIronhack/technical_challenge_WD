module.exports = app => {

    const phoneRoutes = require('./phones.routes')
    app.use('/api/phones', phoneRoutes)

    
}