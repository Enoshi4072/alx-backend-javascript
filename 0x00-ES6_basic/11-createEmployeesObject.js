export default function createEmployeesObject(departmentName, employees]) {
	const objToReturn = {
		[departmentName]: employees,
	};
	return objToReturn;
}
