const validateBody = (schema) => {
  console.log("schema", schema);
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
    }
    next();
  };

  return func;
};
module.exports = validateBody;
