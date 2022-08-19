import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }



    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let row = location.row; let col = location.col;
        let moves = [];
        let squareToCheck;
        let pieceToCheck;

        [
            [+1,+2],
            [-1,+2],
            [+1,-2],
            [-1,-2],
            [+2,+1],
            [-2,+1],
            [+2,-1],
            [-2,-1]
        ].forEach(possibleMove => {
            
            squareToCheck = Square.at(row + possibleMove[0], col + possibleMove[1]);
            if (board.checkSquareWithinBoard(squareToCheck)){
                moves.push(squareToCheck);
            }
        });
        return moves;
    }
}
