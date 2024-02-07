function togglePasswordVisibility(passwordId,iconId) {
    var passwordInput = document.getElementById(passwordId);

    var icon = document.getElementById(iconId);
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
    icon.src = (passwordInput.type === "password") ? 'assets/img/eye.svg' : 'assets/img/eye-off.svg';
  }
function cadastro(){
  alert('Cadastro efetuado com sucesso!')
  window.location.href = "entrar.html";  
}
