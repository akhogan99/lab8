var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */

exports.addRSVP = function(request, response){
var rsvpEmail = request.body.rsvpEmail;
	// Will print to terminal whenever POST is made
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail); // Add to current data

	// Send back data so browser knows it worked
	response.send(rsvpEmail);
};


exports.adminView = function(request, response){
  response.render('rsvp', data);
};
