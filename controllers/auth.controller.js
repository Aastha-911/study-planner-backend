const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};