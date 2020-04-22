//测试gzip
var compression = require('compression')
const express = require('express')
const path = require('path')
const port = 3000
var app = express();
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => res.sendFile('index.html'))

//尽量在其他中间件前使用compression
app.use(compression());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))