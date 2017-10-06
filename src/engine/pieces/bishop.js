import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    isWithinBoard(square){
        let i = square.row;
        let j = square.col;
        return ((0 <= i && i <= 7) && (0 <= j && j <= 7));
    }
    
    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let row = location.row; let col = location.col;
        let moves = [];
        let squareToCheck;
        let pieceToCheck;
        let tempMoves;

        [-1, +1].forEach(gradient => {
            tempMoves = [];

            for ( let i = -7; i<=7; i++ ){

                squareToCheck = Square.at(row + i*gradient, col + i);

                if (this.isWithinBoard(squareToCheck)){

                    pieceToCheck = board.getPiece(squareToCheck);

                    if (i < 0){
                        if (!pieceToCheck){
                            tempMoves.push(squareToCheck);
                        }
                        else if (pieceToCheck.player !== this.player){
                            tempMoves = [];
                            tempMoves.push(squareToCheck);
                            }
                        else {
                            tempMoves = [];
                        }
                    }
                    else if (i > 0){
                        if (!pieceToCheck){
                            tempMoves.push(squareToCheck);
                        }
                        else if (pieceToCheck.player !== this.player){
                            tempMoves.push(squareToCheck);
                            break;
                            }
                        else {
                            break;
                        }
                    }
                }
            }
            moves = moves.concat(tempMoves);
        });  
        return moves;

            // }
            // squareToCheck = Square.at(row + i, col + i);
            // pieceToCheck = board.getPiece(squareToCheck);
            // if (!pieceToCheck){
            //     moves.push(squareToCheck);
            // }
            // else if (pieceToCheck.player !== this.player){
            //     moves.push(squareToCheck);
            //     break;
            // }
            // else {
            //     break;
            // }
        
    }
}
