import { Vector3 } from '../src';
import { expect } from 'chai';
import 'mocha';

describe('Vector3', () => {
	it('should create', () => {
		const vec = new Vector3([1,2,3]);

		expect(vec.get(0)).to.be.equal(1);
		expect(vec.get(1)).to.be.equal(2);
		expect(vec.get(2)).to.be.equal(3);
	});
});
