import SocketController from "../controller/SocketController.js";

export default function SocketConnection(socket, messages) {
    console.log(`User ${socket.id} has connected`)
    SocketController(socket).init(messages)

    socket.on('disconnect', SocketController(socket).disconnect)
    socket.on('send-message', SocketController(socket).sendMessage)
}