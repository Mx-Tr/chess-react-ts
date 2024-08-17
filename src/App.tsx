import "./App.css"
import BoardComponent from "./components/BoardComponent.tsx";
import {useEffect, useState} from "react";
import {Board} from "./models/Board.ts";


const App = () => {

	const [board, setBoard] = useState(new Board())

	useEffect(() => {
		restart()
	}, [])

	const restart = () => {
		const newBoard = new Board()
		newBoard.initCells()
		setBoard(newBoard)
	}

	return (
		<div className="App">

			<BoardComponent
				board={board}
				setBoard={setBoard}
			/>

		</div>
	);
};

export default App;