

export default function SocketController(socket){
    function disconnect(){
        console.log(`User ${socket.id} has disconnected`)
    }

    function sendMessage(data){
        console.log(data)
    }

    return {
        disconnect,
        sendMessage
    }
}