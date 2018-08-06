import { Matrix3 } from '../src';
import { expect } from 'chai';
import 'mocha';

describe('Matrix3', () => {
	const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

	it('should create', () => {
		expect(mat).to.not.be.null;
	});

	it('can get cells', () => {
		expect(mat.get(0,0)).to.be.equal(1);
		expect(mat.get(0,1)).to.be.equal(2);
		expect(mat.get(0,2)).to.be.equal(3);
		expect(mat.get(1,0)).to.be.equal(4);
		expect(mat.get(1,1)).to.be.equal(5);
		expect(mat.get(1,2)).to.be.equal(6);
		expect(mat.get(2,0)).to.be.equal(7);
		expect(mat.get(2,1)).to.be.equal(8);
		expect(mat.get(2,2)).to.be.equal(9);
	});

	it('can set cells', () => {
		mat.set(2,2, 1000);
		expect(mat.get(2,2)).to.be.equal(1000);
	});
});
