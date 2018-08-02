import { Vector3 } from "./vector3";
import { Matrix } from "./matrix";

export class Matrix3 extends Matrix {

	constructor(..._rows: Array<Float32Array>) {
		super(3, ..._rows);
	}

	protected buildArray(rows: Array<Float32Array>) {
		const data = this._data;
		data[0] = rows[0][0]
		data[1] = rows[0][1]
		data[2] = rows[0][2]
		data[3] = rows[1][0]
		data[4] = rows[1][1]
		data[5] = rows[1][2]
		data[6] = rows[2][0]
		data[7] = rows[2][1]
		data[8] = rows[2][2]
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

		destData[0] = vecData_0 * matData[0] + vecData_0 * matData[1] + vecData_0 * matData[2];
		destData[1] = vecData_1 * matData[3] + vecData_1 * matData[4] + vecData_1 * matData[5];
		destData[2] = vecData_2 * matData[6] + vecData_2 * matData[7] + vecData_2 * matData[8];
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
}
