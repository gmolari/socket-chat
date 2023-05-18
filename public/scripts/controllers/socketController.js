
function controllerOn(socket) {
    function connect(){
        console.log(`USER ${socket.id} HAS CONNECTED`)
    }

    function disconnect(){
        console.log(`USER ${socket.id} HAS DISCONNECTED`)
    }

    function init(data){
        console.log(data)
    }

    return {
        connect,
        disconnect,
        init
    }
}

function controllerEmit(socket) {

    function sendMessage(data){
        socket.emit('send-message', data)
    }

    return {
        sendMessage
    }
}

export {
    controllerOn,
    controllerEmit
}