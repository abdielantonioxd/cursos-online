const mongoose = require("mongoose");
const db = 'mongodb+srv://abdiel:1997@cluster0-xg7r9.mongodb.net/curso?retryWrites=true&w=majority'
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('PLUGDO MongoDB connected...'))
  .catch(err => console.log(err));

module.exports = mongoose; 