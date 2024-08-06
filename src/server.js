require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const express = require('express');
const app = express();

app.use('/', require('./routes/secured.route'));

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
})