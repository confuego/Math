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

	public toString(): string {
		let display = '';

		for(let i = 0; i < this._data.length; i++) {
			display += (i % 4 === 0) ? '\n' : ',';
			display += this._data[i].toString()
		}

		return display;
	}
}
