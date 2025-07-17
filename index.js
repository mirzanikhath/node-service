const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Root welcome message (optional)
app.get('/', (req, res) => {
  res.send("Node.js Health Service is running.");
});

app.listen(port, () => {
  console.log(`Service is listening on port ${port}`);
});
