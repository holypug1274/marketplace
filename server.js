const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Get the folder name from the command line arguments
const folder = process.argv[2] || 'my-app'; // Default to 'my-app' if no argument is provided

// Serve the static files from the specified app
app.use(express.static(path.join(__dirname, `dist/apps/${folder}`)));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, `dist/apps/${folder}/index.html`));
});

app.listen(PORT, () => {
  console.log(`Server is running for ${folder} on http://localhost:${PORT}`);
});
