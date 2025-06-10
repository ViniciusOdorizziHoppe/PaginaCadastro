
function CadastroUsuario() {

    var TagEmail = document.getElementById("email")
    var EmailCadastrado = String(TagEmail.value)
    var TagSenha = document.getElementById("senha")
    var SenhaCadastrada = String(TagSenha.value)

    if (EmailCadastrado.length == 0 || SenhaCadastrada.length == 0) {
        alert(`[ERRO] Confira se Informou os Campos`)
    }

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
    window.location.href = "Home.html"
    console.log("TUDO CERTO CAMPEÂO")
    
}
var FaturamentoTotal = 0
var LucroTotal = 0

function LucroUsuario() {
    var QTV = document.getElementById("QuantidadeVendas")
    var QuantidadeVenda = Number(QTV.value)
    var VLV = document.getElementById("ValorVendas")
    var ValorVenda = Number(VLV.value)  
    var PTV = document.getElementById("PercentualVendas")
    var PercentualVenda = Number(PTV.value)  
    

    var CalcFaturado = QuantidadeVenda * ValorVenda
    var CalcPercent = PercentualVenda/100
    var CalcLucrado = CalcFaturado * CalcPercent

    var Lucro = document.getElementById("lucro")
    Lucro.innerHTML = `${CalcLucrado.toFixed(2)}`
    var Faturamento = document.getElementById("faturamento")
    Faturamento.innerHTML = `${CalcFaturado.toFixed(2)}`

    FaturamentoTotal +=  CalcFaturado
    LucroTotal +=  CalcLucrado

    var MostrarLucro = document.getElementById("MostrarLucro")
    var MostrarFaturamento = document.getElementById("MostrarFaturamento")
    MostrarLucro.innerHTML = `${LucroTotal.toFixed(2)}`
    MostrarFaturamento.innerHTML = `${FaturamentoTotal.toFixed(2)}`

    console.log(FaturamentoTotal)
    console.log(CalcLucrado)


    QTV.value = "";
    VLV.value = "";
    PTV.value = "";

}