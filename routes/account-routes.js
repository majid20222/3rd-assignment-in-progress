const express = require("express");
const validator = require("express-validator/check");
const {
  getSignupForm,
  postSignupForm,
  getSigninForm,
  postSigninForm,
  getLogout,
} = require("../controllers/accounts-controller");

const router = express.Router();

router.get("/signup", getSignupForm);
router.post("/signup", validator.check("email").isEmail(), postSignupForm);

router.get("/signin", getSigninForm);
router.post("/signin", postSigninForm);

router.get("/logout", getLogout);

module.exports = router;
