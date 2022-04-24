import { useState } from "react";

import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ ncols = 5, nrows = 5, chanceLightStartsOn = 0.25 }) {
    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    const createBoard = () => {
        let board = [];
        // TODO: create array-of-arrays of true/false values
        for (let y = 0; y < nrows; y++) {
            let row = [];
            for (let x = 0; x < ncols; x++) {
                row.push(Math.random() < chanceLightStartsOn);
            }
            board.push(row);
        }
        return board;
    };

    // TODO: set initial state
    const [hasWon, setHasWon] = useState(false);
    const [board, setBoard] = useState(createBoard());

    /** handle changing a cell: update board & determine if winner */

    const flipCellsAround = (coord) => {
        let newBoard = [...board];
        let [y, x] = coord.split("-").map(Number);

        function flipCell(y, x) {
            // if this coord is actually on board, flip it

            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                newBoard[y][x] = !newBoard[y][x];
            }
        }

        // TODO: flip this cell and the cells around it
        flipCell(y, x);
        flipCell(y, x - 1);
        flipCell(y, x + 1);
        flipCell(y - 1, x);
        flipCell(y + 1, x);

        // win when every cell is turned off
        // TODO: determine is the game has been won
        let newHasWon = newBoard.every((row) => row.every((cell) => !cell));

        setBoard(newBoard);
        setHasWon(newHasWon);
    };

    // if the game is won, just show a winning msg & render nothing else
    // TODO
    // make table board (or a function that returns a table board)
    // TODO
    const renderTable = () => {
        const tableBoard = [];
        for (let y = 0; y < nrows; y++) {
            let row = [];
            for (let x = 0; x < ncols; x++) {
                const coord = `${y}-${x}`;
                row.push(
                    <Cell
                        key={coord}
                        isLit={board[y][x]}
                        flipCellsAroundMe={() => flipCellsAround(coord)}
                    />
                );
            }
            tableBoard.push(<tr key={y}>{row}</tr>);
        }
        return tableBoard;
    };

    if (hasWon)
        return (
            <div className="Board-title">
                <div className="winner">
                    <span className="neon-orange">YOU</span>
                    <span className="neon-blue">WON</span>
                </div>
            </div>
        );

    return (
        <div>
            <div className="Board-title">
                <div className="neon-orange">Lights</div>
                <div className="neon-blue">Out</div>
            </div>
            <table className="Board">
                <tbody>{renderTable()}</tbody>
            </table>
        </div>
    );
}

export default Board;
