const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDatabase = () => {
  const db =
    'mongodb+srv://dineshbabuKR:dinadb1511%40@backend.qehfmd1.mongodb.net/?retryWrites=true&w=majority';
  mongoose
    .connect(db, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log('success the host is' + con.connnection.host);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
