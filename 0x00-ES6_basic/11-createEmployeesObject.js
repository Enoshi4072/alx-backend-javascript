export default function createEmployeesObject(departmentName="", employees=[...args]) {
	const objToReturn = {
		[`$departmentName`]: employees,
	};
	return objToReturn;
}
