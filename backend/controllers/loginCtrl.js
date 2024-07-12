const asyncHandler = require("express-async-handler");
const User = require("../model/login");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userController = {
    // Register
    register: asyncHandler(async (req, res) => {
        const { username, email, password } = req.body;

        // Validate
        if (!username || !email || !password) {
            throw new Error("Please all fields are required");
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error("User already exists");
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const userCreated = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        // Send the response
        res.json({
            message:"registration success",
            username: userCreated.username,
            email: userCreated.email,
            id: userCreated._id,
        });
        console.log(userCreated);
    }),

    // Login
    login: asyncHandler(async (req, res) => {
        // Get the user data
        const { email, password } = req.body;

        // Check if email is valid
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Invalid login credentials");
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid login credentials");
        }

        // Generate a token
        const token = jwt.sign({ id: user._id }, "kantool", {
            expiresIn: "15d",
        });
        console.log(token);

        // Send the response
        res.json({
            message: 'Login Success',
            token,
            id: user._id,
            email: user.email,
            username: user.username,
        });
    }),
};

module.exports = userController;