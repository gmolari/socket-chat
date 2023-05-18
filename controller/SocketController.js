export default function SocketController(messages, users){
    function socketConnection(socket) {
        function disconnect(){
            console.log(`User ${socket.id} has disconnected`)
            delete users[socket.id]
            console.log(users)
        }
    
        function sendMessage(data){
            const {id, date, message} = data
            if (!message) return
            if (messages[id]) messages[id].push({date, message})
            else messages[id] = [{date, message}]
            
            socket.emit('send-msg-sv-to-cl', {id, date, message})

            console.log('messages:',messages)
        }
    
        function init(){
            socket.emit('init', {messages, users})
        }

        console.log(`User ${socket.id} has connected`)
        users[socket.id] = {nick: ''}
        console.log(users)
        init()

        socket.on('disconnect', disconnect)
        socket.on('send-msg-cl-to-sv', sendMessage)

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