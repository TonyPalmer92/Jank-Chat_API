const Message = require("../../models/Message");

function postMessage(req, res) {
  const new_message = new Message(req.body);

  Message.postMessage(new_message, (err, result) => {
    if (err) {
      console.error("Caught in controller.postmessage cb:", err);
      res.send({ error: err });
    }

    res.send({
      msg: "Record successfully added to the Database",
      data: result,
    });
  });
}

module.exports = {
  postMessage,
};
