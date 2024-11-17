const express = require('express');
const { createGroup, getGroups } = require('../controllers/groupController');
const router = express.Router();

router.post('/create', createGroup);
router.get('/', getGroups);

module.exports = router;
