const {User} = require('../models')


const userData = [
    {
        id: 1,
        username: 'Robert',
        password: 'Robert123',
    },
    {
        id: 2,
        username: 'Greg',
        password: 'Greg123',
    },
    {
        id: 3,
        username: 'Bobert',
        password: 'Bobert123',
    },
]

const seedUser = async () => User.bulkCreate(userData);

module.exports = seedUser;