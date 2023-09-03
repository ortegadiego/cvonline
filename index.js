const express = require('express')
const provinciaRoutes = require('./src/routes/provincia-routes')
const localidadRoutes = require('./src/routes/localidad-routes')
const idiomaRoutes = require('./src/routes/idiomas_routes')
const rubroRoutes = require('./src/routes/rubro-routes')
const curriculumRoutes = require('./src/routes/curriculum-routes')
const { errorHandlerMiddleware } = require('./src/middlewares/error-handler')
const { initializeAuthentication } = require('./src/auth/auth')
const dotenv = require('dotenv');
dotenv.config({path:'./src/env/.env'})


const app = express()
const port = process.env.APP_PORT

initializeAuthentication()

app.use(express.json())
app.use('/provincia', provinciaRoutes)
app.use('/localidad', localidadRoutes)
app.use('/idiomas', idiomaRoutes)
app.use('/rubro', rubroRoutes)
app.use('/curriculum', curriculumRoutes)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log("API con express corriendo en el puerto " + port)
})