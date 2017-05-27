express = require('express')
helmet = require('helmet')
compression = require('compression')
http = require('http')
server = http.Server(app)
app = express()

app.listen(3000)

app.use(helmet())
app.use(compression())
app.use(express.static('public'))
