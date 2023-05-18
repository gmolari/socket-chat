
function controllerOn(socket) {
    function connect(){
        console.log(`USER ${socket.id} HAS CONNECTED`)
    }

    function disconnect(){
        // console.log(`USER ${socket.id} HAS DISCONNECTED`)
    }

    function init(data){
        // console.log(data)
    }

    function receiveMessage(data){ 
        console.log('Receiving message')
    }

    return {
        connect,
        disconnect,
        init,
        receiveMessage
    }
}

function controllerEmit(socket) {

    function sendMessage(data){
        socket.emit('send-msg-cl-to-sv', data)
    }

    return {
        sendMessage
    }
}

export {
    controllerOn,
    controllerEmit
}