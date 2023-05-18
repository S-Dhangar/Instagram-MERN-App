const express = require('express');
const User = require('./mongo');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Save user to database
    const user = new User({ username, password });
    await user.save();
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to save user' });
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
