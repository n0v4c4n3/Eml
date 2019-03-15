var MailParser = require('mailparser').MailParser;

module.exports = {
	read: function read(req, res) {
		var mailparser = new MailParser();
		mailparser.on('end', function(email) {
			res.json(email);
		});

		mailparser.write(req.files.file.buffer.toString());
		mailparser.end();
	}
};
