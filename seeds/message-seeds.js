const { Message } = require('../models');

const messageData = [
    {
        text: 'Hello',
        user_id: 1
    },
    {
        text: 'Hi, how are you?',
        user_id: 1
    },
    {
        text: 'Good, you?',
        user_id: 1
    },
    {
        text: 'Good, thank you',
        user_id: 1
    },
    {
        text: 'Hi, nice to meet you!',
        user_id: 2
    },
    {
        text: 'Likewise!',
        user_id: 2
    }
];

const seedMessages = () => Message.bulkCreate(messageData);

module.exports = seedMessages;