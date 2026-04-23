const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const analysisRoutes = require('./routes/analysis');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/analysis', analysisRoutes);

app.get('/', (req, res) => {
  res.send('AI Dog Health Monitoring API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
