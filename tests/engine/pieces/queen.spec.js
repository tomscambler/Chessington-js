import Queen from '../../../src/engine/pieces/queen';
import 'chai/register-should';
import Pawn from '../../../src/engine/pieces/pawn';
import Rook from '../../../src/engine/pieces/rook';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Queen', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can make queens moves', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(4, 4), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [

            //up and down
            Square.at(7, 4),
            Square.at(6, 4),
            Square.at(5, 4),
          //Square.at(4, 4),
            Square.at(3, 4),
            Square.at(2, 4),
            Square.at(1, 4),
            Square.at(0, 4),

            //left and right
            Square.at(4, 7),
            Square.at(4, 6),
            Square.at(4, 5),
          //Square.at(4, 4),
            Square.at(4, 3),
            Square.at(4, 2),
            Square.at(4, 1),
            Square.at(4, 0),

            //along y=x
            Square.at(0, 0),
            Square.at(1, 1),
            Square.at(2, 2),
            Square.at(3, 3),
          //Square.at(4, 4),
            Square.at(5, 5),
            Square.at(6, 6),
            Square.at(7, 7),

            //along y=-x
            Square.at(7, 1),
            Square.at(6, 2),
            Square.at(5, 3),
          //Square.at(4, 4),
            Square.at(3, 5),
            Square.at(2, 6),
            Square.at(1, 7)

        ];

        moves.should.have.length(27);
        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot move through friendly pieces', () => {
        const queen = new Queen(Player.WHITE);
        const pawn = new Pawn(Player.WHITE);

        board.setPiece(Square.at(4, 4), queen);
        board.setPiece(Square.at(5, 4), pawn);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [

            //up and down
          //Square.at(7, 4),
          //Square.at(6, 4),
          //Square.at(5, 4),
          //Square.at(4, 4),
            Square.at(3, 4),
            Square.at(2, 4),
            Square.at(1, 4),
            Square.at(0, 4),

            //left and right
            Square.at(4, 7),
            Square.at(4, 6),
            Square.at(4, 5),
          //Square.at(4, 4),
            Square.at(4, 3),
            Square.at(4, 2),
            Square.at(4, 1),
            Square.at(4, 0),

            //along y=x
            Square.at(0, 0),
            Square.at(1, 1),
            Square.at(2, 2),
            Square.at(3, 3),
          //Square.at(4, 4),
            Square.at(5, 5),
            Square.at(6, 6),
            Square.at(7, 7),

            //along y=-x
            Square.at(7, 1),
            Square.at(6, 2),
            Square.at(5, 3),
          //Square.at(4, 4),
            Square.at(3, 5),
            Square.at(2, 6),
            Square.at(1, 7)

        ];

        moves.should.deep.include.members(expectedMoves);
        moves.should.have.length(24);
    });


    it('can take opposing pieces', () => {
        const queen = new Queen(Player.WHITE);
        const pawn = new Pawn(Player.BLACK);

        board.setPiece(Square.at(4, 4), queen);
        board.setPiece(Square.at(5, 4), pawn);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [

            //up and down
          //Square.at(7, 4),
          //Square.at(6, 4),
            Square.at(5, 4),
          //Square.at(4, 4),
            Square.at(3, 4),
            Square.at(2, 4),
            Square.at(1, 4),
            Square.at(0, 4),

            //left and right
            Square.at(4, 7),
            Square.at(4, 6),
            Square.at(4, 5),
          //Square.at(4, 4),
            Square.at(4, 3),
            Square.at(4, 2),
            Square.at(4, 1),
            Square.at(4, 0),

            //along y=x
            Square.at(0, 0),
            Square.at(1, 1),
            Square.at(2, 2),
            Square.at(3, 3),
          //Square.at(4, 4),
            Square.at(5, 5),
            Square.at(6, 6),
            Square.at(7, 7),

            //along y=-x
            Square.at(7, 1),
            Square.at(6, 2),
            Square.at(5, 3),
          //Square.at(4, 4),
            Square.at(3, 5),
            Square.at(2, 6),
            Square.at(1, 7)

        ];

        moves.should.have.length(25);
        moves.should.deep.include.members(expectedMoves);
    });
});
