export class Matrix3 {

	private _data: Float64Array | Float32Array = new Float32Array(9)

	constructor(..._rows: Array<Float32Array | Float64Array>) {
		if(Array.isArray(_rows)
			&& _rows.length === 3
			&& _rows.every(row => Array.isArray(row) && row.length === 3)) {
				this._buildArray(_rows)
		}
	}

	private _buildArray(rows: Array<Float32Array | Float64Array>) {
		this._data[0] = rows[0][0]
		this._data[1] = rows[0][1]
		this._data[2] = rows[0][2]
		this._data[3] = rows[1][0]
		this._data[4] = rows[1][1]
		this._data[5] = rows[1][2]
		this._data[6] = rows[2][0]
		this._data[7] = rows[2][1]
		this._data[8] = rows[2][2]
	}

	public add(mat: Matrix3, dest: Matrix3 = new Matrix3()): Matrix3 {
		dest._data[0] = this._data[0] + mat._data[0];
		dest._data[1] = this._data[1] + mat._data[1];
		dest._data[2] = this._data[2] + mat._data[2];
		dest._data[3] = this._data[3] + mat._data[3];
		dest._data[4] = this._data[4] + mat._data[4];
		dest._data[5] = this._data[5] + mat._data[5];
		dest._data[6] = this._data[6] + mat._data[6];
		dest._data[7] = this._data[7] + mat._data[7];
		dest._data[8] = this._data[8] + mat._data[8];
		return dest;
	}

	public sub(mat: Matrix3, dest: Matrix3 = new Matrix3()): Matrix3 {
		dest._data[0] = this._data[0] - mat._data[0];
		dest._data[1] = this._data[1] - mat._data[1];
		dest._data[2] = this._data[2] - mat._data[2];
		dest._data[3] = this._data[3] - mat._data[3];
		dest._data[4] = this._data[4] - mat._data[4];
		dest._data[5] = this._data[5] - mat._data[5];
		dest._data[6] = this._data[6] - mat._data[6];
		dest._data[7] = this._data[7] - mat._data[7];
		dest._data[8] = this._data[8] - mat._data[8];
		return dest;
	}

	public mul(mat: Matrix3, dest: Matrix3 = new Matrix3()): Matrix3 {
		dest._data[0] = this._data[0] * mat._data[0] + this._data[1] * mat._data[3] + this._data[2] * mat._data[6];
		dest._data[3] = this._data[3] * mat._data[0] + this._data[4] * mat._data[3] + this._data[5] * mat._data[6];
		dest._data[6] = this._data[6] * mat._data[0] + this._data[7] * mat._data[3] + this._data[8] * mat._data[6];

		dest._data[1] = this._data[0] * mat._data[1] + this._data[1] * mat._data[4] + this._data[2] * mat._data[7];
		dest._data[4] = this._data[3] * mat._data[1] + this._data[4] * mat._data[4] + this._data[5] * mat._data[7];
		dest._data[7] = this._data[6] * mat._data[1] + this._data[7] * mat._data[4] + this._data[8] * mat._data[7];

		dest._data[2] = this._data[0] * mat._data[2] + this._data[1] * mat._data[5] + this._data[2] * mat._data[8];
		dest._data[5] = this._data[3] * mat._data[2] + this._data[4] * mat._data[5] + this._data[5] * mat._data[8];
		dest._data[8] = this._data[6] * mat._data[2] + this._data[7] * mat._data[5] + this._data[8] * mat._data[8];
		return dest;
	}

	public get(row: number, col: number): number {
		return this._data[row * col + col]
	}

	public toString(): string {
		let display = '';

		for(let i = 0; i < this._data.length; i++) {
			display += (i % 3 === 0) ? '\n' : ',';
			display += this._data[i].toString()
		}

		return display;
	}
}
