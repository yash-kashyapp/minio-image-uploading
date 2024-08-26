const express = require('express');
const router = express.Router();
const minio = require('../controllers/minIO');
const upload = require('../middleware/multer');

router.post('/uploadFile', upload.single('files'), minio.uploadToMinio);
router.get('/fetchFile', minio.fetchMinIo);

module.exports = router 