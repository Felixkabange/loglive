const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const { sequelize } = require('./models'); // Import the sequelize instance

// Middleware to parse JSON bodies
app.use(express.json());

// Add your userRoutes to the Express application
app.use('/api/users', userRoutes);

// Sync models with the database
sequelize.sync().then(() => {
  console.log("DB Synced");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

