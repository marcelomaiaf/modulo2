//exercicio 1 VP e VF
function valor(){
    var select = document.getElementById("1")
    var resultados = document.getElementById("100")
    var resultado

    if(select.value == "VP"){
        resultado = valorPresente()
    }

    if(select.value == "VF"){
        resultado = valorFuturo()
    }

    resultados.innerHTML += "<p>" + resultado + "</p>"
    return resultado
}

function valorPresente(){
    let i = document.getElementById("i")
    let n = document.getElementById("n")
    let v = document.getElementById("V")
    let resultado = v.value/(1+i.value/100)**n.value

    return resultado
}

function valorFuturo(){
    let i = document.getElementById("i")
    let n = document.getElementById("n")
    let v = document.getElementById("V")
    let resultado = (v.value*((1+(i.value/100))**n.value))


    return resultado
}

//exercicio 2 juros simples
function juros(){
    let i = document.getElementById("i1")
    let p = document.getElementById("p")
    let n = document.getElementById("n1")
    let m 
    let juros
    let resultados = document.getElementById("101")
    
    m = p.value*(1+((i.value/100)*(n.value/360)))
    juros = (m - p.value)

    resultados.innerHTML += "<p>"+ `juros é: ` + juros + "<br>" + `o montante é: ` + m + "</p>"
    return resultados
}
//exercicio 3 impressao maluca
function maluca(){
    let palavra =  document.getElementById("pal").value;
    let monkey  = document.getElementById("103");
    let resultados = "";

    for(i=0; i < palavra.length; i++){
        resultados +=  "<div style='margin-left: " + 10*i + "px'>" + palavra[i] + "<br>" + "</div>";
    }
    
    monkey.innerHTML += resultados;
    return monkey;
}

//exercicio 4 conversão decimal binário

function binário(){
    let num = Number(document.getElementById("num").value)
    let bin = []
    let resultados =  document.getElementById("104")

    for(i = 0; i<8 ; i++){
        if((num / (128/(Math.pow(2,i)))) >= 1){
            bin[i] = 1
            num -= (128/(Math.pow(2,i)))
        }
        else{
            bin[i] = 0
        }
    }


    resultados.innerHTML += "<p>" + bin.join("") + "<p>"
    return resultados
    
}