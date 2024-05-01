const fs = require('fs');

// Define the countStudents function
function countStudents(path) {
    // Return a promise to handle asynchronous operations
    return new Promise((resolve, reject) => {
        // Read the file asynchronously
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                // If an error occurs, reject the promise with an error message
                reject(new Error('Cannot load the database'));
            } else {
                // Split the data into lines and remove empty lines
                const lines = data.split('\n').filter(line => line.trim() !== '');
                // Remove the header line
                lines.shift();

                const students = [];
                const fields = {};

                // Iterate through each line (student record)
                lines.forEach(line => {
                    const [firstname, lastname, age, field] = line.split(',').map(item => item.trim());
                    // Skip empty lines or lines with less than 4 fields
                    if (firstname && lastname && age && field) {
                        students.push({ firstname, lastname, age, field });

                        // If the field is encountered for the first time, initialize it with an empty array
                        if (!fields[field]) {
                            fields[field] = [];
                        }
                        // Add the student's firstname to the array corresponding to their field
                        fields[field].push(firstname);
                    }
                });

                // Log the total number of students
                console.log(`Number of students: ${students.length}`);

                // Log the number of students in each field
                for (const field in fields) {
                    const list = fields[field].join(', ');
                    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
                }

                // Resolve the promise
                resolve();
            }
        });
    });
}

// Export the countStudents function
module.exports = countStudents;
