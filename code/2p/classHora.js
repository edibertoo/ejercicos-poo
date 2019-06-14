class Hora {
    constructor(hora, minuto, segundo)
    {
        if(typeof hora === "number"){
            this.hora == hora
        }
        else{
            throw("Error");
        }

        if(typeof minuto === "number"){
            this.minuto == minuto
        }
        else{
            throw("Error");
        }

        if(typeof segundo === "number"){
            this.segundo == segundo
        }
        else{
            throw("Error");
        }
    }   

    toString(){
        Console.log("La hora es: " + this.hora + " con " + this.minuto + " minutos y" + this.segundo + " segundos. ")
    }

    tick(){


        if (this.hora === 23){
            this.hora = 0;
        }
        if (this.minuto === 59){
            this.minuto = 0;
        }
        if (this.segundo === 59){
            this.minuto = 0;
        }

    

        Console.log("La hora es: " + this.hora + " con " + this.minuto + " minutos y" + this.segundo + " segundos. ")
    }



}

module.exports = Hora


