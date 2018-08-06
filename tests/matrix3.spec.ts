import { Matrix3 } from '../src';
import { expect } from 'chai';
import 'mocha';

describe('Matrix3', () => {
	it('should create', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		expect(mat).to.not.be.null;
	});

	it('can get cells', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
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
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		mat.set(2,2, 1000);
		expect(mat.get(2,2)).to.be.equal(1000);
	});

	it('can add to itself', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		mat.add(mat, mat);

		expect(mat.get(0,0)).to.be.equal(2);
		expect(mat.get(0,1)).to.be.equal(4);
		expect(mat.get(0,2)).to.be.equal(6);
		expect(mat.get(1,0)).to.be.equal(8);
		expect(mat.get(1,1)).to.be.equal(10);
		expect(mat.get(1,2)).to.be.equal(12);
		expect(mat.get(2,0)).to.be.equal(14);
		expect(mat.get(2,1)).to.be.equal(16);
		expect(mat.get(2,2)).to.be.equal(18);
	});

	it('can add and make copy', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		const newMat = mat.add(mat);

		expect(newMat.get(0,0)).to.be.equal(2);
		expect(newMat.get(0,1)).to.be.equal(4);
		expect(newMat.get(0,2)).to.be.equal(6);
		expect(newMat.get(1,0)).to.be.equal(8);
		expect(newMat.get(1,1)).to.be.equal(10);
		expect(newMat.get(1,2)).to.be.equal(12);
		expect(newMat.get(2,0)).to.be.equal(14);
		expect(newMat.get(2,1)).to.be.equal(16);
		expect(newMat.get(2,2)).to.be.equal(18);

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
});
