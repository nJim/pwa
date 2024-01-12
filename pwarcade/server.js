/*
 * Using Express Engine to serve web app.
 *
 * Running a Progressive Web App (PWA) through the file protocol (opening HTML
 * files directly from your local file system without a web server) can lead to
 * certain issues. PWAs often rely on features that are available when served
 * over HTTP or HTTPS, and accessing them through the file protocol may not
 * provide the necessary environment.
 */
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3535;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
