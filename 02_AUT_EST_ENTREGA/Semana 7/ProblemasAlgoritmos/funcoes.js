// EXERCICIO 1 TABUADA
function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var inicio = parseInt(document.getElementById("inicio").value);
    var fim = parseInt(document.getElementById("fim").value);
    var resposta1 = document.getElementById('resposta1');
    var tabuada='';

    for(var count = inicio ; count<= fim ; count++) 
        tabuada += num+" x "+count+" = "+
                    num*count+"<br />";
       
       resposta1.innerHTML = tabuada;
    
}

// EXERCICIO 2 PALINDROMO
function palindromo() {
    var numero = document.getElementById("numero").value;
    var resposta2 = document.getElementById('resposta2');
    var separa = numero.split("")
    var reverse = separa.reverse()
    var final = reverse.join("")

    if(numero == final) {
        var resp = "é um palíndromo"
        resposta2.innerHTML = resp
        return resp
        
    }
    else{
        var resp = "não é um palíndromo"
        resposta2.innerHTML = resp
        return resp
    }

}


// EXERCICIO 3 PI
function pi() {
    var lim = parseInt(document.getElementById("lim").value); // para sabermos o limite da sequencia
    var resposta3 = document.getElementById('resposta3');
    var sequencia='';

    for (var i=1 ; i<lim; i++)
        if(i%3==0){
            sequencia += i+" PI ";

        }
        
        else{
            sequencia += i + " - ";

        }
        
        resposta3.innerHTML = sequencia;
}

// EXERCICIO 4 REFORMA

function reforma(){
    var AA = parseFloat(document.getElementById("AA").value);
    var LA = parseFloat(document.getElementById("LA").value);
    var AP = parseFloat(document.getElementById("AP").value);
    var LP = parseFloat(document.getElementById("LP").value);
    const QA = (AP*100)/AA;
    const QL = (LP*100)/LA;
    var resposta4 = document.getElementById('resposta4');
    var Quantidade='';

    Quantidade = QA*QL;
    Quantidade += Quantidade*0.05
    Math.ceil(Quantidade)

    resposta4.innerHTML = Quantidade;




}

