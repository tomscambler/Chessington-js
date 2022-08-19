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

        // let opponentMoves = this.getOpponentMoves(board);

        // moves.forEach(possibleMove)

        // let remainingMoves = moves.filter(x => {

            

        //     !opponentMoves.includes((x.row, x.col))

        // });
        
        return moves;
    }

    getOpponentMoves(board){

        let piece;
        let opponentMoves = [];
        
        for(let i=0; i<8; i++){
            for (let j=0; j<8; j++){

                piece = board.getPiece(Square.at(i,j))

                if (piece && piece.player !== this.player){

                    opponentMoves.push(...piece.getAvailableMoves(board));

                }
            }
        }
        return opponentMoves;
    }
}
