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

        let opponentMoves = this.getOpponentMoves(board); 
        let remainingMoves = [];  

        movesLoop:
        for (let i = 0; i<moves.length; i++){
            for (let j = 0; j<opponentMoves.length; j++){
                if (this.areSquaresEqual(moves[i], opponentMoves[j])){
                    continue movesLoop
                }
            }

            remainingMoves.push(moves[i])
        }

        
        return remainingMoves;
    }

    areSquaresEqual (square1, square2){

        return square1.row === square2.row && square1.col === square2.col
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
