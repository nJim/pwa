const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to "pretend" the subdirectory '/pwa' to match Github Pages.
app.use((req, res, next) => {
  // Remove the '/pwa' prefix from the URL before processing routes
  req.url = req.url.replace(/^\/pwa/, '');
  next();
});

// Serve static files from the 'public' directory.
app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/pwa`);
});
