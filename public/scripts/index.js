import { controllerEmit, controllerOn } from "./controllers/socketController.js"

const mainForm = document.querySelector('form')
const socket = io()

socket.on('connect', controllerOn(socket).connect)
socket.on('disconnect', controllerOn(socket).disconnect)

mainForm.addEventListener('submit', (e) => {
    e.preventDefault()
    controllerEmit(socket).sendMessage({teste:'teste'})
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
