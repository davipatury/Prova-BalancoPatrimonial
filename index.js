const express = require('express')
const path = require('path')

const balanceRoute = require('./src/balanceRoute.js')

const app = express()
app.get('/balance', balanceRoute)
app.get('/balance/:id', balanceRoute)
app.get('/demo', (_, res) => res.sendFile(path.join(__dirname, '/src/pages/demo.html')))
app.listen(8080, () => console.log('API rodando na porta 8080...'))
