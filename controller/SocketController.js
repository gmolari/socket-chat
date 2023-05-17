

export default function SocketController(){
    function disconnect(){
        console.log('a use has disconnected')
    }

    return {
        disconnect
    }
}