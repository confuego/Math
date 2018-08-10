import { Matrix } from "./matrix";
import { Vector4 } from "./vector4";
import { Vector3 } from "./vector3";

export class Matrix4 extends Matrix {
	public static IDENTITY(): Matrix4 {
		return new Matrix4([1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]);
	}

	public static ortho(
		left: number,
		right: number,
		bottom: number,
		top: number,
		near: number,
		far: number,
		dest: Matrix4 = new Matrix4()
	): Matrix4 {
		const destData = dest._data;

		destData[0] = 2 / (right - left);
		destData[1] = 0;
		destData[2] = 0;
		destData[3] = -((right + left) / (right - left));
		destData[4] = 0;
		destData[5] = 2 / (top - bottom);
		destData[6] = 0;
		destData[7] = -((top + bottom) / (top - bottom));
		destData[8] = 0;
		destData[9] = 0;
		destData[10] = -2 / (far - near);
		destData[11] = -((far + near) / (far - near));
		destData[12] = 0;
		destData[13] = 0;
		destData[14] = 0;
		destData[15] = 1;

		return dest;
	}

	public static pers(
		fieldOfView: number,
		near: number,
		far: number,
		aspectRatio: number,
		dest: Matrix4 = new Matrix4()
	): Matrix4 {
		const destData = dest._data;

		const top = near * Math.tan((fieldOfView * (Math.PI / 180)) / 2);
		const bottom = -top;
		const right = top * aspectRatio;
		const left = -right;

		destData[0] = (2 * near) / (right - left);
		destData[1] = 0;
		destData[2] = 0;
		destData[3] = -near * ((right + left) / (right - left));
		destData[4] = 0;
		destData[5] = (2 * near) / (top - bottom);
		destData[6] = 0;
		destData[7] = -near * ((top + bottom) / (top - bottom));
		destData[8] = 0;
		destData[9] = 0;
		destData[10] = -(far + near) / (far - near);
		destData[11] = (2 * far * near) / (near - far);
		destData[12] = 0;
		destData[13] = 0;
		destData[14] = -1;
		destData[15] = 0;

		return dest;
	}

	constructor(..._rows: Array<Array<number>>) {
		super(4, ..._rows);
	}

