export class Matrix4 {
	private _data: Float64Array | Float32Array = new Float32Array(16)

	constructor(..._rows: Array<Float32Array | Float64Array>) {
		if(Array.isArray(_rows)
			&& _rows.length === 4
			&& _rows.every(row => Array.isArray(row) && row.length === 4)) {
				this._buildArray(_rows)
		}
	}

	private _buildArray(rows: Array<Float32Array | Float64Array>) {
		const data = this._data;
		data[0] = rows[0][0]
		data[1] = rows[0][1]
		data[2] = rows[0][2]
		data[3] = rows[0][3]
		data[4] = rows[1][0]
		data[5] = rows[1][1]
		data[6] = rows[1][2]
		data[7] = rows[1][3]
		data[8] = rows[2][0]
		data[9] = rows[2][1]
		data[10] = rows[2][2]
		data[11] = rows[2][3]
		data[12] = rows[3][0]
		data[13] = rows[3][1]
		data[14] = rows[3][2]
		data[15] = rows[3][3]
	}

	public add(mat: Matrix4, dest: Matrix4 = new Matrix4()): Matrix4 {
		const data = this._data;
		const matData = mat._data;
		const destData = dest._data;

		destData[0] = data[0] + matData[0];
		destData[1] = data[1] + matData[1];
		destData[2] = data[2] + matData[2];
		destData[3] = data[3] + matData[3];
		destData[4] = data[4] + matData[4];
		destData[5] = data[5] + matData[5];
		destData[6] = data[6] + matData[6];
		destData[7] = data[7] + matData[7];
		destData[8] = data[8] + matData[8];
		destData[9] = data[9] + matData[9];
		destData[10] = data[10] + matData[10];
		destData[11] = data[11] + matData[11];
		destData[12] = data[12] + matData[12];
		destData[13] = data[13] + matData[13];
		destData[14] = data[14] + matData[14];
		destData[15] = data[15] + matData[15];

		return dest;
	}

	public sub(mat: Matrix4, dest: Matrix4 = new Matrix4()): Matrix4 {
		const data = this._data;
		const matData = mat._data;
		const destData = dest._data;

		destData[0] = data[0] - matData[0];
		destData[1] = data[1] - matData[1];
		destData[2] = data[2] - matData[2];
		destData[3] = data[3] - matData[3];
		destData[4] = data[4] - matData[4];
		destData[5] = data[5] - matData[5];
		destData[6] = data[6] - matData[6];
		destData[7] = data[7] - matData[7];
		destData[8] = data[8] - matData[8];
		destData[9] = data[9] - matData[9];
		destData[10] = data[10] - matData[10];
		destData[11] = data[11] - matData[11];
		destData[12] = data[12] - matData[12];
		destData[13] = data[13] - matData[13];
		destData[14] = data[14] - matData[14];
		destData[15] = data[15] - matData[15];

		return dest;
	}

	public get(row: number, col: number): number {
		return this._data[row * col + col]
	}

	public set(row: number, col: number, val: number): void {
		this._data[row * col + col] = val;
	}

	public toString(): string {
		let display = '';

		for(let i = 0; i < this._data.length; i++) {
			display += (i % 4 === 0) ? '\n' : ',';
			display += this._data[i].toString()
		}

		return display;
	}
}
