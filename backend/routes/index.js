/**
 * API endpoints will be defined here
 */
const dashboard = require('../controllers/dashboardController');

module.exports = (app) => {



app.route('/user').post(dashboard.addUser)
app.route('/user').get( dashboard.fetchUser)

}