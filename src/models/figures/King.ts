import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {

	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.KING;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}

		// if (
		// 	(target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
		// 	&& target.x === this.cell.x
		// 	||
		// 	(target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
		// 	&& target.y === this.cell.y
		// 	||
		// 	(target.y === this.cell.y + 1 && target.x === this.cell.x + 1 || target.y === this.cell.y - 1 && target.x === this.cell.x - 1)
		// 	||
		// 	(target.y === this.cell.y - 1 && target.x === this.cell.x + 1 || target.y === this.cell.y + 1 && target.x === this.cell.x - 1)
		// ) {
		// 	return true
		// }

		const dx = Math.abs(target.x - this.cell.x);
		const dy = Math.abs(target.y - this.cell.y);
		// Изменения по осям X и Y

		if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1) || (dx === 1 && dy === 1)) {
			return true;
		}

		return false;
	}

}