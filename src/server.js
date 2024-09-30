// src/server.js
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/articleRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/articles', articleRoutes);

// app.get('/',(req,res)=>{
     
// })


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
