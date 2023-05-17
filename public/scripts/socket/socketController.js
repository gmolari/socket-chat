
function controllerOn(socket) {
    function connect(){
        console.log(`USER ${socket.id} HAS CONNECTED`)
    }

    function disconnect(){
        console.log(`USER ${socket.id} HAS DISCONNECTED`)
    }

    return {
        connect,
        disconnect
    }
}

async function controllerEmit() {

    return {

    }
}

export {
    controllerOn,
    controllerEmit
}