const SENHA_CORRETA = ['1','0','D'];
const inputs = [
    document.getElementById('digito1'),
    document.getElementById('digito2'),
    document.getElementById('digito3')
];
function validarDigito(e, index){ 
    let input = inputs[index];
    if (!input) {
        return;
    }
     if (e.code === 'Backspace'){
    if (index > 0 && input.value.length === 0){
        inputs[index - 1].focus();
        inputs[index - 1].classList.remove('correto', 'incorreto');
        } 
    return;
    }
    let valor = input.value;
    const esperado = SENHA_CORRETA[index];
    if (index === inputs.length - 1){
        valor = valor.toUpperCase();
        input.value = valor;
    }
    if (valor.length === 0){
        input.classList.remove('correto', 'incorreto');
    } else if (valor === esperado){
        input.classList.remove('incorreto');
        input.classList.add('correto');
        } else {
            input.classList.remove('correto');
            input.classList.add('incorreto');
        }
    if (valor.length === 1 && index < inputs.length -1){
        inputs[index + 1].focus();
    } 
    if (valor.length === 1 && index === inputs.length - 1){
        input.blur();
    }
}

function confirmarSenha(){
    let senhaDigitada = '';
    inputs.forEach((input, index) => {
        let valor = input.value;
        if (index === inputs.length - 1){
            valor = valor.toUpperCase();
        }
        senhaDigitada += valor;
    });

    const senhaEsperada = SENHA_CORRETA.join('');
    if (senhaDigitada === senhaEsperada){
        window.location.href = "https://juliasantossilva.github.io/confirmacao-senha/";
    } else {
        alert('Sua senha está incorreta! Por favor, verifique os dígitos.');
    }
}