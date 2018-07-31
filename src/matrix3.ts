export class Matrix3 {

	public data: Float64Array | Float32Array = new Float32Array(9)

	constructor(..._rows: Array<Float32Array | Float64Array>) {
		if(Array.isArray(_rows)
			&& _rows.length === 3
			&& _rows.every(row => Array.isArray(row) && row.length === 3)) {
				this._buildArray(_rows)
		}
	}

	private _buildArray(rows: Array<Float32Array | Float64Array>) {
		this.data[0] = rows[0][0]
		this.data[1] = rows[0][1]
		this.data[2] = rows[0][2]
		this.data[3] = rows[1][0]
		this.data[4] = rows[1][1]
		this.data[5] = rows[1][2]
		this.data[6] = rows[2][0]
		this.data[7] = rows[2][1]
		this.data[8] = rows[2][2]
	}

	public add(mat: Matrix3, dest: Matrix3 = new Matrix3()): Matrix3 {
		dest.data[0] = this.data[0] + mat.data[0];
		dest.data[1] = this.data[1] + mat.data[1];
		dest.data[2] = this.data[2] + mat.data[2];
		dest.data[3] = this.data[3] + mat.data[3];
		dest.data[4] = this.data[4] + mat.data[4];
		dest.data[5] = this.data[5] + mat.data[5];
		dest.data[6] = this.data[6] + mat.data[6];
		dest.data[7] = this.data[7] + mat.data[7];
		dest.data[8] = this.data[8] + mat.data[8];
		return dest;
	}

	public sub(mat: Matrix3, dest: Matrix3 = new Matrix3()): Matrix3 {
		dest.data[0] = this.data[0] - mat.data[0];
		dest.data[1] = this.data[1] - mat.data[1];
		dest.data[2] = this.data[2] - mat.data[2];
		dest.data[3] = this.data[3] - mat.data[3];
		dest.data[4] = this.data[4] - mat.data[4];
		dest.data[5] = this.data[5] - mat.data[5];
		dest.data[6] = this.data[6] - mat.data[6];
		dest.data[7] = this.data[7] - mat.data[7];
		dest.data[8] = this.data[8] - mat.data[8];
		return dest;
	}

	public get(row: number, col: number): number {
		return this.data[row * col + col]
	}

	public toString(): string {
		return '';
	}
}
