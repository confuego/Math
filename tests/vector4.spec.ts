import { Vector4 } from '../src';
import { expect } from 'chai';
import 'mocha';

describe('Vector4', () => {
	it('should create', () => {
		const vec = new Vector4([1,2,3,4]);

		expect(vec).to.not.be.null;
		expect(vec._data).to.not.be.null;
		expect(vec._data.length).to.be.equal(4);
	});
});
