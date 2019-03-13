//require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');
const port = 3000;

app.use('/scripts',express.static(path.resolve(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/musicplayer/*', proxy({ target: 'http://54.242.57.180', changeOrigin: true }));
app.use('/api/description/*', proxy({ target: 'http://54.175.49.234', changeOrigin: true }));
app.use('/api/comments/*', proxy({ target: 'http:///54.80.244.244', changeOrigin: true }));
app.use('/api/sidebar/*', proxy({ target: 'http://3.91.101.162', changeOrigin: true }));
app.use('/graphql', proxy({ target: 'http://3.91.101.162', changeOrigin: true }));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});