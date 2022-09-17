const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");
const {users} = require("../database");
const bcrypt = require("bcrypt");

router.post("/", [
    check("email", "Please enter valid email").isEmail(),
    check("password", "Enter valid password").isLength({min: 6})
], async (req, res) => {
    const {email, password} = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    let user = users.find((user) => {
        return user.email === email;
    })
    if(user){
        res.status(400).json({
            "error": [
                {
                    "msg":"User already exists"
                }
            ]
        })
    }

    let hashedPassword = await bcrypt.hash(password, 10);
    users.push({
        email,
        password: hashedPassword
    })
    res.send("Authentication Successful");
});

router.get("/all", (req, res) => {
    res.json(users);
})

module.exports = router;