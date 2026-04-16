let user = JSON.parse(localStorage.getItem("users"));

function login_user() {
    let username = document.getElementById("username")
    let password = document.getElementById("password")

    if (username === ""|| password === ""){
        alert("No deje campos vacios")
        return;
    }

      let user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem('userSession', JSON.stringify({type: 'user', username}));
    alert('Login exitoso');
    window.location.href = 'Principal.html';
  } else {
    alert('Credenciales inválidas');
  }
}

