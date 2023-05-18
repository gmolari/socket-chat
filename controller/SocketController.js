export default function SocketController(messages, users){
    function socketConnection(socket) {
        function disconnect(){
            console.log(`User ${socket.id} has disconnected`)
        }
    
        function sendMessage(data){
            const {id, date, message} = data
            if (messages[id]) messages[id].push({date, message})
            else messages[id] = [{date, message}]
            console.log('messages:',messages)
        }
    
        function init(){
            socket.emit('init', messages)
        }

        console.log(`User ${socket.id} has connected`)
        init()

        socket.on('disconnect', disconnect)
        socket.on('send-message', sendMessage)

        return {
            disconnect,
            sendMessage,
            init
        }
    }

    return {
        socketConnection,
    }
}