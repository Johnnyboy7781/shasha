const seedMessages = require('./message-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n== Database Sync ==\n');
    await seedUsers();
    console.log('\n== Users Seeded ==\n');
    await seedMessages();
    console.log('\n== Messages Seeded ==\n');

    process.exit(0);
};

seedAll();