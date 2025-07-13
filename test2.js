const express = require('express');
const app = express();

// Simulated untrusted user input
app.get('/run', (req, res) => {
  const userInput = req.query.cmd;
  const result = eval(userInput); // This should DEFINITELY be flagged by CodeQL
  res.send(`Result: ${result}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
