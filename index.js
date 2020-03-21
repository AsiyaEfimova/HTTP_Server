const http = require('http');
const GetDate = require('./utils/date');
require('dotenv').config();

let connections = [];
let DELAY = parseFloat(process.env.DELAY);
let LIMIT = parseFloat(process.env.LIMIT);
let timer;

function RunDate() {
    if (!timer) {
        timer = setInterval(function run() {
            connections.map((item, i) => {
                item.tick++;
                let date = GetDate();
                if (item.tick > LIMIT) {
                    item.response.write(`End time: ${date}\n`);
                    item.response.end();
                } else {
                    item.response.write(`${item.tick}: ${date}\n`);
                }
            });
            connections = connections.filter(x => x.tick <= LIMIT);
            if (!connections.length) {
                clearInterval(timer);
            }
        }, DELAY);
    }
}

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf8', "Transfer-Encoding": "chunked" })
        connections.push({ response: response, tick: 0 });
        RunDate();
    })
    .listen(3000, (err) => {
        if (err) {
            return console.log('something bad happened', err)
        }
        console.log('Start server on port 3000')
    });