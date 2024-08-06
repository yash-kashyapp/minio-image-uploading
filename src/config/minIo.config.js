require('dotenv').config();
const Minio = require('minio');

const MinIoClient = new Minio.Client({
    endPoint: process.env.MINIO_HOST,
    port: Number(process.env.MINIO_PORT),
    useSSL: false,
    accessKey: process.env.MINIO_ACCESSKEY,
    secretKey: process.env.MINIO_SECRETKEY
});
module.exports = MinIoClient;