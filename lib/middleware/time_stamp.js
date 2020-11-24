const dayjs = require("dayjs");

// Adds timestamp property to req.body
// time_stamp matches sql field
module.exports = (req, res, next) => {
  req.body.time_stamp = dayjs().format("YYYY-MM-DD hh:mm:ss");

  next();
};
