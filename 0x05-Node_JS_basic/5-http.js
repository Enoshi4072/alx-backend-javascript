const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Handling request for the root URL
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Handling request for /students URL
    const databaseFile = process.argv[2]; // Get the database file from command line arguments

    fs.readFile(databaseFile, 'utf8')
      .then((data) => {
        const students = data.trim().split('\n').filter((line) => line.trim() !== '');
        const fields = {};

        students.shift(); // Remove header line

        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(`${firstname} `);
        });

        let response = `This is the list of our students\nNumber of students: ${students.length}\n`;
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
          }
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      })
      .catch((err) => {
        console.error('Error:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      });
  } else {
    // Handling other URLs
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
