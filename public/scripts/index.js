import { controllerEmit, controllerOn } from "./controllers/socketController.js"

const mainForm = document.querySelector('form')
const inputMessage = document.getElementById('message')
const socket = io()

socket.on('connect', controllerOn(socket).connect)
socket.on('disconnect', controllerOn(socket).disconnect)
socket.on('init', controllerOn(socket).init)

mainForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const myDate = new Date()
    const dayNow = myDate.getDate()
    const monthNow = (date) => {
        let month = parseInt(date.getMonth())+1
        if (month < 10) month = `0${month}` 
        return month
    }
    const yearNow = myDate.getFullYear()
    const dateNow = `${dayNow}/${monthNow(myDate)}/${yearNow}`
    console.log(dateNow)
    const dataToSend = {
        id: socket.id,
        message: inputMessage.value,
        date: dateNow
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
