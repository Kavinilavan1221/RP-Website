const express = require('express');
const router = express.Router();
const multer = require('multer');
const { analyzeDogHealth } = require('../controllers/analysisController');

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/analyze', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'audio', maxCount: 1 }
]), analyzeDogHealth);

module.exports = router;
