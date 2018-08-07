import { Matrix3, Vector3 } from '../src';
import { expect } from 'chai';
import 'mocha';

describe('Matrix3', () => {
	it('should create', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		expect(mat).to.not.be.null;
	});

	it('should get cells', () => {
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

	it('should set cells', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		mat.set(2,2, 1000);

		expect(mat.get(2,2)).to.be.equal(1000);
	});

	it('should add (reference)', () => {
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

	it('should add (new)', () => {
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

	it('should subtract (reference)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		mat.sub(mat, mat);

		expect(mat.get(0,0)).to.be.equal(0);
		expect(mat.get(0,1)).to.be.equal(0);
		expect(mat.get(0,2)).to.be.equal(0);
		expect(mat.get(1,0)).to.be.equal(0);
		expect(mat.get(1,1)).to.be.equal(0);
		expect(mat.get(1,2)).to.be.equal(0);
		expect(mat.get(2,0)).to.be.equal(0);
		expect(mat.get(2,1)).to.be.equal(0);
		expect(mat.get(2,2)).to.be.equal(0);
	});

	it('should subtract (new)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		const newMat = mat.sub(mat);

		expect(newMat.get(0,0)).to.be.equal(0);
		expect(newMat.get(0,1)).to.be.equal(0);
		expect(newMat.get(0,2)).to.be.equal(0);
		expect(newMat.get(1,0)).to.be.equal(0);
		expect(newMat.get(1,1)).to.be.equal(0);
		expect(newMat.get(1,2)).to.be.equal(0);
		expect(newMat.get(2,0)).to.be.equal(0);
		expect(newMat.get(2,1)).to.be.equal(0);
		expect(newMat.get(2,2)).to.be.equal(0);

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

	it('should multiply a vector (new)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		const vec = new Vector3([1,2,3]);

		const res = mat.mulVec(vec);

		expect(res.get(0)).to.be.equal(14);
		expect(res.get(1)).to.be.equal(32);
		expect(res.get(2)).to.be.equal(50);
	});

	it('should multiply a vector (reference)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		const vec = new Vector3([1,2,3]);

		mat.mulVec(vec, vec);

		expect(vec.get(0)).to.be.equal(14);
		expect(vec.get(1)).to.be.equal(32);
		expect(vec.get(2)).to.be.equal(50);
	});

	it('should multiply mat3 (new)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		const mat2 = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		const res = mat.mulMat(mat2);

		expect(res.get(0,0)).to.be.equal(30);
		expect(res.get(0,1)).to.be.equal(36);
		expect(res.get(0,2)).to.be.equal(42);
		expect(res.get(1,0)).to.be.equal(66);
		expect(res.get(1,1)).to.be.equal(81);
		expect(res.get(1,2)).to.be.equal(96);
		expect(res.get(2,0)).to.be.equal(102);
		expect(res.get(2,1)).to.be.equal(126);
		expect(res.get(2,2)).to.be.equal(150);
	});

	it('should multiply mat3 (reference)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		const mat2 = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		const res = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		mat.mulMat(mat2, res);

		expect(res.get(0,0)).to.be.equal(30);
		expect(res.get(0,1)).to.be.equal(36);
		expect(res.get(0,2)).to.be.equal(42);
		expect(res.get(1,0)).to.be.equal(66);
		expect(res.get(1,1)).to.be.equal(81);
		expect(res.get(1,2)).to.be.equal(96);
		expect(res.get(2,0)).to.be.equal(102);
		expect(res.get(2,1)).to.be.equal(126);
		expect(res.get(2,2)).to.be.equal(150);
	});

	it('should calculate determinant', () => {
		const mat = new Matrix3([19,2,3], [4,5,6], [7,8,9]);

		const det = mat.det();

		expect(det).to.be.equal(-54);
	});

	it('should transpose (reference)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		mat.transpose(mat);

		expect(mat.get(0,0)).to.be.equal(1);
		expect(mat.get(0,1)).to.be.equal(4);
		expect(mat.get(0,2)).to.be.equal(7);
		expect(mat.get(1,0)).to.be.equal(2);
		expect(mat.get(1,1)).to.be.equal(5);
		expect(mat.get(1,2)).to.be.equal(8);
		expect(mat.get(2,0)).to.be.equal(3);
		expect(mat.get(2,1)).to.be.equal(6);
		expect(mat.get(2,2)).to.be.equal(9);
	});

	it('should transpose (new)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		const tran = mat.transpose();

		expect(tran.get(0,0)).to.be.equal(1);
		expect(tran.get(0,1)).to.be.equal(4);
		expect(tran.get(0,2)).to.be.equal(7);
		expect(tran.get(1,0)).to.be.equal(2);
		expect(tran.get(1,1)).to.be.equal(5);
		expect(tran.get(1,2)).to.be.equal(8);
		expect(tran.get(2,0)).to.be.equal(3);
		expect(tran.get(2,1)).to.be.equal(6);
		expect(tran.get(2,2)).to.be.equal(9);

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

	it('should find the adjoint (new)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		const adj = mat.adj();

		expect(mat.get(0,0)).to.be.equal(1);
		expect(mat.get(0,1)).to.be.equal(2);
		expect(mat.get(0,2)).to.be.equal(3);
		expect(mat.get(1,0)).to.be.equal(4);
		expect(mat.get(1,1)).to.be.equal(5);
		expect(mat.get(1,2)).to.be.equal(6);
		expect(mat.get(2,0)).to.be.equal(7);
		expect(mat.get(2,1)).to.be.equal(8);
		expect(mat.get(2,2)).to.be.equal(9);

		expect(adj.get(0,0)).to.be.equal(-3);
		expect(adj.get(0,1)).to.be.equal(6);
		expect(adj.get(0,2)).to.be.equal(-3);
		expect(adj.get(1,0)).to.be.equal(6);
		expect(adj.get(1,1)).to.be.equal(-12);
		expect(adj.get(1,2)).to.be.equal(6);
		expect(adj.get(2,0)).to.be.equal(-3);
		expect(adj.get(2,1)).to.be.equal(6);
		expect(adj.get(2,2)).to.be.equal(-3);
	});

	it('should find the adjoint (reference)', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);
		const adj = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		mat.adj(adj);

		expect(adj.get(0,0)).to.be.equal(-3);
		expect(adj.get(0,1)).to.be.equal(6);
		expect(adj.get(0,2)).to.be.equal(-3);
		expect(adj.get(1,0)).to.be.equal(6);
		expect(adj.get(1,1)).to.be.equal(-12);
		expect(adj.get(1,2)).to.be.equal(6);
		expect(adj.get(2,0)).to.be.equal(-3);
		expect(adj.get(2,1)).to.be.equal(6);
		expect(adj.get(2,2)).to.be.equal(-3);
	});

	it('should find the inverse (new)', () => {
		const mat = new Matrix3([12,2,3], [4,5,6], [7,8,9]);

		const inv = mat.inv();

		expect(mat.get(0,0)).to.be.equal(12);
		expect(mat.get(0,1)).to.be.equal(2);
		expect(mat.get(0,2)).to.be.equal(3);
		expect(mat.get(1,0)).to.be.equal(4);
		expect(mat.get(1,1)).to.be.equal(5);
		expect(mat.get(1,2)).to.be.equal(6);
		expect(mat.get(2,0)).to.be.equal(7);
		expect(mat.get(2,1)).to.be.equal(8);
		expect(mat.get(2,2)).to.be.equal(9);

		expect(inv.get(0,0)).to.be.closeTo(1/11, 0.001);
		expect(inv.get(0,1)).to.be.closeTo(-2/11, 0.001);
		expect(inv.get(0,2)).to.be.closeTo(1/11, 0.001);
		expect(inv.get(1,0)).to.be.closeTo(-2/11, 0.001);
		expect(inv.get(1,1)).to.be.closeTo(-29/11, 0.001);
		expect(inv.get(1,2)).to.be.closeTo(20/11, 0.001);
		expect(inv.get(2,0)).to.be.closeTo(1/11, 0.001);
		expect(inv.get(2,1)).to.be.closeTo(82/33, 0.001);
		expect(inv.get(2,2)).to.be.closeTo(-52/33, 0.001);
	});

	it('should find the inverse (reference)', () => {
		const mat = new Matrix3([12,2,3], [4,5,6], [7,8,9]);
		const inv = new Matrix3([12,2,3], [4,5,6], [7,8,9]);

		mat.inv(inv);

		expect(mat.get(0,0)).to.be.equal(12);
		expect(mat.get(0,1)).to.be.equal(2);
		expect(mat.get(0,2)).to.be.equal(3);
		expect(mat.get(1,0)).to.be.equal(4);
		expect(mat.get(1,1)).to.be.equal(5);
		expect(mat.get(1,2)).to.be.equal(6);
		expect(mat.get(2,0)).to.be.equal(7);
		expect(mat.get(2,1)).to.be.equal(8);
		expect(mat.get(2,2)).to.be.equal(9);

		expect(inv.get(0,0)).to.be.closeTo(1/11, 0.001);
		expect(inv.get(0,1)).to.be.closeTo(-2/11, 0.001);
		expect(inv.get(0,2)).to.be.closeTo(1/11, 0.001);
		expect(inv.get(1,0)).to.be.closeTo(-2/11, 0.001);
		expect(inv.get(1,1)).to.be.closeTo(-29/11, 0.001);
		expect(inv.get(1,2)).to.be.closeTo(20/11, 0.001);
		expect(inv.get(2,0)).to.be.closeTo(1/11, 0.001);
		expect(inv.get(2,1)).to.be.closeTo(82/33, 0.001);
		expect(inv.get(2,2)).to.be.closeTo(-52/33, 0.001);
	});

	it('should not find the inverse', () => {
		const mat = new Matrix3([1,2,3], [4,5,6], [7,8,9]);

		expect(mat.inv.bind(mat)).to.throw('Determinant is 0.');
	});
});
