import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

app.use(express.json());

// Middleware to attach database file path to request object
app.use((req, res, next) => {
  req.dbFilePath = process.argv[2]; // Database file path passed as command-line argument
  next();
});

// Using routes
app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
