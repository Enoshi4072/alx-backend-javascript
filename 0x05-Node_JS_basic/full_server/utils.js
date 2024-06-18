import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
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

        resolve(fields);
      }
    });
  });
};
