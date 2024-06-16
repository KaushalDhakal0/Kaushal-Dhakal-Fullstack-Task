const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  console.log("===Register User==>", req.body)
//   try {
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ success: false, error: "User already exists" });
//     }
//     user = new User({
//       username,
//       email,
//       password,
//     });
//     await user.save();
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };
//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ success: true, token });
//       }
//     );
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ success: false, error: "Server error" });
//   }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log("===Login User==>", req.body)
//   try {
//     let user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ success: false, error: "Invalid credentials" });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ success: false, error: "Invalid credentials" });
//     }
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };
//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ success: true, token });
//       }
//     );
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ success: false, error: "Server error" });
//   }
};

module.exports = {
  registerUser,
  loginUser,
};
