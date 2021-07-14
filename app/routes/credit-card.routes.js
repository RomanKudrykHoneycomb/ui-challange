module.exports = app => {
  const creditCards = require("../controllers/credit-cards.controller.js");

  var router = require("express").Router();

  router.post("/", creditCards.create);
  router.get("/", creditCards.getAll);

  app.use("/api/credit-cards", router);
};
