const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('react_project/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'react_project', 'build', 'index.html'));
  });
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
<<<<<<< HEAD
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT !!1!77' });
=======
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT !!!177' });
>>>>>>> 5814554afcaa4238b58f604443c8f69bc8342194
});
