const {User} = require('../models')


const userData = [
    {
        id: 1,
        username: 'Robert',
        email: 'Robert@email.com',
        password: 'Robert123',
    },
    {
        id: 2,
        username: 'Greg',
        email: 'Greg@email.com',
        password: 'Greg123',
    },
    {
        id: 3,
        username: 'Bobert',
        email: 'Bobert@email.com',
        password: 'Bobert123',
    },
]

const seedUser = async () => User.bulkCreate(userData);

module.exports = seedUser;