var parts = require('../database/parts'),
  getNextId = require('./getNextId');

var nextId = getNextId(parts);

exports.getParts = function(req, res) {
  res.send(parts);
}

exports.getPartById = function(req, res) {
  var index = req.params.id - 1;
  res.send(parts[index]);
}

exports.getPartsByUser = function(req, res) {
  res.send(parts.filter(part => part.userId === parseInt(req.params.id)))
}

exports.createPart = function(req, res) {
  var newPart = req.body;
  newPart.id = nextId;
  nextId++;
  parts.push(newPart);

  res.send(newPart);
  res.end(); 
}

