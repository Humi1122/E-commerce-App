const express = require("express");
const { userSignUp, userLogIn, userDelete } = require("../controllers/users");
const router = express.Router();



router.post("/signup", userSignUp );

router.post("/login", userLogIn);

router.delete("/delete/:id",userDelete );



module.exports = router;