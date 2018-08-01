export class Vector3 {
	constructor(private _data: Float32Array | Float64Array = new Float32Array(3)) {}

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
		const thisData = this._data;
		return thisData[0] + '\n' + thisData[1] + '\n' + thisData[2];
	}
}
