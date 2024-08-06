const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        DIR = path.join(__dirname, '../../assets');
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const modifiedFileName = 'profile_' + Date.now() + '_' + file.originalname;        
        cb(null, modifiedFileName);
    }    
});

let upload = multer({ 
    storage: storage    
});

module.exports = upload;