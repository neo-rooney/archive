const http = require('http'); //
const fs = require('fs')

const hostname = 'localhost';
const port = 3000;

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const server = http.createServer((req, res) => {
  const cookie = parseCookies(req.headers.cookie)
  console.log(req.url, cookie)
  fs.readFile('./index.html', (err, data)=>{
    if(err){
      throw err
    }
    res.writeHead(200, {'Set-Cookie' : 'testcookie=rooney'})
    res.end(data)
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});