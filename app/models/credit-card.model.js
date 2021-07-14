module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      number: String,
      name: String,
      expiry: String,
      cvc: String,
      issuer: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const CreditCard = mongoose.model("creditCard", schema);
  return CreditCard;
};
