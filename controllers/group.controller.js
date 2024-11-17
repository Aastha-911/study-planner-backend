const Group = require('../models/Group');

exports.createGroup = async (req, res) => {
    try {
        const { name } = req.body;
        const group = new Group({ name, createdBy: req.user.id });
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getGroups = async (req, res) => {
    try {
        const groups = await Group.find({ members: req.user.id }).populate('members');
        res.json(groups);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
