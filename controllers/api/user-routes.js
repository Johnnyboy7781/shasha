const { User } = require('../../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', ({ body }, res) => {
    User.create({
        username: body.username,
        password: body.password
    })
        .then(dbUserData => res.status(200).json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: 'User not found' });
                return;
            }
            
            const validPassword = dbUserData.checkPassword(req.body.password);
            if (!validPassword) {
                res.status(400).json({ message: 'Invalid password' });
                return;
            }

            // TODO: Add sessions/cookies 
            res.status(200).json({ message: 'You are now logged in!' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.post('/logout', (req, res) => {
    res.status(200).json({ message: 'You are now logged out!' });
    // TODO: Added sessions/cookies
})

router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;