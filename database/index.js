const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOST || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || undefined,
  database: process.env.RDS_DATABASE || 'HRR43_FEC',
  port: process.env.RDS_PORT || 3307,
});

connection.connect((err) => {
  if (err) {
    console.log(err.stack);
    return;
  } else {
    console.log('connected to database');
  }

});

// get a hotel's record
const getTargetHotelInfo = (id, callback) => {
  connection.query(`SELECT * FROM hotels WHERE id=${id}`, (error, results) => {
    if (error) callback(error, null);
    callback(null,results);
  })
}

// get date_premiums for each day of the proposed stay
const getDatePremiumsForStay = (hotel, checkIn, checkOut, callback) => {
  connection.query(`SELECT * FROM dates WHERE id>=${checkIn} AND id<=${checkOut}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null,results);
    }
  })
}

// get all the site records
const getSites = (hotel, averageDatePremium, callback) => {
  connection.query(`SELECT * FROM sites`, (error, results) => {
    if (error) callback(error, null);
    callback(null,results);
  })
}

module.exports = {
  connection,
  getTargetHotelInfo,
  getDatePremiumsForStay,
  getSites
}
