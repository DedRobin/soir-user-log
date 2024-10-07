import { createServer } from 'node:http';
import { appendRowToBook, createBook } from './actions.mjs';
import { getFormattedDate } from './services.mjs';

const hostname = '127.0.0.1';
const port = 3000;
const filename = 'visitors';
const path = `${process.cwd()}\\${filename}.xlsx`;

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  if (request.method === 'POST') {
    const chunks = [];
    request.on('data', (chunk) => {
      chunks.push(chunk);
    });
    request.on('end', () => {
      const data = JSON.parse(chunks.join(''));
      const date = getFormattedDate();
      const row = [date, ...Object.values(data)];
      try {
        appendRowToBook(row, path);
      } catch {
        createBook(row, path);
      }
      response.end(JSON.stringify(chunks.join('')));
    });
  } else {
    response.end(JSON.stringify({ error: 'Error' }));
  }
};

const server = createServer(requestListener);

server.listen(port, hostname, () => {
  console.log(`Listening on ${hostname}:${port}`);
});
