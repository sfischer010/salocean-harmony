const SMTPServer = require('smtp-server').SMTPServer;

const server = new SMTPServer({
  // Secure connection settings
  secure: false,
  // Authentication settings
  authMethods: ['PLAIN', 'LOGIN', 'CRAM-MD5'],
  onData(stream, session, callback) {
    stream.pipe(process.stdout); // Print message to console
    stream.on('end', callback);
  },
  // Define onAuth function to authenticate users
  onAuth(auth, session, callback) {
    // Accept all mail
    callback(null, { user: true });
  }
});

server.listen(25, () => {
  console.log('SMTP Server is running on port 25');
});