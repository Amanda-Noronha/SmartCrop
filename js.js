document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.ajuste');
    let input = document.querySelector('input[type="password"]');
    let icon = document.querySelector('.input img');

    icon.addEventListener('click', function() {
        container.classList.toggle('visible');
        if(container.classList.contains('visible')) {
            icon.src = 'assets/img/eye-off.svg';
            input.type = 'text';
        } else {
            icon.src = 'assets/img/eye.svg';
            input.type = 'password';
        }
    });
});

function volta(){
    window.location.href = "/inicial.html"
}
function entra(){
    window.location.href = "/platacao.html"
}