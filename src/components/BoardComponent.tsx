import React, {useEffect, useState} from "react";
import {Board} from "../models/Board.ts";
import {FC} from "react";
import CellComponent from "./CellComponent.tsx";
import {Cell} from "../models/Cell.ts";

interface BoardProps {
	board: Board;
	setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

	function click(cell: Cell) {
		if (cell.figure) {
			setSelectedCell(cell);
		}
	}

	useEffect(() => {
		highlightCells();
	}, [selectedCell])

	function updateBoard() {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard)
	}

	function highlightCells() {
		board.highlightCells(selectedCell)
		updateBoard()
	}

	return (
		<div className="board">

			{board.cells.map((row, index) =>
				<React.Fragment key={index}>
					{row.map((cell) =>
						<CellComponent
							cell={cell}
							selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
							click={click}
							key={cell.id}
						/>
					)}
				</React.Fragment>
			)}

		</div>
	);
};

export default BoardComponent;