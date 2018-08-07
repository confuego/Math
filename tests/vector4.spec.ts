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

	it('should get', () => {
		const vec = new Vector4([1,2,3,4]);

		expect(vec.get(0)).to.be.equal(1);
		expect(vec.get(1)).to.be.equal(2);
		expect(vec.get(2)).to.be.equal(3);
		expect(vec.get(3)).to.be.equal(4);
	});

	it('should set', () => {
		const vec = new Vector4([1,2,3]);

		vec.set(1, 1000);

		expect(vec.get(1)).to.be.equal(1000);
	});

	it('should add (new)', () => {
		const vec = new Vector4([1,2,3,4]);

		const res = vec.add(vec);


		expect(vec.get(0)).to.be.equal(1);
		expect(vec.get(1)).to.be.equal(2);
		expect(vec.get(2)).to.be.equal(3);
		expect(vec.get(3)).to.be.equal(4);

		expect(res.get(0)).to.be.equal(2);
		expect(res.get(1)).to.be.equal(4);
		expect(res.get(2)).to.be.equal(6);
		expect(res.get(3)).to.be.equal(8);
	});

	it('should add (reference)', () => {
		const vec = new Vector4([1,2,3,4]);

		vec.add(vec, vec);

		expect(vec.get(0)).to.be.equal(2);
		expect(vec.get(1)).to.be.equal(4);
		expect(vec.get(2)).to.be.equal(6);
		expect(vec.get(3)).to.be.equal(8);
	});

	it('should subtract (new)', () => {
		const vec = new Vector4([1,2,3,4]);

		const res = vec.sub(vec);


		expect(vec.get(0)).to.be.equal(1);
		expect(vec.get(1)).to.be.equal(2);
		expect(vec.get(2)).to.be.equal(3);
		expect(vec.get(3)).to.be.equal(4);

		expect(res.get(0)).to.be.equal(0);
		expect(res.get(1)).to.be.equal(0);
		expect(res.get(2)).to.be.equal(0);
		expect(res.get(3)).to.be.equal(0);
	});

	it('should subtract (reference)', () => {
		const vec = new Vector4([1,2,3,4]);

		vec.sub(vec, vec);

		expect(vec.get(0)).to.be.equal(0);
		expect(vec.get(1)).to.be.equal(0);
		expect(vec.get(2)).to.be.equal(0);
		expect(vec.get(3)).to.be.equal(0);
	});
});
