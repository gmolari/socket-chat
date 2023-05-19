
function controllerOn(socket, messages, chatElement, elementMessage) {
    function connect(){
        console.log(`USER ${socket.id} HAS CONNECTED`)
    }

    function disconnect(){
        // console.log(`USER ${socket.id} HAS DISCONNECTED`)
    }

    function init(data){
        updateMessages(data.messages)
    }

    function updateMessages(data){
        for(const i in data){
            const message = data[i].messages.message
            elementMessage += `<div class="container-new-message"> <div class="thisMessage"> ${message} </div> </div>`
        }
        console.log(chatElement)
        chatElement.innerHTML = elementMessage
    }

    return {
        updateMessages,
        connect,
        disconnect,
        init,
    }
}

function controllerEmit(socket) {

    function sendMessage(data){
        console.log('enviando mensagem')
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