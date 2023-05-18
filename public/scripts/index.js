import { controllerEmit, controllerOn } from "./controllers/socketController.js"

const mainForm = document.querySelector('form')
const inputMessage = document.getElementById('message')
const socket = io()

socket.on('connect', controllerOn(socket).connect)
socket.on('disconnect', controllerOn(socket).disconnect)
socket.on('init', controllerOn(socket).init)
socket.on('receive-message', controllerOn(socket).receiveMessage)

mainForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const myDate = new Date()
    //parsing date
    const dayNow = myDate.getDate()
    //parsing month
    const monthNow = (date) => {
        //month is jan = 0, feb = 1
        let month = parseInt(date.getMonth())+1
        //if month < 10 get "0" before the number
        if (month < 10) month = `0${month}`
        return month
    }
    const yearNow = myDate.getFullYear()
    const hoursNow = myDate.getHours()
    const minutesNow = myDate.getMinutes()
    const secondsNow = myDate.getSeconds()

    const hour = `${hoursNow}:${minutesNow}:${secondsNow}`
    const date = `${dayNow}/${monthNow(myDate)}/${yearNow}`
    const dataToSend = {
        id: socket.id,
        message: inputMessage.value,
        date: [date, hour]
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
