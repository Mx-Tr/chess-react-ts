import React from "react";
import {Board} from "../models/Board.ts";
import {FC} from "react";
import CellComponent from "./CellComponent.tsx";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {


    return (
        <div className="board">

            {board.cells.map((row, index) =>
                <React.Fragment key={index}>

                    {row.map((cell) =>
                        <CellComponent/>
                    )}

                </React.Fragment>
            )}

        </div>
    );
};

export default BoardComponent;