const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('src/public'));

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});