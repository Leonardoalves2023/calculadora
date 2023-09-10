function inserir(num){
    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num
}

function calcular(){
    var resultado = document.getElementById('visor').innerHTML;
    if(resultado){
    document.getElementById('visor').innerHTML = eval(resultado)
    }else{
        document.getElementById('visor').innerHTML = 'nada digitado'
    }
}

function limpar()
{
    var t = document.getElementById('visor').innerHTML = ''
}