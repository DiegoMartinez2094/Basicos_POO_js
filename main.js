
selec=document.querySelector("#tipoFigura");
selec.addEventListener("change", seleccionar);

function seleccionar() {
    fig = document.getElementById("tipoFigura").value;
    if (fig == "circulo") {
        document.getElementById(
            "contenido"
        ).innerHTML = `
        <div class="row g-3 align-items-center">
      <div class="col-auto">
        <input type="text" id="color" class="form-control" placeholder="ingrese el color" />
      </div>
    </div>
       <br/>
        <div class="row g-3 align-items-center">
    <div class="col-auto">
      <input type="text" id="radio" class="form-control" placeholder="ingrese el radio" />
    </div>
  </div>
  <br/>
 
  <div class="row g-3 align-items-center">
    <button type="button" class="btn btn-outline-dark" id="btn-caldularArea1">Calcular area</button>
  </div>
  
  <div class="row g-3 align-items-center">
  <textarea class="form-control" id="textarea" rows="3"></textarea>
</div>`;
    } else {
        document.getElementById("contenido").innerHTML = `  
        <div class="row g-3 align-items-center">
      <div class="col-auto">
        <input type="text" id="color" class="form-control" placeholder="ingrese el color" />
      </div>
    </div>
    <br/>
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <input type="text" id="ancho" class="form-control" placeholder="ingrese el ancho" />
      </div>
    </div>
  <br/>
  <div class="row g-3 align-items-center">
  <div class="col-auto">
    <input type="text" id="largo" class="form-control" placeholder="ingrese la largo" />
  </div>
  </div>
   <br/>
  <div class="row g-3 align-items-center">
    <button type="button" class="btn btn-outline-dark" id="btn-caldularArea">Calcular area</button>
  </div>
  
  <div class="row g-3 align-items-center">
  <textarea class="form-control" id="textarea" rows="3"></textarea>
</div>`;
    }
}

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
    constructor(radio){
        this.radioFigura=radio;
        super(color)
    }
    calcularArea(){
            return Math.PI*this.radioFigura*this.radioFigura
        }
}
// let circulo1 = new circulo("red",5)
// circulo1.calcularArea();

class rectangulo extends figura{
    constructor(ancho,largo){
        this.anchoFigura=ancho
        this.largoFigura=largo
        super(color)
    }
    calcularArea(){
            return this.anchoFigura*this.largoFigura
        }
}
// rectangulo1=new rectangulo("blue",10,5);
// rectangulo1.calcularArea();


let btn1= document.querySelector("#btn-caldularArea1")
btn1.addEventListener("click",areaCirculo);

function areaCirculo(){
let radio=document.getElementById("radio").value;
let color=document.getElementById("color").value;
circulo1=new circulo(color, radio);
let area=circulo1.calcularArea;
document.getElementById("textarea").value=area;
}



let btn2= document.querySelector("#btn-caldularArea")
btn2.addEventListener("click",areaRectangulo);

function areaCirculo(){
let ancho=document.getElementById("ancho").value;
let largo=document.getElementById("largo").value;
let color=document.getElementById("color").value;
rectangulo2=new rectangulo(color, ancho, largo);
let area=rectangulo2.calcularArea();
document.getElementById("textarea").value=area;
}