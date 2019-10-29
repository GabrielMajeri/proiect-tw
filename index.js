const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const loggingMiddleware = (req, _, next) => {
    const { method, url } = req;
    const ipAddress = req.connection.remoteAddress;
    console.log(`${method} ${url} - ${ipAddress}`);
    next();
};
app.use(loggingMiddleware);

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Express app listening on http://localhost:${port}`));
