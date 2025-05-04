// Funções auxiliares
function salvarUsuario(usuario) {
  localStorage.setItem("usuario", JSON.stringify(usuario));
}

function obterUsuario() {
  return JSON.parse(localStorage.getItem("usuario"));
}

function deslogar() {
  localStorage.removeItem("usuario");
  window.location.href = "login.html";
}

function atualizarSaldo(novoSaldo) {
  const usuario = obterUsuario();
  if (usuario) {
    usuario.saldo = novoSaldo;
    salvarUsuario(usuario);
    mostrarSaldo();
  }
}

function mostrarSaldo() {
  const usuario = obterUsuario();
  if (usuario && document.getElementById("user-saldo")) {
    document.getElementById("user-saldo").innerText = `R$ ${usuario.saldo.toFixed(2)}`;
  }
}

function verificarLogin() {
  const usuario = obterUsuario();
  if (!usuario && !window.location.href.includes("login.html") && !window.location.href.includes("cadastro.html")) {
    window.location.href = "login.html";
  }
}

function login(email, senha) {
  const usuarioSalvo = obterUsuario();
  if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
    alert("Login bem-sucedido!");
    window.location.href = "perfil.html";
  } else {
    alert("Credenciais inválidas.");
  }
}

function cadastrar(nome, email, senha) {
  const novoUsuario = {
    nome,
    email,
    senha,
    saldo: 0,
    depositoTotal: 0,
    apostado: 0
  };
  salvarUsuario(novoUsuario);
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}
