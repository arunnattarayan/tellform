'use strict';

var config = require('../../config/config');

/**cd
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.form = function(req, res) {
	console.log('\n\n\nRENDERING FORM\n\n\n');
	//Allow form to be embeded
	res.removeHeader('X-Frame-Options');

	res.render('form', {
		user: req.user || null,
		request: req
	});
};
