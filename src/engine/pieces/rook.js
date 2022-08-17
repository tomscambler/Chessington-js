import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let squareToCheck;
        let pieceToCheck;

        let moves = []
 
        // for (let i = 0; i<8; i++){
        //     if (i !=location.row){
        //         moves.push(Square.at(i, location.col))
        //     }
        //     if (i != location.col){
        //         moves.push(Square.at(location.row, i))
        //     }
        // }

        //check up
        // direction = +1;
        // maxRow = 7
        // [{direction: +1, maxRow: 7}, 
        //  {direction: -1, maxRow: 0}]
        for ( let i=row+1; i<=7; i++ ){
            squareToCheck = Square.at(i, col);
            pieceToCheck = board.getPiece(squareToCheck);
            if (!pieceToCheck){
                moves.push(squareToCheck);
            }
            else if (pieceToCheck.player !== this.player){
                moves.push(squareToCheck);
                break;
            }
            else {
                break;
            }
        }
        //check down
        for ( let i=row-1; i>=0; i-- ){
            squareToCheck = Square.at(i, col);
            pieceToCheck = board.getPiece(squareToCheck);
            if (!pieceToCheck){
                moves.push(squareToCheck);
            }
            else if (pieceToCheck.player !== this.player){
                moves.push(squareToCheck);
                break;
            }
            else {
                break;
            }
        }
        //check right
        for ( let j=col+1; j<=7; j++ ){
            squareToCheck = Square.at(row, j);
            pieceToCheck = board.getPiece(squareToCheck);
            if (!pieceToCheck){
                moves.push(squareToCheck);
            }
            else if (pieceToCheck.player !== this.player){
                moves.push(squareToCheck);
                break;
            }
            else {
                break;
            }
        }
        //check left
        for ( let j=col-1; j>=0; j--){
            squareToCheck = Square.at(row, j);
            pieceToCheck = board.getPiece(squareToCheck);
            if (!pieceToCheck){
                moves.push(squareToCheck);
            }
            else if (pieceToCheck.player !== this.player){
                moves.push(squareToCheck);
                break;
            }
            else {
                break;
            }
        }


        return moves;
    }
}
