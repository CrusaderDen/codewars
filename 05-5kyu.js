// https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

function isSolved(board) {
   // проверка по горизонтали
   const gTerm1for1 = board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] == 1
   const gTerm2for1 = board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] == 1
   const gTerm3for1 = board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] == 1
   const gTerm1for2 = board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] == 2
   const gTerm2for2 = board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] == 2
   const gTerm3for2 = board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] == 2
   //проверка по вертикали
   const vTerm1for1 = board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] == 1
   const vTerm2for1 = board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] == 1
   const vTerm3for1 = board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] == 1
   const vTerm1for2 = board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] == 2
   const vTerm2for2 = board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] == 2
   const vTerm3for2 = board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] == 2
   //проверка по диагоналям
   const dTerm1for1 = board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] == 1
   const dTerm2for1 = board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] == 1
   const dTerm1for2 = board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] == 2
   const dTerm2for2 = board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] == 2
   //проверка выигрыша общая

   const winTermsfor1 =
      gTerm1for1 ||
      gTerm2for1 ||
      gTerm3for1 ||
      vTerm1for1 ||
      vTerm2for1 ||
      vTerm3for1 ||
      dTerm1for1 ||
      dTerm2for1

   const winTermsfor2 =
      gTerm1for2 ||
      gTerm2for2 ||
      gTerm3for2 ||
      vTerm1for2 ||
      vTerm2for2 ||
      vTerm3for2 ||
      dTerm1for2 ||
      dTerm2for2

   //проверка на пустые слоты
   const emptyTest = board[0].includes(0)||board[1].includes(0)||board[2].includes(0)



   if (winTermsfor1) return 1
   else if (winTermsfor2) return 2
   else if (emptyTest) return -1
   else return 0
}

console.log(
   isSolved([
      [2, 0, 1],
      [0, 2, 2],
      [1, 0, 0],
   ])
)

// решение сына маминой подруги
function isSolvedBest(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}

// другие варианты

function isSolved(board) {
  
   function checkHor() {
   var res;
     board.forEach(function(item){
       if (item[0] == item[1] &&
           item[0] == item[2] &&
           item[1] == item[2] &&
           item[0] != 0)
       res = item[0];
     });
     return res;
   }
   
   function checkVer() {
     for (var a = 0; a< 3; a++)
     {
     if (board[0][a]==board[1][a]&&
         board[1][a]==board[2][a]&&
         board[2][a]==board[0][a]&&
         board[0][a]!=0)
         return board[0][a];
     }
   }
   
   function checkA1(){
   if ((board[0][0]==board[1][1]&&
        board[1][1]==board[2][2]&&
        board[2][2]==board[0][0])||
      ( board[0][2]==board[1][1]&&
        board[1][1]==board[2][0]&&
        board[2][0]==board[0][2]))
       return board[1][1];
   }
   
  
   function gameOver() {
   for (var x = 0; x < 3; x++)
   for (var y = 0; y < 3; y++)
     if  (board[x][y] == 0)
       return -1;
   return 0;
   }
   
   return checkHor() || checkVer() || checkA1() || gameOver();
 }

 //

 const horizontal = (player) => (board) => 
  board.some(row => row.every(spot => spot == player))
  
const vertical = (player) => (board) => 
  board.some((row, i) => board.every(row => row[i] == player))
  
const diagonals = (player) => (board) => 
  board.every((row, i) => row[i] == player) || board.every((row, i) => row[3-1-i] == player)
  
const player = (number) => ({
  wins: (board) => [horizontal, vertical, diagonals].some(full => full(number)(board))
})

const unfinished = (board) =>
  board.some(row => row.some(spot => !spot))

const DRAW = 0


const isSolved = (board) => {switch (true) {
  case player(1).wins (board):
    return 1
    
  case player(2).wins (board):
    return 2
  
  case unfinished (board):
    return -1

  default:
    return DRAW
}}
  