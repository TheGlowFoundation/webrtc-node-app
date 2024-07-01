const express = require('express');
const router = express.Router();

let context = {}


router.get(
    '/',
    function (req, res, next) {
        let room = {
            name: "Lazaro",
            status: "online",
            received: "Hello Laz",
            sent: "Hello Nodius"
        }
        context = {
            title: 'Chats',
            public: [room, room],
            // room: room,
            chats: false
        }
        res.render('chat', context);
    }
)

router.get(
    '/:room',
    function (req, res, next) {
        let room_name = req.params.room
        let room = {
            name: "Lazaro",
            status: "online",
            received: "Hello Laz",
            sent: "Hello Nodius"
        }
        context = {
            title: `${room.name} | Chats`,
            room: room,
            chats: true
        }
        res.render('chat', context)
    }
)

module.exports = router