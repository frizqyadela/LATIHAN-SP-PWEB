const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set view engine to hbs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the profile page
app.get('/auth/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/user/profile', (req, res) => {
  res.render('profile', { title: 'Profil Pengguna' });
});

app.post('/Profile', (req, res) => {
  res.render('profile', { title: 'Profil Pengguna' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});