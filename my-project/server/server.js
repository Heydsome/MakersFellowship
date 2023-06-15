const express = require('express');
const app = express();
const port = 5000;

app.get('/api/users', (req, res) => {
  // Handle the API request and send the response
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
