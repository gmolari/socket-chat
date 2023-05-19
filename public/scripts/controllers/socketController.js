
function controllerOn(socket, messages, chatElement, elementMessage) {
    function connect(){
        console.log(`USER ${socket.id} HAS CONNECTED`)
    }

    function disconnect(){
        // console.log(`USER ${socket.id} HAS DISCONNECTED`)
    }

    function init(data){
        console.log(data.messages)
        updateMessages(data.messages)
    }

    function updateMessages(data){
        elementMessage = ''
        for(const i in data){
            for(const j in data[i].messages){
                messages.push(data[i].messages[j])
            }
        }
        
        for(const i in messages){
            const message = messages[i].message 
            elementMessage += `<div class="container-new-message"> <div class="thisMessage"> ${message} </div> </div>`
        }
        // 
        console.log(messages)
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