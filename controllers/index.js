const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

const router = require('express').Router();

router.use('/home', homeRoutes); // TODO: Fix weird bug when route is just '/'
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;