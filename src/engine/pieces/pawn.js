import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }


    getAvailableMoves(board) {

        let location = board.findPiece(this)
        let moves  = []; let direction; let startingRow; let finalRow;

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
        //checks if a forward move can be made
        let squareToCheck = Square.at(location.row + direction, location.col)
        let pieceAtSquare = board.getPiece(squareToCheck)
        if (pieceAtSquare === undefined){
            moves.push(squareToCheck)
            squareToCheck = Square.at(location.row + 2*direction, location.col)
            pieceAtSquare = board.getPiece(squareToCheck)
            if (pieceAtSquare === undefined && location.row === startingRow){
                    moves.push(squareToCheck)
            }
        }
        // checks if a piece can be taken diagonally
        [-1, +1].forEach(sidewaysDirection => {
            squareToCheck = Square.at(location.row + direction, location.col + sidewaysDirection);
            let pieceToCheck = board.getPiece(squareToCheck);
            if (pieceToCheck && pieceToCheck.player !== this.player){   //could have just been pieceToCheck.player != this.player!
                moves.push(squareToCheck)
            }
        })
        return moves;
    }
}
