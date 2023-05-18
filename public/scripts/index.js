import { controllerEmit, controllerOn } from "./controllers/socketController.js"

const mainForm = document.querySelector('form')
const inputMessage = document.getElementById('message')
const socket = io()

socket.on('connect', controllerOn(socket).connect)
socket.on('disconnect', controllerOn(socket).disconnect)
socket.on('init', controllerOn(socket).init)

mainForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const dataToSend = {
        id: socket.id,
        message: inputMessage.value
    }
    controllerEmit(socket).sendMessage(dataToSend)
})

// async (e) => {
//     e.preventDefault()
//     const apiBody = {
//         teste: 'teste'
//     }
//     const dataApi = {
//         method: "POST",
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(apiBody)
//     }
//     const api = await fetch('/api/chat', dataApi)
// }
