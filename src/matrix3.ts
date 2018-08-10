import { Vector3 } from "./vector3";
import { Matrix } from "./matrix";

export class Matrix3 extends Matrix {
	public static IDENTITY(): Matrix3 {
		return new Matrix3([1, 0, 0], [0, 1, 0], [0, 0, 1]);
	}

	constructor(..._rows: Array<Array<number>>) {
		super(3, ..._rows);
	}

	protected buildArray(rows: Array<Array<number>>) {
		const data = this._data;
		data[0] = rows[0][0];
		data[1] = rows[0][1];
		data[2] = rows[0][2];
		data[3] = rows[1][0];
		data[4] = rows[1][1];
		data[5] = rows[1][2];
		data[6] = rows[2][0];
		data[7] = rows[2][1];
		data[8] = rows[2][2];
	}

	public add(mat: Matrix3, dest: Matrix3 = new Matrix3()): Matrix3 {
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
		return dest;
	}

	public sub(mat: Matrix3, dest: Matrix3 = new Matrix3()): Matrix3 {
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
		return dest;
	}

	public mulVec(vec: Vector3, dest: Vector3 = new Vector3()): Vector3 {
		const matData = this._data;
		const vecData = vec._data;
		const vecData_0 = vecData[0];
		const vecData_1 = vecData[1];
		const vecData_2 = vecData[2];
		const destData = dest._data;

		destData[0] =
			vecData_0 * matData[0] + vecData_1 * matData[1] + vecData_2 * matData[2];
		destData[1] =
			vecData_0 * matData[3] + vecData_1 * matData[4] + vecData_2 * matData[5];
		destData[2] =
			vecData_0 * matData[6] + vecData_1 * matData[7] + vecData_2 * matData[8];
		return dest;
	}

	public mulMat(mat: Matrix3, dest: Matrix3 = new Matrix3()): Matrix3 {
		const data = this._data;
		const data_0 = data[0];
		const data_1 = data[1];
		const data_2 = data[2];
		const data_3 = data[3];
		const data_4 = data[4];
		const data_5 = data[5];
		const data_6 = data[6];
		const data_7 = data[7];
		const data_8 = data[8];

		const matData = mat._data;
		const matData_0 = matData[0];
		const matData_1 = matData[1];
		const matData_2 = matData[2];
		const matData_3 = matData[3];
		const matData_4 = matData[4];
		const matData_5 = matData[5];
		const matData_6 = matData[6];
		const matData_7 = matData[7];
		const matData_8 = matData[8];

		const destData = dest._data;

		destData[0] = data_0 * matData_0 + data_1 * matData_3 + data_2 * matData_6;
		destData[3] = data_3 * matData_0 + data_4 * matData_3 + data_5 * matData_6;
		destData[6] = data_6 * matData_0 + data_7 * matData_3 + data_8 * matData_6;

		destData[1] = data_0 * matData_1 + data_1 * matData_4 + data_2 * matData_7;
		destData[4] = data_3 * matData_1 + data_4 * matData_4 + data_5 * matData_7;
		destData[7] = data_6 * matData_1 + data_7 * matData_4 + data_8 * matData_7;

		destData[2] = data_0 * matData_2 + data_1 * matData_5 + data_2 * matData_8;
		destData[5] = data_3 * matData_2 + data_4 * matData_5 + data_5 * matData_8;
		destData[8] = data_6 * matData_2 + data_7 * matData_5 + data_8 * matData_8;

		return dest;
	}

	public det(): number {
		const data = this._data;
		const data_3 = data[3];
		const data_4 = data[4];
		const data_5 = data[5];
		const data_6 = data[6];
		const data_7 = data[7];
		const data_8 = data[8];

		return (
			data[0] * (data_4 * data_8 - data_5 * data_7) -
			data[1] * (data_3 * data_8 - data_5 * data_6) +
			data[2] * (data_3 * data_7 - data_4 * data_6)
		);
	}

