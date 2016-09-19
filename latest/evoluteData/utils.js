const mongoose = require('mongoose');

function generateId() {
  var id = new mongoose.Types.ObjectId();
  console.log('New id generated: ' + id);
  return id;
}
module.exports = {
  generateId
};
