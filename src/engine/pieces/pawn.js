import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }


    // isSquareFree(i, j, board){
    //     if (board.getPiece(Square.at(i, j)) === undefined){
    //         return true
    //     }
    //     return false
    // }


    getAvailableMoves(board) {

        let location = board.findPiece(this)
        let moves  = []; let direction; let startingRow; let finalRow;
        let squareToCheck; let pieceToCheck;

        if (this.player === Player.WHITE){
            direction = +1
            startingRow = 1
            finalRow = 7
        }
        else {
            direction = -1
            startingRow = 6
            finalRow = 0
        }
        if (location.row === finalRow){
            return moves
        }

        squareToCheck = Square.at(location.row + direction, location.col)
        if (board.isSquareFree(squareToCheck)){
            moves.push(squareToCheck)
            squareToCheck = Square.at(location.row + 2*direction, location.col)
            if (location.row === startingRow && board.isSquareFree(squareToCheck)){
                    moves.push(squareToCheck)
            }
        }
        [-1, +1].forEach(sidewaysDirection => {
            squareToCheck = Square.at(location.row + direction, location.col + sidewaysDirection);
            pieceToCheck = board.getPiece(squareToCheck);
            if (pieceToCheck && pieceToCheck.player === this.opposingPlayer){
                moves.push(squareToCheck)
            }
        })

        return moves

    }
}
