const db = require("../models");
const CreditCard = db.creditCards;

exports.create = (req, res) => {
  const creditCard = new CreditCard({
    number: req.body.number,
    name: req.body.name,
    expiry: req.body.expiry,
    cvc: req.body.cvc,
    issuer: req.body.issuer
  });

  // Save CreditCard in the database
  creditCard
    .save(creditCard)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the CreditCard."
      });
    });
};

// Retrieve all CreditCards from the database.
exports.getAll = (req, res) => {
  var condition = {};

  CreditCard.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving creditCards."
      });
    });
};
