const { Message } = require('../../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    Message.findAll({
        attributes: { exclude: ['updatedAt'] }
    })
        .then(dbMsgData => res.status(200).json(dbMsgData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Message.findOne({
        attributes: { exclude: ['updatedAt'] },
        where: {
            id: req.params.id
        }
    })
        .then(dbMsgData => {
            if (!dbMsgData) {
                res.status(404).json({ message: 'Message not found' });
                return;
            }
            res.status(200).json(dbMsgData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', ({ body }, res) => {
    Message.create({
        text: body.text,
        user_id: body.user_id,
        user_generated: body.user_generated
    })
        .then(dbMsgData => res.status(200).json(dbMsgData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;