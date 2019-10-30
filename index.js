const express = require('express');
const path = require('path');

const app = express();

const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Express app listening on http://localhost:${port}`));
