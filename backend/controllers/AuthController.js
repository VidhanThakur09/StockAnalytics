const User = require("../model/UserModel.js");
const { createSecretToken } = require("../util/SecretToken.js");
const bcrypt = require('bcrypt');

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    // Correct cookie for same-origin (proxied) requests
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Always use secure in production
      path: '/'
      // 'domain' and 'sameSite' are removed to use default same-origin policy
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    console.log("User signed up successfully:", user);
    // next() is not typically needed here unless you have more middleware after this
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during signup", success: false });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' });
    }
    const token = createSecretToken(user._id);

    // Correct cookie for same-origin (proxied) requests
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Always use secure in production
      path: '/'
      // 'domain' and 'sameSite' are removed to use default same-origin policy
    });

    res.status(200).json({ message: "User logged in successfully", success: true });
    // next() is not typically needed here
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login", success: false });
  }
};