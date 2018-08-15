// Pull in required dependencies
var path = require('path');
var friends = require('../data/friends.js');

// Export API routes--All Friends
module.exports = function(app) {
	app.get('/app/data/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend 
	app.post('/app/data/friends', function(req, res) {
		var friendinfo = req.body;
		var friendresp = friendinfo.scores;

		// how to get best match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000;

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
		
			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < friendresp.length; j++) {
				diff += Math.abs(friends[i].scores[j] - friendresp[j]);
			}

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// new user
		friends.push(friendinfo);

		// Send response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};





