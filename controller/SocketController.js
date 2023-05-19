export default function SocketController(messages, users){
    function socketConnection(socket) {
        function disconnect(){
            delete users[socket.id]
        }
    
        function sendMessage(data){
            const {id, date, message} = data
            if (!message) return

            for(const i in messages){
                if (id == messages[i].id){
                    messages[i].messages.push({date, message})
                    break
                }
            }
            messages.push({id, messages: [{date, message}], nick: ''})

            // if (messages[id]) messages[id].push({date, message})
            // else messages[id] = [{date, message}]
            
            socket.emit('send-msg-sv-to-cl', [{id, nick: '', messages: {date, message}}])

        }
    
        function init(){
            socket.emit('init', {messages, users})
        }

        users[socket.id] = {nick: ''}
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