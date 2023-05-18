const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Shubham:Shubham@cluster0.xkmedfr.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

// Create schema for user model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Create user model
const User = mongoose.model('User', userSchema);

// Export User model
module.exports = User;
