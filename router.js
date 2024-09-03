const express = require('express')
const app = express()

function getRoute(){
    const routerMovie = require('./modules/movie/http_handler')    
    const routerAuth = require('./modules/auth/http_handler')    

    app.use(routerMovie)
    app.use(routerAuth)

    return app
}

module.exports = getRoute