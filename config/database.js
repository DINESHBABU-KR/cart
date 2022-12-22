const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LO, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
