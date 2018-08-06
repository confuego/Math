import { Matrix4, Vector4 } from '../src';
import { expect } from 'chai';
import 'mocha';

describe('Matrix4', () => {
	it('should create', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);

		expect(mat).to.not.be.null;
		expect(mat._data).to.not.be.null;
		expect(mat._data.length).to.be.equal(16);
	});

	it('should get', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);

		expect(mat.get(0,0)).to.be.equal(1);
		expect(mat.get(0,1)).to.be.equal(2);
		expect(mat.get(0,2)).to.be.equal(3);
		expect(mat.get(0,3)).to.be.equal(4);
		expect(mat.get(1,0)).to.be.equal(5);
		expect(mat.get(1,1)).to.be.equal(6);
		expect(mat.get(1,2)).to.be.equal(7);
		expect(mat.get(1,3)).to.be.equal(8);
		expect(mat.get(2,0)).to.be.equal(9);
		expect(mat.get(2,1)).to.be.equal(10);
		expect(mat.get(2,2)).to.be.equal(11);
		expect(mat.get(2,3)).to.be.equal(12);
		expect(mat.get(3,0)).to.be.equal(13);
		expect(mat.get(3,1)).to.be.equal(14);
		expect(mat.get(3,2)).to.be.equal(15);
		expect(mat.get(3,3)).to.be.equal(16);
	});

	it('should set', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);

		mat.set(3,2, 1000);

		expect(mat.get(3,2)).to.be.equal(1000);
	});
});
