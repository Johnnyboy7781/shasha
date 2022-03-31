const apiRoutes = require('./api')
const router = require('express').Router();

router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;