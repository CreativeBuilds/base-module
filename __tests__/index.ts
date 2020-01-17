import { BaseClass } from '../dist';
// tslint:disable-next-line: ordered-imports
import { expect } from 'chai';
import 'mocha';

describe('getVar function', () => {
	it('should return "var!"', () => {
		const result = BaseClass.prototype.getVar();
		expect(result).to.equal('var!');
	});
});
