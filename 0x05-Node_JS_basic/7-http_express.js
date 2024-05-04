const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];

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
        fields[field].push(`${firstname}`);
      });

      let response = `This is the list of our students\nNumber of students: ${students.length}\n`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        }
      }

      res.type('text/plain');
      res.send(response);
    })
    .catch((err) => {
      console.error('Error:', err);
      res.status(500).send('Cannot load the database');
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
