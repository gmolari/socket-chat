import socketManager from "./socket/socketManager.js"

const mainForm = document.querySelector('form')
const socket = io()

socketManager(socket)

// mainForm.addEventListener('submit', )

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
