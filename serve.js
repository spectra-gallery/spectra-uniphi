const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const docsPath = path.join(__dirname, 'docs');
app.use(express.static(docsPath));

app.listen(port, () => {
  console.log(`Serving docs at http://localhost:${port}`);
});
