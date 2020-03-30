const fs = require('fs'),
      path = require('path');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var html = fs.readFileSync(path.join(__dirname, '../open-api-doc.html'), 'utf8');

    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: html
    };
};