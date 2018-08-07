export class Vector4 {

	public _data: Float32Array = new Float32Array(4);

	constructor(_data: Array<number> = new Array(3)) {
		this._data.set(_data);
	}

	public get(index: number): number {
		return this._data[index];
	}

	public set(index: number, value: number): void {
		this._data[index] = value;
	}

	public add(vec: Vector4, dest: Vector4 = new Vector4()): Vector4 {
		const vecData = vec._data;
		const thisData = this._data;
		const destData = dest._data;

		destData[0] = vecData[0] + thisData[0];
		destData[1] = vecData[1] + thisData[1];
		destData[2] = vecData[2] + thisData[2];
		destData[3] = vecData[3] + thisData[3];

		return dest;
	}

	public sub(vec: Vector4, dest: Vector4 = new Vector4()): Vector4 {
		const vecData = vec._data;
		const thisData = this._data;
		const destData = dest._data;

		destData[0] = vecData[0] - thisData[0];
		destData[1] = vecData[1] - thisData[1];
		destData[2] = vecData[2] - thisData[2];
		destData[3] = vecData[3] - thisData[3];

		return dest;
	}

	public mul(vec: Vector4, dest: Vector4 = new Vector4()): Vector4 {
		const vecData = vec._data;
		const thisData = this._data;
		const destData = dest._data;

		destData[0] = vecData[0] * thisData[0];
		destData[1] = vecData[1] * thisData[1];
		destData[2] = vecData[2] * thisData[2];
		destData[3] = vecData[3] * thisData[3];

		return dest;
	}

	public div(vec: Vector4, dest: Vector4 = new Vector4()): Vector4 {
		const vecData = vec._data;
		const thisData = this._data;
		const destData = dest._data;

		destData[0] = vecData[0] / thisData[0];
		destData[1] = vecData[1] / thisData[1];
		destData[2] = vecData[2] / thisData[2];
		destData[3] = vecData[3] / thisData[3];

		return dest;
	}

	public toString(): string {
		return this._data.toString();
	}
}
