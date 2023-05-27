class vehiculo{
    constructor(marca, modelo, velocidad ){
        this.marcaVehiculo=marca;
        this.modeloVehiculo=modelo;
        this.velocidadVehiculo=velocidad;
    }
    acelerar(){
        return "el vehículo de marca: "+ this.marcaVehiculo + " aceleró a: "+ (this.velocidadVehiculo+10);
    }
    static convertirKmHEnMph() {
        return "la velocidad del vehiculo en MpH es: "+this.velocidadVehiculo/1.60934;
    }
}

// vehiculo.convertirKmHEnMph();

class coche extends vehiculo{
 constructor(marca, modelo, velocidad, combustible){
    super(marca, modelo, velocidad)
    this.combustible=combustible;
 }
 acelerar(){
    return "el coche de marca: "+ this.marcaVehiculo+" aceleró: " + (this.velocidadVehiculo+20);
 }
}
// let coche1=new coche(marca, modelo, velocidad, combustible);
// coche1.acelerar();

let btn1= document.querySelector("#btnAcelerar")
btn1.addEventListener("click",acelerar);

function acelerar(){
let marca =document.querySelector("#marca").value;
let modelo=document.querySelector("#modelo").value;
let velocidad=Number(document.querySelector("#velocidad").value) ;
let vehiculo1= new vehiculo(marca, modelo, velocidad);
document.querySelector("#textarea").innerHTML= vehiculo1.acelerar();
}


 let btn2= document.querySelector("#btnAcelerarCoche")
 btn2.addEventListener("click", acelerarCoche);

 function acelerarCoche(){
 let marca=document.getElementById("marcaCoche").value;
 let modelo=document.getElementById("modeloCoche").value;
 let velocidad= Number(document.getElementById("velocidadCoche").value) ;
 let combustible=document.getElementById("combustibleCoche").value;
 let coche1=new coche(marca, modelo, velocidad, combustible);
 document.getElementById("textareaCoche").innerHTML=coche1.acelerar();
 
 }