// 1-stdin.js

// Display initial message
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for user input
process.stdin.on('readable', () => {
  // Extract the input and remove any leading/trailing whitespace
  const name = process.stdin.read();
	if (name) {
		process.stdout.write(`Your name is: ${name}`);
	}});

process.stdin.on('end', () => {
process.stdout.write('This important software is now closing\n')});
