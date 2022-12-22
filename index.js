const app = require('./app.js');
const dotenv = require('dotenv');
const path = require('path');
const { connect } = require('http2');
const cdb = require('./database.js');

dotenv.config({ path: path.join(__dirname, 'config/config.env') });
cdb();

app.listen(process.env.PORT, () => {
  console.log(`server lisen ${process.env.PORT} and ${process.env.NODE_ENV}`);
});
