const express = require('express')
const exphbs = require('express-handlebars')
const db = require('./db/connection')
const router = require('./routes/taskRoutes')

app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', router)

db.sync().then(
    app.listen(3000, () => {
        console.log('Conexão estabelecida com sucesso!')
    })
).catch((err) => {
    console.log(err)
})