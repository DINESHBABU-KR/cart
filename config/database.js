const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LO, {
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
