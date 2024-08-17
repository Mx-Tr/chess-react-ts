import {Cell} from "../models/Cell.ts";
import {FC} from "react";

interface CellProps {
	cell: Cell;
}

const CellComponent: FC<CellProps> = ({cell}) => {
	return (
		<div className={["cell", cell.color].join(' ')}>

		</div>
	);
};

export default CellComponent;