
function CadastroUsuario() {

    var TagEmail = document.getElementById("email")
    var EmailCadastrado = String(TagEmail.value)
    var TagSenha = document.getElementById("senha")
    var SenhaCadastrada = String(TagSenha.value)

    if (EmailCadastrado.length == 0 || SenhaCadastrada.length == 0) {
        alert(`[ERRO] Confira se Informou os Campos`)
    }
    console.log(EmailCadastrado)
    console.log(SenhaCadastrada)

    if (EmailCadastrado.length != 0 && SenhaCadastrada.length != 0) {
        window.location.href = "Login.html";   
    }
    
}
// Caso o usúario já tenha conta
function PáginaDeLogin() {
window.location.href = "Login.html"
}

// Verificação de usúario
function LoginUsuario() {
    console.log("TUDO CERTO CAMPEÂO")
}