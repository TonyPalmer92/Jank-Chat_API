// Create util functions below
function formatConsoleError(err, msg) {
  console.log("======================");
  console.log(msg);
  console.log("======================");
  console.log(err);
  console.log("======================");
}

module.exports = {
  formatConsoleError,
};
