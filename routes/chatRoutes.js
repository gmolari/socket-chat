import ChatController from '../controller/ChatController.js';
import express from 'express'

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send({pinx: '2 pinx mane'})
})

export {router}