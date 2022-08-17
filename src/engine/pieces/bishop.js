import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    isWithinBoard(i, j){

        return ((0 <= i && i <= 7) && (0 <= j && j <= 7));
    }
    
    getAvailableMoves(board) {

        let location = board.findPiece(this)
        let row = location.row; let col = location.col;
        let moves = [];
        let squareToCheck;
        let pieceToCheck;



    
        // checking y=x
        [-1, +1].forEach(gradient =>{
            for ( let i = -7; i<=7; i++ ){
                if (i != 0){
                    if (this.isWithinBoard(row + i*gradient, col + i)){
                        
                        moves.push(Square.at(row + i*gradient, col + i))
                    }
                }
            }
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
