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

	it('should add (reference)', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);

		mat.add(mat, mat);

		expect(mat.get(0,0)).to.be.equal(2);
		expect(mat.get(0,1)).to.be.equal(4);
		expect(mat.get(0,2)).to.be.equal(6);
		expect(mat.get(0,3)).to.be.equal(8);
		expect(mat.get(1,0)).to.be.equal(10);
		expect(mat.get(1,1)).to.be.equal(12);
		expect(mat.get(1,2)).to.be.equal(14);
		expect(mat.get(1,3)).to.be.equal(16);
		expect(mat.get(2,0)).to.be.equal(18);
		expect(mat.get(2,1)).to.be.equal(20);
		expect(mat.get(2,2)).to.be.equal(22);
		expect(mat.get(2,3)).to.be.equal(24);
		expect(mat.get(3,0)).to.be.equal(26);
		expect(mat.get(3,1)).to.be.equal(28);
		expect(mat.get(3,2)).to.be.equal(30);
		expect(mat.get(3,3)).to.be.equal(32);
	});

	it('should add (new)', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);

		const res = mat.add(mat);

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

		expect(res.get(0,0)).to.be.equal(2);
		expect(res.get(0,1)).to.be.equal(4);
		expect(res.get(0,2)).to.be.equal(6);
		expect(res.get(0,3)).to.be.equal(8);
		expect(res.get(1,0)).to.be.equal(10);
		expect(res.get(1,1)).to.be.equal(12);
		expect(res.get(1,2)).to.be.equal(14);
		expect(res.get(1,3)).to.be.equal(16);
		expect(res.get(2,0)).to.be.equal(18);
		expect(res.get(2,1)).to.be.equal(20);
		expect(res.get(2,2)).to.be.equal(22);
		expect(res.get(2,3)).to.be.equal(24);
		expect(res.get(3,0)).to.be.equal(26);
		expect(res.get(3,1)).to.be.equal(28);
		expect(res.get(3,2)).to.be.equal(30);
		expect(res.get(3,3)).to.be.equal(32);
	});

	it('should subtract (reference)', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);

		mat.sub(mat, mat);

		expect(mat.get(0,0)).to.be.equal(0);
		expect(mat.get(0,1)).to.be.equal(0);
		expect(mat.get(0,2)).to.be.equal(0);
		expect(mat.get(0,3)).to.be.equal(0);
		expect(mat.get(1,0)).to.be.equal(0);
		expect(mat.get(1,1)).to.be.equal(0);
		expect(mat.get(1,2)).to.be.equal(0);
		expect(mat.get(1,3)).to.be.equal(0);
		expect(mat.get(2,0)).to.be.equal(0);
		expect(mat.get(2,1)).to.be.equal(0);
		expect(mat.get(2,2)).to.be.equal(0);
		expect(mat.get(2,3)).to.be.equal(0);
		expect(mat.get(3,0)).to.be.equal(0);
		expect(mat.get(3,1)).to.be.equal(0);
		expect(mat.get(3,2)).to.be.equal(0);
		expect(mat.get(3,3)).to.be.equal(0);
	});

	it('should subtract (new)', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);

		const res = mat.sub(mat);

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

		expect(res.get(0,0)).to.be.equal(0);
		expect(res.get(0,1)).to.be.equal(0);
		expect(res.get(0,2)).to.be.equal(0);
		expect(res.get(0,3)).to.be.equal(0);
		expect(res.get(1,0)).to.be.equal(0);
		expect(res.get(1,1)).to.be.equal(0);
		expect(res.get(1,2)).to.be.equal(0);
		expect(res.get(1,3)).to.be.equal(0);
		expect(res.get(2,0)).to.be.equal(0);
		expect(res.get(2,1)).to.be.equal(0);
		expect(res.get(2,2)).to.be.equal(0);
		expect(res.get(2,3)).to.be.equal(0);
		expect(res.get(3,0)).to.be.equal(0);
		expect(res.get(3,1)).to.be.equal(0);
		expect(res.get(3,2)).to.be.equal(0);
		expect(res.get(3,3)).to.be.equal(0);
	});

	it('should multiply vector (new)', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);
		const vec = new Vector4([1,2,4,7]);

		const res = mat.mulVec(vec);

		expect(vec.get(0)).to.be.equal(1);
		expect(vec.get(1)).to.be.equal(2);
		expect(vec.get(2)).to.be.equal(4);
		expect(vec.get(3)).to.be.equal(7);

		expect(res.get(0)).to.be.equal(45);
		expect(res.get(1)).to.be.equal(101);
		expect(res.get(2)).to.be.equal(157);
		expect(res.get(3)).to.be.equal(213);
	});

	it('should multiply vector (reference)', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);
		const vec = new Vector4([1,2,4,7]);

		mat.mulVec(vec, vec);

		expect(vec.get(0)).to.be.equal(45);
		expect(vec.get(1)).to.be.equal(101);
		expect(vec.get(2)).to.be.equal(157);
		expect(vec.get(3)).to.be.equal(213);
	});

	it('should multiply matrix (new)', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);
		const mat2 = new Matrix4([11,23,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);

		const res = mat.mulMat(mat2);

		expect(res.get(0,0)).to.be.equal(100);
		expect(res.get(0,1)).to.be.equal(121);
		expect(res.get(0,2)).to.be.equal(110);
		expect(res.get(0,3)).to.be.equal(120);
		expect(res.get(1,0)).to.be.equal(252);
		expect(res.get(1,1)).to.be.equal(333);
		expect(res.get(1,2)).to.be.equal(254);
		expect(res.get(1,3)).to.be.equal(280);
		expect(res.get(2,0)).to.be.equal(404);
		expect(res.get(2,1)).to.be.equal(545);
		expect(res.get(2,2)).to.be.equal(398);
		expect(res.get(2,3)).to.be.equal(440);
		expect(res.get(3,0)).to.be.equal(556);
		expect(res.get(3,1)).to.be.equal(757);
		expect(res.get(3,2)).to.be.equal(542);
		expect(res.get(3,3)).to.be.equal(600);
	});

	it('should multiply matrix (reference)', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);
		const mat2 = new Matrix4([11,23,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);
		const res = new Matrix4([1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]);

		mat.mulMat(mat2, res);

		expect(res.get(0,0)).to.be.equal(100);
		expect(res.get(0,1)).to.be.equal(121);
		expect(res.get(0,2)).to.be.equal(110);
		expect(res.get(0,3)).to.be.equal(120);
		expect(res.get(1,0)).to.be.equal(252);
		expect(res.get(1,1)).to.be.equal(333);
		expect(res.get(1,2)).to.be.equal(254);
		expect(res.get(1,3)).to.be.equal(280);
		expect(res.get(2,0)).to.be.equal(404);
		expect(res.get(2,1)).to.be.equal(545);
		expect(res.get(2,2)).to.be.equal(398);
		expect(res.get(2,3)).to.be.equal(440);
		expect(res.get(3,0)).to.be.equal(556);
		expect(res.get(3,1)).to.be.equal(757);
		expect(res.get(3,2)).to.be.equal(542);
		expect(res.get(3,3)).to.be.equal(600);
	});

	it('should calculate the determinate', () => {
		const mat = new Matrix4([11,-23,-300,4], [5,6,7,80], [9,10,110,12],[13,14,15,16]);

		const det = mat.det();

		expect(det).to.be.equal(-3234240);
	});

	it('should find the adjoint (new)', () => {
		const mat = new Matrix4([11,-23,-300,4], [5,6,7,80], [9,10,110,12],[13,14,15,16]);

		const res = mat.adj();

		expect(res.get(0,0)).to.be.equal(-101664);
		expect(res.get(0,1)).to.be.equal(44300);
		expect(res.get(0,2)).to.be.equal(-282208);
		expect(res.get(0,3)).to.be.equal(15572);
		expect(res.get(1,0)).to.be.equal(95616);
		expect(res.get(1,1)).to.be.equal(8600);
		expect(res.get(1,2)).to.be.equal(300032);
		expect(res.get(1,3)).to.be.equal(-291928);
		expect(res.get(2,0)).to.be.equal(-288);
		expect(res.get(2,1)).to.be.equal(380);
		expect(res.get(2,2)).to.be.equal(-33376);
		expect(res.get(2,3)).to.be.equal(23204);
		expect(res.get(3,0)).to.be.equal(-792);
		expect(res.get(3,1)).to.be.equal(-43875);
		expect(res.get(3,2)).to.be.equal(-1944);
		expect(res.get(3,3)).to.be.equal(18891);
	});

	it('should find the adjoint (reference)', () => {
		const mat = new Matrix4([11,-23,-300,4], [5,6,7,80], [9,10,110,12],[13,14,15,16]);
		const res = new Matrix4([11,-23,-300,4], [5,6,7,80], [9,10,110,12],[13,14,15,16]);

		mat.adj(res);

		expect(res.get(0,0)).to.be.equal(-101664);
		expect(res.get(0,1)).to.be.equal(44300);
		expect(res.get(0,2)).to.be.equal(-282208);
		expect(res.get(0,3)).to.be.equal(15572);
		expect(res.get(1,0)).to.be.equal(95616);
		expect(res.get(1,1)).to.be.equal(8600);
		expect(res.get(1,2)).to.be.equal(300032);
		expect(res.get(1,3)).to.be.equal(-291928);
		expect(res.get(2,0)).to.be.equal(-288);
		expect(res.get(2,1)).to.be.equal(380);
		expect(res.get(2,2)).to.be.equal(-33376);
		expect(res.get(2,3)).to.be.equal(23204);
		expect(res.get(3,0)).to.be.equal(-792);
		expect(res.get(3,1)).to.be.equal(-43875);
		expect(res.get(3,2)).to.be.equal(-1944);
		expect(res.get(3,3)).to.be.equal(18891);
	});

	it('should find the inverse (new)', () => {
		const mat = new Matrix4([11,-23,-300,4], [5,6,7,80], [9,10,110,12],[13,14,15,16]);

		const res = mat.inv();

		expect(res.get(0,0)).to.be.closeTo(353/11230, 0.001);
		expect(res.get(0,1)).to.be.closeTo(-2215/161712, 0.001);
		expect(res.get(0,2)).to.be.closeTo(8819/101070, 0.001);
		expect(res.get(0,3)).to.be.closeTo(-3893/808560, 0.001);
		expect(res.get(1,0)).to.be.closeTo(-166/5615, 0.001);
		expect(res.get(1,1)).to.be.closeTo(-215/80856, 0.001);
		expect(res.get(1,2)).to.be.closeTo(-4688/50535, 0.001);
		expect(res.get(1,3)).to.be.closeTo(36491/404280, 0.001);
		expect(res.get(2,0)).to.be.closeTo(1/11230, 0.001);
		expect(res.get(2,1)).to.be.closeTo(-19/161712, 0.001);
		expect(res.get(2,2)).to.be.closeTo(1043/101070, 0.001);
		expect(res.get(2,3)).to.be.closeTo(-5801/808560, 0.001);
		expect(res.get(3,0)).to.be.closeTo(11/44920, 0.001);
		expect(res.get(3,1)).to.be.closeTo(975/71872, 0.001);
		expect(res.get(3,2)).to.be.closeTo(27/44920, 0.001);
		expect(res.get(3,3)).to.be.closeTo(-2099/359360, 0.001);
	});

	it('should find the inverse (reference)', () => {
		const mat = new Matrix4([11,-23,-300,4], [5,6,7,80], [9,10,110,12],[13,14,15,16]);
		const res = new Matrix4([11,-23,-300,4], [5,6,7,80], [9,10,110,12],[13,14,15,16]);

		mat.inv(res);

		expect(res.get(0,0)).to.be.closeTo(353/11230, 0.001);
		expect(res.get(0,1)).to.be.closeTo(-2215/161712, 0.001);
		expect(res.get(0,2)).to.be.closeTo(8819/101070, 0.001);
		expect(res.get(0,3)).to.be.closeTo(-3893/808560, 0.001);
		expect(res.get(1,0)).to.be.closeTo(-166/5615, 0.001);
		expect(res.get(1,1)).to.be.closeTo(-215/80856, 0.001);
		expect(res.get(1,2)).to.be.closeTo(-4688/50535, 0.001);
		expect(res.get(1,3)).to.be.closeTo(36491/404280, 0.001);
		expect(res.get(2,0)).to.be.closeTo(1/11230, 0.001);
		expect(res.get(2,1)).to.be.closeTo(-19/161712, 0.001);
		expect(res.get(2,2)).to.be.closeTo(1043/101070, 0.001);
		expect(res.get(2,3)).to.be.closeTo(-5801/808560, 0.001);
		expect(res.get(3,0)).to.be.closeTo(11/44920, 0.001);
		expect(res.get(3,1)).to.be.closeTo(975/71872, 0.001);
		expect(res.get(3,2)).to.be.closeTo(27/44920, 0.001);
		expect(res.get(3,3)).to.be.closeTo(-2099/359360, 0.001);
	});

	it('should not find the inverse', () => {
		const mat = new Matrix4([1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]);

		expect(mat.inv.bind(mat)).to.throw('Determinant is 0.');
	});
});
