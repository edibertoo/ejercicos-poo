function num(){
    let t = document.getElementById("cuantos").value

    let lista = " ";
    let resultado = null;
    let mininimo = 0;
    let maximo =0;
    let total = null;

    for(let x = 0; x<t;x++){
    resultado = resultado + Math.round(Math.random()*10);
    lista = lista + resultado + "\n";
    document.getElementById("random").innerHTML = lis;
    total = total + resultado;
    if(minimo!=0 & maximo!=0){
        if(resultado <minimo){mininimo = resultado;}
    if(resultado > maximo){maximo = resultado;}
    }else{minimo = resultado; maximo = resultado;}
    }
    document.getElementById("R1").innerHTML = minimo;
    document.getElementById("R2").innerHTML = maximo;
    document.getElementById("R3").innerHTML = total /t;
}