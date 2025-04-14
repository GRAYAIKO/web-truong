require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;
const IP = process.env.IP || 'localhost';

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://${IP}:${PORT}`);
});

//404 errors
app.use((req, res) => {
  res.status(404).send('Page not found');
});