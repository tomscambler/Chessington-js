import Player from '../player';
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

        let moves = [];

        //console.log(board.getPiece(Square.at(4,6)),"###########################################################");

        // for (let i=0; i<7; i++){
        //     for (let j=0; j<7; j++){
        //         let piece = board.getPiece(Square.at(i,j));
        //         console.log(piece);
        //     }
        // }


        [-1,+1].forEach(direction => {

            [{fixed : row, moving: col},
             {fixed : col, moving: row}].forEach( axis => {
                console.log("===============================================");
                console.log(row, col);

                for ( let i = axis.moving + direction; i>=0 && i<=7; i+=direction ){

                    let [x, y] = axis.moving===row ? [i, axis.fixed] : [axis.fixed, i];

                    squareToCheck = Square.at(4, 6);
                    pieceToCheck = board.getPiece(squareToCheck);
                    
                    console.log(pieceToCheck,x,y);
                    if (!pieceToCheck){
                        moves.push(squareToCheck);
                        //console.log(x,y,pieceToCheck,moves);
                    }
                    else if (pieceToCheck && pieceToCheck.player !== this.player){
                        moves.push(squareToCheck);
                        //console.log(x,y,pieceToCheck,moves);
                        break;
                    }
                    else {
                        break;
                    }
                }
            });
        });

        return moves;
     }
}
