const express= require("express")
const authController= require("../controllers/auth.controller.js")
const route= express.Router();

route.post("/register",authController.register)
route.post("/login",authController.login)
route.post("/logout",authController.logout)
route.post("/refresh",authController.refresh)
route.get("/me",authController.me)
route.post("/forgot-password",authController.forgot_password)
route.post("/reset-password",authController.reset_password)
route.post("/verify-email",authController.verify_email)
route.post("/resend-verification",authController.resend_verification)
route.post("/change-password",authController.change_password)
route.get("/sessions",authController.sessions)
route.delete("/sessions/:id",authController.sessions_id)

module.exports=route