	public transpose(dest: Matrix3 = new Matrix3()): Matrix3 {
		const data = this._data;
		const destData = dest._data;

		destData[0] = data[0];
		destData[4] = data[4];
		destData[8] = data[8];

		destData[1] = data[1];

		let temp = data[1];
		destData[1] = data[3];
		destData[3] = temp;

		temp = data[2];
		destData[2] = data[6];
		destData[6] = temp;

		temp = data[5];
		destData[5] = data[7];
		destData[7] = temp;

		temp = null;
		return dest;
	}

	public adj(dest: Matrix3 = new Matrix3()): Matrix3 {
		const destData = dest._data;
		const data = this._data;
		const data_0 = data[0];
		const data_1 = data[1];
		const data_2 = data[2];
		const data_3 = data[3];
		const data_4 = data[4];
		const data_5 = data[5];
		const data_6 = data[6];
		const data_7 = data[7];
		const data_8 = data[8];

		destData[0] = data_4 * data_8 - data_5 * data_7;
		destData[1] = -(data_1 * data_8 - data_2 * data_7);
		destData[2] = data_1 * data_5 - data_2 * data_4;
		destData[3] = -(data_3 * data_8 - data_5 * data_6);
		destData[4] = data_0 * data_8 - data_2 * data_6;
		destData[5] = -(data_0 * data_5 - data_2 * data_3);
		destData[6] = data_3 * data_7 - data_4 * data_6;
		destData[7] = -(data_0 * data_7 - data_1 * data_6);
		destData[8] = data_0 * data_4 - data_1 * data_3;

		return dest;
	}

	public inv(dest: Matrix3 = new Matrix3()): Matrix3 {
		let det = this.det();
		if (det === 0) {
			throw new Error("Determinant is 0.");
		}

		const adj = this.adj(dest);
		const adjData = adj._data;

		adjData[0] /= det;
		adjData[1] /= det;
		adjData[2] /= det;
		adjData[3] /= det;
		adjData[4] /= det;
		adjData[5] /= det;
		adjData[6] /= det;
		adjData[7] /= det;
		adjData[8] /= det;

		return dest;
	}

	public static rotateAxis(
		axis: Vector3,
		angle: number,
		dest: Matrix3 = new Matrix3()
	): Matrix3 {
		const data = dest._data;
		const axisData = axis._data;
		const axisData_0 = axisData[0];
		const axisData_1 = axisData[1];
		const axisData_2 = axisData[2];

		const cos = Math.cos(angle);
		const minusCos = 1 - cos;
		const sin = Math.sin(angle);

		data[0] = cos + Math.pow(axisData_0, 2) * minusCos;
		data[1] = axisData_0 * axisData_1 * minusCos - axisData_2 * sin;
		data[2] = axisData_0 * axisData_2 * minusCos + axisData_1 * sin;
		data[3] = axisData_1 * axisData_0 * minusCos + axisData_2 * sin;
		data[4] = cos + Math.pow(axisData_1, 2) * minusCos;
		data[5] = axisData_1 * axisData_2 * minusCos - axisData_0 * sin;
		data[6] = axisData_2 * axisData_0 * minusCos - axisData_1 * sin;
		data[7] = axisData_2 * axisData_1 * minusCos - axisData_0 * sin;
		data[8] = cos + Math.pow(axisData_2, 2) * minusCos;

		return dest;
	}

	public static rotate(
		x: number,
		y: number,
		z: number,
		dest: Matrix3 = new Matrix3()
	): Matrix3 {
		const data = dest._data;

		const cosX = Math.cos(x);
		const cosY = Math.cos(y);
		const cosZ = Math.cos(z);

		const sinX = Math.sin(x);
		const sinY = Math.sin(y);
		const sinZ = Math.sin(z);

		data[0] = cosZ * cosY - sinZ * sinY * sinX;
		data[1] = -(cosX * sinZ);
		data[2] = cosZ * sinY + cosY * sinZ * sinX;
		data[3] = cosY * sinZ + cosZ * sinX * sinY;
		data[4] = cosZ * cosX;
		data[5] = sinZ * sinY - cosZ * cosY * sinX;
		data[6] = -(cosX * sinY);
		data[7] = sinX;
		data[8] = cosX * cosY;

		return dest;
	}
}
