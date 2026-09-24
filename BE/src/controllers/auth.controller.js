require("dotenv").config();

const userModel = require("../model/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// ************************* register a new user  *******************//
const register = async (req, res) => {
  const {
    name,
    email,
    password,
    phone,
    dateofBirth,
    gender,
    profileImage,
    address,
    role,
    isVerified,
    isActive,
    socialLinks,
    profession,
    company,
    skill,
    education,
    experience,
  } = req.body;

  const isExistingUser = await userModel.findOne({ email });

  if (isExistingUser) {
    return res.status(409).json({
      succes: false,
      message: "User is already exist in the syastem 😊",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
    phone,
    dateofBirth,
    gender,
    profileImage,
    address,
    role,
    isVerified,
    isActive,
    socialLinks,
    profession,
    company,
    skill,
    education,
    experience,
  });
  res.status(201).json({
    succes: true,
    message: "User create succesully ",
    user,
  });
};

// ***************              ? This is the login api data

const login = async (req, res) => {
  const { email, password } = req.body;
  const isUserExist = await userModel.findOne({ email });
  const isPasswordisOk = await bcrypt.compare(password, isUserExist.password);
  if (!isUserExist) {
    return res.status(404).json({
      succes: false,
      message: "User is not exist plese go and register first then login ",
    });
  }
  if (!isPasswordisOk) {
    return res.status(404).json({
      succes: false,
      message: "Password is incorrect pleas check you password ",
    });
  }
  const token = jwt.sign({ userId: isUserExist._id, email }, JWT_SECRET);

  return res.status(201).json({
    succes: true,
    message: "user login succesfully",
    email: email,
    token: token,
  });
};

// ? This is the logout api data
const logout = async (req, res) => {
  res.send("This is the logout page ");
};

const refresh = async (req, res) => {};

const me = async (req, res) => {};

const forgot_password = async (req, res) => {
  const { email, newPassword } = req.body;
  const isUserExist = await userModel.findOne({ email });
  const hasPassword = await bcrypt.hash(newPassword, 10);
  if (!isUserExist) {
    return res.status(404).json({
      succes: false,
      message: "User is not exist plese go and register first then login ",
    });
  }
  await userModel.updateOne(
    {
      email,
    },
    {
      $set: { password: hasPassword },
    },
  );


  return res.status(201).json({
    succes: true,
    message:"Password is reset succesfully ",
    
  })
};

const reset_password = async (req, res) => {};

const verify_email = async (req, res) => {};

const resend_verification = async (req, res) => {};

const change_password = async (req, res) => {};

const sessions = async (req, res) => {};
const sessions_id = async (req, res) => {};
const authController = {
  register,
  login,
  logout,
  refresh,
  me,
  forgot_password,
  reset_password,
  verify_email,
  resend_verification,
  change_password,
  sessions,
  sessions_id,
};

module.exports = authController;
