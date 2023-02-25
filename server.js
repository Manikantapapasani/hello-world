var express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
