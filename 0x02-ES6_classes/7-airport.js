export default class Airport {
	constructor(name, code) {
		this._name = name;
		this._code = code;
	}
	get name() {
		return this._name;
	}
	set name(value) {
		if (typeof value !== 'string') {
			throw new TypeError ('Value must be a string');
		}
	}
	get code() {
		return this._code;
	}
	set code(value)  {
		if (typeof value !== 'string' ) {
			throw new TypeError ('Value must be a string');
		}
	}
	toString() {
		return `[object ${this.code}]`;
	}
}
