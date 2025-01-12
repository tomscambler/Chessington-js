import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let position = {"row" : location.row,
                        "col" : location.col};
        let squareToCheck;
        let pieceToCheck;

        let moves = [];

        [-1,+1].forEach(direction => {
            [{fixed : "row", moving: "col"},
             {fixed : "col", moving: "row"}].forEach( axis => {
                
                for ( let i = position[axis.moving] + direction; i>=0 && i<=7; i+=direction ){

                    let [x, y] = axis.moving==="row" ? [i, position[axis.fixed]] : [position[axis.fixed], i];

                    squareToCheck = Square.at(x, y);
                    pieceToCheck = board.getPiece(squareToCheck);

                    if (!pieceToCheck){
                        moves.push(squareToCheck);

                    }
                    else if (pieceToCheck && pieceToCheck.player !== this.player){

                        moves.push(squareToCheck);

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
