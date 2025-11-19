const boardEl = document.getElementById("board");
let board = Array(9).fill(null);
let current = "X";
let mode = "2p"; // 1p = AI
let scores = { X: 0, O: 0, D: 0 };

function render() {
  boardEl.innerHTML = "";
  board.forEach((v, i) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = v || "";
    cell.onclick = () => play(i);
    boardEl.appendChild(cell);
  });
}

function play(i) {
  if (board[i]) return;
  board[i] = current;
  if (checkWin(current)) {
    scores[current]++;
    resetBoard();
    return;
  }
  if (board.every(v => v)) {
    scores.D++;
    resetBoard();
    return;
  }
  current = current === "X" ? "O" : "X";
}

function checkWin(p) {
  const w = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return w.some(a => a.every(i => board[i] === p));
}

function resetBoard() {
  board = Array(9).fill(null);
  current = "X";
  render();
}

render();