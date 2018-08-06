export abstract class Matrix {
	public _data: Float32Array = new Float32Array(this.size * this.size);

	constructor(public size: number, ..._rows: Array<Array<number>>) {
		if(Array.isArray(_rows)
		&& _rows.length === size
		&& _rows.every(row => Array.isArray(row) && row.length === size)) {
			this.buildArray(_rows);
		}
	}

	protected abstract buildArray(rows: Array<Array<number>>): void;

	public get(row: number, col: number): number {
		return this._data[row * this.size + col];
	}

	public set(row: number, col: number, val: number): void {
		this._data[row * this.size + col] = val;
	}

	public toString(): string {
		let display = '';
		const size = this.size;
		const len = size * size;
		const data = this._data;

		for(let i = 0; i < len; i++) {
			display += (i % size === 0) ? '\n' : ',';
			display += data[i].toString();
		}

		return display;
	}
}
