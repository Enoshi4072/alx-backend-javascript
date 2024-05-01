// Import the 'fs' (File System) module to work with files.
const fs = require('fs');

// Define a function named countStudents which accepts a 'path' as an argument.
function countStudents(path) {
  // Return a new Promise to handle asynchronous operations.
  return new Promise((resolve, reject) => {
    // Read the content of the file asynchronously.
    fs.readFile(path, 'utf8', (error, data) => {
      // If an error occurs during file reading, reject the Promise with an error message.
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        // Split the data into lines and remove any empty lines.
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Remove the header line.
        lines.shift();

        // Split each line into an array of values (assuming CSV format).
        const students = lines.map((line) => line.split(','));

        // Define an empty object to store students grouped by their fields.
        const fields = {};

        // Iterate through each student record.
        students.forEach((student) => {
          // Extract the field from the student record (assuming it's the fourth column).
          const field = student[3].trim();

          // If the field is encountered for the first time, initialize it with an empty array.
          if (!fields[field]) {
            fields[field] = [];
          }

          // Add the student's first name to the array corresponding to their field.
          fields[field].push(student[0]);
        });

        // Log the total number of students.
        console.log(`Number of students: ${students.length}`);

        // Iterate through each field in the 'fields' object.
        for (const field in fields) {
          // Add an if statement to check if the property belongs to the object itself.
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            // Join the list of first names for the students in the current field.
            const list = fields[field].join(', ');

            // Log the number of students and their first names in the current field.
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
          }
        }

        // Resolve the Promise once all operations are completed.
        resolve();
      }
    });
  });
}

// Export the countStudents function so that it can be imported and used in other modules.
module.exports = countStudents;
