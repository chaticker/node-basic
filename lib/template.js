module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}

const express = require('express')
const app = express()
const port = 3000

// GET method route
app.get('/', function (request, response) {
  response.send('GET request to the homepage');
});

// POST method route
app.post('/', function (request, response) {
  response.send('POST request to the homepage');
});

app.listen(3000, function() {
  console.log(`Example app listening at http://localhost:${port}`)
})