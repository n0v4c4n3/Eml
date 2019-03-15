var ctrl = require('./controllers/index');

module.exports = function(app) {
	app.post('/read', ctrl.read);
};