	protected buildArray(rows: Array<Array<number>>) {
		const data = this._data;
		data[0] = rows[0][0];
		data[1] = rows[0][1];
		data[2] = rows[0][2];
		data[3] = rows[0][3];
		data[4] = rows[1][0];
		data[5] = rows[1][1];
		data[6] = rows[1][2];
		data[7] = rows[1][3];
		data[8] = rows[2][0];
		data[9] = rows[2][1];
		data[10] = rows[2][2];
		data[11] = rows[2][3];
		data[12] = rows[3][0];
		data[13] = rows[3][1];
		data[14] = rows[3][2];
		data[15] = rows[3][3];
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

	public mulVec(vec: Vector4, dest: Vector4 = new Vector4()): Vector4 {
		const matData = this._data;
		const vecData = vec._data;
		const vecData_0 = vecData[0];
		const vecData_1 = vecData[1];
		const vecData_2 = vecData[2];
		const vecData_3 = vecData[3];
		const destData = dest._data;

		destData[0] =
			vecData_0 * matData[0] +
			vecData_1 * matData[1] +
			vecData_2 * matData[2] +
			vecData_3 * matData[3];
		destData[1] =
			vecData_0 * matData[4] +
			vecData_1 * matData[5] +
			vecData_2 * matData[6] +
			vecData_3 * matData[7];
		destData[2] =
			vecData_0 * matData[8] +
			vecData_1 * matData[9] +
			vecData_2 * matData[10] +
			vecData_3 * matData[11];
		destData[3] =
			vecData_0 * matData[12] +
			vecData_1 * matData[13] +
			vecData_2 * matData[14] +
			vecData_3 * matData[15];

		return dest;
	}

	public mulMat(mat: Matrix4, dest: Matrix4 = new Matrix4()): Matrix4 {
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
		const data_9 = data[9];
		const data_10 = data[10];
		const data_11 = data[11];
		const data_12 = data[12];
		const data_13 = data[13];
		const data_14 = data[14];
		const data_15 = data[15];

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
		const matData_9 = matData[9];
		const matData_10 = matData[10];
		const matData_11 = matData[11];
		const matData_12 = matData[12];
		const matData_13 = matData[13];
		const matData_14 = matData[14];
		const matData_15 = matData[15];

		const destData = dest._data;

		destData[0] =
			data_0 * matData_0 +
			data_1 * matData_4 +
			data_2 * matData_8 +
			data_3 * matData_12;
		destData[4] =
			data_4 * matData_0 +
			data_5 * matData_4 +
			data_6 * matData_8 +
			data_7 * matData_12;
		destData[8] =
			data_8 * matData_0 +
			data_9 * matData_4 +
			data_10 * matData_8 +
			data_11 * matData_12;
		destData[12] =
			data_12 * matData_0 +
			data_13 * matData_4 +
			data_14 * matData_8 +
			data_15 * matData_12;

		destData[1] =
			data_0 * matData_1 +
			data_1 * matData_5 +
			data_2 * matData_9 +
			data_3 * matData_13;
		destData[5] =
			data_4 * matData_1 +
			data_5 * matData_5 +
			data_6 * matData_9 +
			data_7 * matData_13;
		destData[9] =
			data_8 * matData_1 +
			data_9 * matData_5 +
			data_10 * matData_9 +
			data_11 * matData_13;
		destData[13] =
			data_12 * matData_1 +
			data_13 * matData_5 +
			data_14 * matData_9 +
			data_15 * matData_13;

		destData[2] =
			data_0 * matData_2 +
			data_1 * matData_6 +
			data_2 * matData_10 +
			data_3 * matData_14;
		destData[6] =
			data_4 * matData_2 +
			data_5 * matData_6 +
			data_6 * matData_10 +
			data_7 * matData_14;
		destData[10] =
			data_8 * matData_2 +
			data_9 * matData_6 +
			data_10 * matData_10 +
			data_11 * matData_14;
		destData[14] =
			data_12 * matData_2 +
			data_13 * matData_6 +
			data_14 * matData_10 +
			data_15 * matData_14;

		destData[3] =
			data_0 * matData_3 +
			data_1 * matData_7 +
			data_2 * matData_11 +
			data_3 * matData_15;
		destData[7] =
			data_4 * matData_3 +
			data_5 * matData_7 +
			data_6 * matData_11 +
			data_7 * matData_15;
		destData[11] =
			data_8 * matData_3 +
			data_9 * matData_7 +
			data_10 * matData_11 +
			data_11 * matData_15;
		destData[15] =
			data_12 * matData_3 +
			data_13 * matData_7 +
			data_14 * matData_11 +
			data_15 * matData_15;

		return dest;
	}

	public det(): number {
		const data = this._data;
		const data_4 = data[4];
		const data_5 = data[5];
		const data_6 = data[6];
		const data_7 = data[7];
		const data_8 = data[8];
		const data_9 = data[9];
		const data_10 = data[10];
		const data_11 = data[11];
		const data_12 = data[12];
		const data_13 = data[13];
		const data_14 = data[14];
		const data_15 = data[15];

		const coFactor_1 =
			data_5 * (data_10 * data_15 - data_11 * data_14) -
			data_6 * (data_9 * data_15 - data_11 * data_13) +
			data_7 * (data_9 * data_14 - data_10 * data_13);
		const coFactor_2 =
			data_4 * (data_10 * data_15 - data_11 * data_14) -
			data_6 * (data_8 * data_15 - data_11 * data_12) +
			data_7 * (data_8 * data_14 - data_10 * data_12);
		const coFactor_3 =
			data_4 * (data_9 * data_15 - data_11 * data_13) -
			data_5 * (data_8 * data_15 - data_11 * data_12) +
			data_7 * (data_8 * data_13 - data_9 * data_12);
		const coFactor_4 =
			data_4 * (data_9 * data_14 - data_13 * data_10) -
			data_5 * (data_8 * data_14 - data_10 * data_12) +
			data_6 * (data_8 * data_13 - data_9 * data_12);
		return (
			data[0] * coFactor_1 -
			data[1] * coFactor_2 +
			data[2] * coFactor_3 -
			data[3] * coFactor_4
		);
	}

	public adj(dest: Matrix4 = new Matrix4()): Matrix4 {
		const data = this._data;
		const destData = dest._data;
		const data_0 = data[0];
		const data_1 = data[1];
		const data_2 = data[2];
		const data_3 = data[3];
		const data_4 = data[4];
		const data_5 = data[5];
		const data_6 = data[6];
		const data_7 = data[7];
		const data_8 = data[8];
		const data_9 = data[9];
		const data_10 = data[10];
		const data_11 = data[11];
		const data_12 = data[12];
		const data_13 = data[13];
		const data_14 = data[14];
		const data_15 = data[15];

		destData[0] =
			data_5 * (data_10 * data_15 - data_11 * data_14) -
			data_6 * (data_9 * data_15 - data_11 * data_13) +
			data_7 * (data_9 * data_14 - data_10 * data_13);

		destData[4] = -(
			data_4 * (data_10 * data_15 - data_11 * data_14) -
			data_6 * (data_8 * data_15 - data_11 * data_12) +
			data_7 * (data_8 * data_14 - data_10 * data_12)
		);

		destData[8] =
			data_4 * (data_9 * data_15 - data_11 * data_13) -
			data_5 * (data_8 * data_15 - data_11 * data_12) +
			data_7 * (data_8 * data_13 - data_9 * data_12);

		destData[12] = -(
			data_4 * (data_9 * data_14 - data_13 * data_10) -
			data_5 * (data_8 * data_14 - data_10 * data_12) +
			data_6 * (data_8 * data_13 - data_9 * data_12)
		);

		destData[1] = -(
			data_1 * (data_10 * data_15 - data_11 * data_14) -
			data_2 * (data_9 * data_15 - data_11 * data_13) +
			data_3 * (data_9 * data_14 - data_10 * data_13)
		);

		destData[5] =
			data_0 * (data_10 * data_15 - data_11 * data_14) -
			data_2 * (data_8 * data_15 - data_11 * data_12) +
			data_3 * (data_8 * data_14 - data_10 * data_12);

		destData[9] = -(
			data_0 * (data_9 * data_15 - data_11 * data_13) -
			data_1 * (data_8 * data_15 - data_11 * data_12) +
			data_3 * (data_8 * data_13 - data_9 * data_12)
		);

		destData[13] =
			data_0 * (data_9 * data_14 - data_10 * data_13) -
			data_1 * (data_8 * data_14 - data_10 * data_12) +
			data_2 * (data_8 * data_13 - data_9 * data_12);

		destData[2] =
			data_1 * (data_6 * data_15 - data_7 * data_14) -
			data_2 * (data_5 * data_15 - data_7 * data_13) +
			data_3 * (data_5 * data_14 - data_6 * data_13);

		destData[6] = -(
			data_0 * (data_6 * data_15 - data_7 * data_14) -
			data_2 * (data_4 * data_15 - data_7 * data_12) +
			data_3 * (data_4 * data_14 - data_6 * data_12)
		);

		destData[10] =
			data_0 * (data_5 * data_15 - data_7 * data_13) -
			data_1 * (data_4 * data_15 - data_7 * data_12) +
			data_3 * (data_4 * data_13 - data_5 * data_12);

		destData[14] = -(
			data_0 * (data_5 * data_14 - data_6 * data_13) -
			data_1 * (data_4 * data_14 - data_6 * data_12) +
			data_2 * (data_4 * data_13 - data_5 * data_12)
		);

		destData[3] = -(
			data_1 * (data_6 * data_11 - data_7 * data_10) -
			data_2 * (data_5 * data_11 - data_7 * data_9) +
			data_3 * (data_5 * data_10 - data_6 * data_9)
		);

		destData[7] =
			data_0 * (data_6 * data_11 - data_7 * data_10) -
			data_2 * (data_4 * data_11 - data_7 * data_8) +
			data_3 * (data_4 * data_10 - data_6 * data_8);

		destData[11] = -(
			data_0 * (data_5 * data_11 - data_7 * data_9) -
			data_1 * (data_4 * data_11 - data_7 * data_8) +
			data_3 * (data_4 * data_9 - data_5 * data_8)
		);

		destData[15] =
			data_0 * (data_5 * data_10 - data_6 * data_9) -
			data_1 * (data_4 * data_10 - data_6 * data_8) +
			data_2 * (data_4 * data_9 - data_5 * data_8);

		return dest;
	}

	public inv(dest: Matrix4 = new Matrix4()): Matrix4 {
		const det = this.det();
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
		adjData[9] /= det;
		adjData[10] /= det;
		adjData[11] /= det;
		adjData[12] /= det;
		adjData[13] /= det;
		adjData[14] /= det;
		adjData[15] /= det;

		return adj;
	}

	public static rotateAxis(
		axis: Vector3,
		angle: number,
		dest: Matrix4 = new Matrix4()
	): Matrix4 {
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
		data[4] = axisData_1 * axisData_0 * minusCos + axisData_2 * sin;
		data[5] = cos + Math.pow(axisData_1, 2) * minusCos;
		data[6] = axisData_1 * axisData_2 * minusCos - axisData_0 * sin;
		data[8] = axisData_2 * axisData_0 * minusCos - axisData_1 * sin;
		data[9] = axisData_2 * axisData_1 * minusCos - axisData_0 * sin;
		data[10] = cos + Math.pow(axisData_2, 2) * minusCos;
		data[3] = 0;
		data[7] = 0;
		data[11] = 0;
		data[15] = 1;
		data[12] = 0;
		data[13] = 0;
		data[14] = 0;

		return dest;
	}

	public static rotate(
		x: number,
		y: number,
		z: number,
		dest: Matrix4 = new Matrix4()
	): Matrix4 {
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
		data[4] = cosY * sinZ + cosZ * sinX * sinY;
		data[5] = cosZ * cosX;
		data[6] = sinZ * sinY - cosZ * cosY * sinX;
		data[8] = -(cosX * sinY);
		data[9] = sinX;
		data[10] = cosX * cosY;
		data[3] = 0;
		data[7] = 0;
		data[11] = 0;
		data[15] = 1;
		data[12] = 0;
		data[13] = 0;
		data[14] = 0;

		return dest;
	}

	public static translation(
		x: number,
		y: number,
		z: number,
		dest: Matrix4 = Matrix4.IDENTITY()
	): Matrix4 {
		const data = dest._data;

		data[3] = x;
		data[7] = y;
		data[11] = z;

		return dest;
	}

	public static scale(
		x: number,
		y: number,
		z: number,
		dest: Matrix4 = Matrix4.IDENTITY()
	): Matrix4 {
		const data = dest._data;

		data[0] = x;
		data[5] = y;
		data[10] = z;

		return dest;
	}
}
