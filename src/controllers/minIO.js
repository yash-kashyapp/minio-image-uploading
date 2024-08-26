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

/* To Fetch Image object from minio storage */

const fetchMinIo = async (req, res) => {
    let fileName = req.file;
    try {        
        let response = await minIoClient.presignedGetObject(bucketName, fileName);
        return response;
    } catch (error) {
        throw new Error(error);
    }    
}

module.exports = { uploadToMinio, fetchMinIo }