const validUser = "admin";
const validPass = "12345";

function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  const msg = document.getElementById("msg");

  if (u === validUser && p === validPass) {
    msg.style.color = "#00ffaa";
    msg.textContent = "Berhasil masuk...";
    setTimeout(() => {
      window.location.href = "game.html";
    }, 700);
  } else {
    msg.style.color = "#ff6b6b";
    msg.textContent = "Username atau password salah!";
  }
}