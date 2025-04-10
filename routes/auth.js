// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.post('/validate', authController.validateToken);

module.exports = router;
