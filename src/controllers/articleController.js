// src/controllers/articleController.js
const prisma = require('../prismaClient');

const createArticle = async (req, res) => {
  const { title, content, featured_image } = req.body;
  const { user_id } = req.user;

  try {
    const article = await prisma.article.create({
      data: {
        author_id: user_id,
        title,
        content,
        featured_image,
      },
    });
    res.status(201).json({ message: 'Article created', article });
  } catch (error) {
    res.status(500).json({ error: 'Error creating article' });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await prisma.article.findMany();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching articles' });
  }
};

module.exports = { createArticle, getArticles };
