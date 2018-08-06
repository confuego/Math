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
});
