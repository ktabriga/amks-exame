const mongoose = require('mongoose');

mongoose.connect('mongodb://root:123@ds039950.mlab.com:39950/amks');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Coxexão aberta');
  // we're connected!
});
