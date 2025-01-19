const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// Endpoint to save responses
app.post('/', (req, res) => {
  console.log(req.body); // Log the received data
  // You can add logic here to save data to a database or file
  res.json({ message: 'Responses saved successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
