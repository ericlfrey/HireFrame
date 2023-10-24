const express = require('express');

const app = express();

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect(`https://${req.headers.host}${req.url}`);
  } else {
    next();
  }
});

// Your other routes and middleware for "HireFrame" go here

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
