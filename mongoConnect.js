const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/amks');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Coxexão aberta');
  // we're connected!
});
