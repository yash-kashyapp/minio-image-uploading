require('dotenv').config();

const fs = require('fs');
const minIoClient = require('../config/minIo.config');

let bucketName = process.env.BUCKET_NAME
const uploadToMinio = (req, res) => {      
    let file = req.file;    
    const metaData = {
        'Content-Type': file.mimetype,
        'X-Amz-Meta-Testing': '1234',
    };                
    minIoClient.fPutObject(bucketName, file.filename, file.path, metaData, (err, etag) => {
        if (err) {
            return res.status(500).send(err);
        }
        fs.unlinkSync(file.path);
        res.json({response: `File ${file.filename} uploaded successfully.`});
    });    
};

module.exports = { uploadToMinio }