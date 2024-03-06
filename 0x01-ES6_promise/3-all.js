import {uploadPhoto, createUser} from "./utils";
export default function handleProfileSignup() {
	return Promise
	.all([uploadPhoto(), createUser()])
	.then((feedback) => {
		console.log(`${feedback[0].body} ${feedback[1].firstName} ${feedback[1].lastName}`);})
	.catch(() => console.log('Signup system offline'));
}
