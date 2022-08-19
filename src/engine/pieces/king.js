import Piece from './piece';
import Board from '../../../src/engine/board';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.row;
        let moves = [];
        let squareToCheck; let pieceToCheck;

        [-1, 0, 1].forEach(horizontalMove => {
            [-1, 0, 1].forEach(verticalMove => {
                
            })
        })

        return moves;
    }
}
