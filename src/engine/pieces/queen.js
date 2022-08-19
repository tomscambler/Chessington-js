import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }



    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let moves = [];
        let tempMoves;
        let position = {"row" : location.row,
                        "col" : location.col};
        let squareToCheck; let pieceToCheck;

        [-1, +1].forEach(gradient => {
            tempMoves = [];

            for ( let i = -7; i<=7; i++ ){

                squareToCheck = Square.at(row + i*gradient, col + i);

                if (board.checkSquareWithinBoard(squareToCheck)){

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
            console.log(moves);
        }); 

        [-1,+1].forEach(direction => {
            tempMoves = [];
            [{fixed : "row", moving: "col"},
             {fixed : "col", moving: "row"}].forEach( axis => {
                
                for ( let i = position[axis.moving] + direction; i>=0 && i<=7; i+=direction ){

                    let [x, y] = axis.moving==="row" ? [i, position[axis.fixed]] : [position[axis.fixed], i];

                    squareToCheck = Square.at(x, y);
                    pieceToCheck = board.getPiece(squareToCheck);

                    if (!pieceToCheck){
                        tempMoves.push(squareToCheck);

                    }
                    else if (pieceToCheck && pieceToCheck.player !== this.player){

                        tempMoves.push(squareToCheck);

                        break;
                    }
                    else {
                        break;
                    }
                }
            });
            moves = moves.concat(tempMoves);
        });


        return moves;
    }
}
