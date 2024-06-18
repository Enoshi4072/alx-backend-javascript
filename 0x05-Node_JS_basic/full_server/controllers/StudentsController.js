import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(req.dbFilePath);
      let response = `This is the list of our students\n`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      res.status(200).send(response);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(req.dbFilePath);
      const studentsInMajor = fields[major] || [];
      const response = `List: ${studentsInMajor.join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
