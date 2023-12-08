const User = require("../../schemas/user");

const login = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  console.log(name);
  const user = await User.findOne({ name });
  if (user) {
    res.json(user);
  } else {
    const newUser = new User({ name });
    await newUser.save();
    res.json(newUser);
  }
};

module.exports = login;
