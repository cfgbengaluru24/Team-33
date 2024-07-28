const bcrypt = require("bcrypt");
const registerRouter = require("express").Router();
const User = require("../models/user");

registerRouter.post("/", async (request, response) => {
  const { username, name, password, role } = request.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = new User({
    username,
    name,
    passwordHash,
    role,
  });
  const savedUser = await user.save();
  response.status(201).json(savedUser);
});

module.exports = registerRouter;
