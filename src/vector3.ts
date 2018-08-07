export class Vector3 {

	public _data: Float32Array = new Float32Array(3);

	constructor(_data: Array<number> = new Array(3)) {
		this._data.set(_data);
	}

	public get(index: number): number {
		return this._data[index];
	}

	public set(index: number, value: number): void {
		this._data[index] = value;
	}

	public add(vec: Vector3, dest: Vector3 = new Vector3()): Vector3 {
		const vecData = vec._data;
		const thisData = this._data;
		const destData = dest._data;

		destData[0] = vecData[0] + thisData[0];
		destData[1] = vecData[1] + thisData[1];
		destData[2] = vecData[2] + thisData[2];

		return dest;
	}

	public sub(vec: Vector3, dest: Vector3 = new Vector3()): Vector3 {
		const vecData = vec._data;
		const thisData = this._data;
		const destData = dest._data;

		destData[0] = vecData[0] - thisData[0];
		destData[1] = vecData[1] - thisData[1];
		destData[2] = vecData[2] - thisData[2];

		return dest;
	}

	public mul(vec: Vector3, dest: Vector3 = new Vector3()): Vector3 {
		const vecData = vec._data;
		const thisData = this._data;
		const destData = dest._data;

		destData[0] = vecData[0] * thisData[0];
		destData[1] = vecData[1] * thisData[1];
		destData[2] = vecData[2] * thisData[2];

		return dest;
	}

	public div(vec: Vector3, dest: Vector3 = new Vector3()): Vector3 {
		const vecData = vec._data;
		const thisData = this._data;
		const destData = dest._data;

		destData[0] = vecData[0] / thisData[0];
		destData[1] = vecData[1] / thisData[1];
		destData[2] = vecData[2] / thisData[2];

		return dest;
	}

	public toString(): string {
		return this._data.toString();
	}
}
