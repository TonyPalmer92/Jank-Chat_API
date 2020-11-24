const dbConn = require("../config/database");

// Return a message object
class Message {
  constructor(object) {
    this.Room_Id = object.Room_Id;
    this.display_name = object.display_name;
    this.msg = object.msg;
    this.time_stamp = object.time_stamp;
  }

  // Static methods are used on the class NOT the instance of the class
  static postMessage(new_record, callbackFn) {
    const query = "INSERT INTO messages set ?";

    dbConn.query(query, new_record, function (err, result) {
      if (err) return callbackFn(err, null);

      callbackFn(null, result);
    });
  }

  // Methods used on the instance of the class.
  testMethod() {
    // Enter code...
  }
}

module.exports = Message;
