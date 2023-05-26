class figura{
    constructor(color,area){
        this.colorFigura=color
        this.areaFigura=area
    }
    calcularArea(){
        return this.areaFigura
    }
}
// let figura1 = new figura('red',10)
// figura1.calcularArea

class circulo extends figura{
    constructor(color, radio){
        super(color)
        this.radioFigura=radio;
        
    }
    calcularArea1(){
            return "el area del circulo es: "+ Math.PI*this.radioFigura*this.radioFigura
        }
}
// let circulo1 = new circulo("red",5)
// circulo1.calcularArea();

class rectangulo extends figura{
    constructor(color, ancho,largo){
      super(color);
        this.anchoFigura=ancho;
        this.largoFigura=largo;
        
    }
    calcularArea2(){
            return "el area del rectangulo es: "+ this.anchoFigura*this.largoFigura;
        }
}
// rectangulo1=new rectangulo("blue",10,5);
// rectangulo1.calcularArea();


let btn1= document.querySelector("#btnAreaCir")
btn1.addEventListener("click",areaCirculo);

function areaCirculo(){
let radio=document.getElementById("radio").value;
let color=document.getElementById("colorCirculo").value;
let circulo1=new circulo(color, radio);
document.getElementById("textarea1").innerHTML= circulo1.calcularArea1()
}


let btn2= document.querySelector("#btnAreaRec")
btn2.addEventListener("click",areaRectangulo);

function areaRectangulo(){
let ancho=document.getElementById("ancho").value;
let largo=document.getElementById("largo").value;
let color=document.getElementById("colorRectangulo").value;
let rectangulo1=new rectangulo(color, ancho, largo);
document.getElementById("textarea2").innerHTML=rectangulo1.calcularArea2();
}