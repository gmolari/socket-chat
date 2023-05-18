

export default function SocketController(socket){
    function disconnect(){
        console.log(`User ${socket.id} has disconnected`)
    }

    function sendMessage(data){
        console.log(data)
    }

    function init(data){
        socket.emit('init', data)
    }

    return {
        disconnect,
        sendMessage,
        init
    }
}