import { controllerOn, controllerEmit } from "./socketController.js";

export default async function socketManager(socket) {
    socket.on('connect', controllerOn(socket).connect)
    socket.on('disconnect', controllerOn(socket).disconnect)
}