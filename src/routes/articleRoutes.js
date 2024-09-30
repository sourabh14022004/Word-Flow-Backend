// src/routes/articleRoutes.js
const express = require('express');
const { createArticle, getArticles } = require('../controllers/articleController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, createArticle);
router.get('/', getArticles);

module.exports = router;
