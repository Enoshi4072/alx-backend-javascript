// 1-stdin.js

// Display initial message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input
process.stdin.on('data', (data) => {
  // Extract the input and remove any leading/trailing whitespace
  const name = data.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);
  
  // Display closing message
  console.log("This important software is now closing");
  
  // Exit the program
  process.exit();
});
