const express = require("express");
const router = express.Router();
const {
  getRegister,
  registerUser,
  getLogin,
  loginUser,
  logout,
} = require("../controllers/loginController-6");

router.route("/").get(getLogin).post(loginUser);
router.route("/logout").get(logout);
router.route("/register").get(getRegister).post(registerUser);

module.exports = router;
