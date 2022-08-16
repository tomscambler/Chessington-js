import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }


    isSquareFree(i, j, board){
        if (board.getPiece(Square.at(i, j)) === undefined){
            return true
        }
        return false
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this)
        let moves  = []; let direction; let startingRow;

        if (this.player === Player.WHITE){
            direction = 1
            startingRow = 1
        }
        else {
            direction = -1
            startingRow = 6
        }
        
        if (this.isSquareFree(location.row + direction, location.col, board)){
            moves.push(Square.at(location.row + direction, location.col))
            if (location.row === startingRow && this.isSquareFree(location.row + 2*direction, location.col, board)){
                    moves.push(Square.at(location.row + 2*direction, location.col))
            }
        }
        
    return moves
    }
}
