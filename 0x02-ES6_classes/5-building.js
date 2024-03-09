export default class Building {
	constructor (sqft) {
		if (new.target === Building) {
			throw new Error('Cannot instantiate abstract class Building');
		}
		this._sqft = sqft;
	}
	get sqft() {
		return this._sqft;
	}
	evacuationWarningMessage () {
		throw new Error('Class extending Building must override evacuationWaringMessage');
	}
}
