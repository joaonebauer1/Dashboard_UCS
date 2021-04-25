$(document).ready(function() {
    $('#trigger').click(function() {
        $('#overlay').fadeIn(300);
    });

    $('#close').click(function() {
        $('#overlay').fadeOut(300);
    });
});


function Enviar() {

    var nome = document.getElementById("nome-pessoal");
    var telefone = document.getElementById("telefone");
    var email_pessoal = document.getElementById("email-pessoal");
    var cnpj = document.getElementById("cnpj");
    var nome_empresa = document.getElementById("nome-empresa");
    var endereco = document.getElementById("endereco");
    var bairro = document.getElementById("bairro");
    var cep = document.getElementById("cep");
    var numero = document.getElementById("numero");
    var telefone_empresa = document.getElementById("telefone-empresa");
    var tipo_cadastro = document.getElementById("tipo");
    var horarios = document.getElementById("horarios");
    var imagem = document.getElementById("imagem");
    var termos = document.getElementById("check-termo");


    if (nome.value && telefone.value &&
        email_pessoal.value && cnpj.value &&
        nome_empresa.value && endereco.value && bairro.value && cep.value &&
        numero.value && telefone_empresa.value && tipo_cadastro.value && horarios.value && imagem.value && termos.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    } else {
        alert('Verifique se preencheu todos os campos obrigatórios')
    }

}