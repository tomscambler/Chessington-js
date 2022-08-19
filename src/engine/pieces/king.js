import Piece from './piece';
import Board from '../../../src/engine/board';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let moves = [];
        let squareToCheck; let pieceToCheck;

        [-1, 0, +1].forEach(horizontalMove => {
            [-1, 0, +1].forEach(verticalMove => {

                squareToCheck = Square.at(row + horizontalMove, col + verticalMove);

                if (board.checkSquareWithinBoard(squareToCheck)){

                    //if (horizontalMove || verticalMove){

                        pieceToCheck = board.getPiece(squareToCheck);

                        if (!pieceToCheck || pieceToCheck.player !== this.player){
                            moves.push(squareToCheck);
                        }
                    //}
                }
            });
        });

        return moves;
    }
}
