const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Kubernetes!</h1>
    <p>Hostname: ${os.hostname()}</p>
    <p>Date: ${new Date()}</p>
  `);
});

// CPU intensive endpoint for testing HPA
app.get('/cpu-load', (req, res) => {
  const start = Date.now();
  // Simulate CPU load
  while (Date.now() - start < 100) {
    Math.random() * Math.random();
  }
  res.send(`CPU load generated on ${os.hostname()}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});