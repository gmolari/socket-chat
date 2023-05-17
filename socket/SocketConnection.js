import SocketController from "../controller/SocketController.js";

export default function SocketConnection(socket) {
    console.log('a user has connected')
    
    socket.on('disconnect', SocketController().disconnect)
}