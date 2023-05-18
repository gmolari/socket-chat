import { router as userRoutes } from "./routes/userRoutes.js"
import { router as chatRoutes } from "./routes/chatRoutes.js"
import SocketController from './controller/SocketController.js'
import http from 'http'
import express from "express"
import cors from 'cors'
import { Server } from "socket.io"

//instantiating the app
const app = express()

//creating the server to socket
const server = http.createServer(app)

//instantiating the io to chat
const io = new Server(server)

//using cors
app.use(cors())

//using the public folder to static new page
app.use('/chat', express.static('public'))

//interpreting json/body request
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//using router to manage the routes
app.use(express.Router())

//setting routes to use the routes archives
app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

const users = []
const messages = {}

//connecting socket.io
io.on('connection', SocketController(messages, users).socketConnection);

//starting app on port 3000
server.listen(3000, () => {
    console.log(`Server started at: http://localhost:3000/chat`)
})
