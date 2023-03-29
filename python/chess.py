class Chess:
    def __init__(self):
        self.board = [['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
                      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
                      [' ', '.', ' ', '.', ' ', '.', ' ', '.'],
                      ['.', ' ', '.', ' ', '.', ' ', '.', ' '],
                      [' ', '.', ' ', '.', ' ', '.', ' ', '.'],
                      ['.', ' ', '.', ' ', '.', ' ', '.', ' '],
                      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
                      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']]

    def start_game(self):
         print("Game is starting")                  

    def move_piece(self):
        print("Piece is moved")                

class Piece(Chess):
    def create_piece(self):
        print("Piece is created")
   
king = Piece()
king.create_piece()
king.move_piece()
