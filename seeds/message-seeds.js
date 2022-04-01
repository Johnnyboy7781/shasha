const { Message } = require('../models');

const messageData = [
    {
        text: 'Hello',
        user_id: 1,
        user_generated: true
    },
    {
        text: 'Hi, how are you?',
        user_id: 1,
        user_generated: false
    },
    {
        text: 'Good, you?',
        user_id: 1,
        user_generated: true
    },
    {
        text: 'Good, thank you',
        user_id: 1,
        user_generated: false
    },
    {
        text: 'Hi, nice to meet you!',
        user_id: 2,
        user_generated: true
    },
    {
        text: 'Likewise!',
        user_id: 2,
        user_generated: false
    }
];

const seedMessages = () => Message.bulkCreate(messageData);

module.exports = seedMessages;