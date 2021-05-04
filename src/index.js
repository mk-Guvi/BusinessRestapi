// var http = require("http");
require('../src/config/db.js')
// //create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
const express = require('express')
const app = express()
const cors = require('cors')
const PostRouter = require('./routers/postRouter')
const AuthorRouter = require('./routers/authorRouter')
const BusinessRouter = require('./routers/BusinessRouter')

const AdminRouter = require('./routers/adminRouter')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')

app.get('/', (req, res) => {
  res.send('<h1>Rest API Server!</h1>')
})
app.use(cors())
app.use(bodyparser.json())
app.use(cookieparser())
app.use('/posts', PostRouter)
app.use('/author', AuthorRouter)
app.use('/admin', AdminRouter)
app.use('/business', BusinessRouter)

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running @ 8080')
})
