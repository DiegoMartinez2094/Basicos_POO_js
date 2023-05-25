class animal{
  constructor(nombre, edad){
      this.nombreAnimal=nombre;
      this.edadAnimal=edad;
  }
hacersonido(){return  "el animal "+this.nombreAnimal + " está haciendo un sonido";}
}
class perro extends animal{
  constructor(nombre,edad,raza){
      super(nombre,edad);
      this.razaAnimal=raza;
  }
  moverCola(){return  "el perro "+this.nombreAnimal+" de raza: "+this.razaAnimal + " está moviendo la cola";}
}

const btnSonido = document.querySelector("#btn-hacerSonido")
btnSonido.addEventListener("click",hacerSonido)

function hacerSonido(){
 let  nombre=document.getElementById("nombre").value;
 let edad=document.getElementById("edad").value;
 let  animal1=new animal(nombre,edad,raza);
  document.getElementById("textarea").innerHTML =animal1.hacersonido() ; 
}
const btnCola = document.querySelector("#btn-moverCola");
btnCola.addEventListener("click",moverCola);
function moverCola(){
  let  nombre=document.getElementById("nombre").value;
  let edad=document.getElementById("edad").value;
  let raza=document.getElementById("raza").value;
  let  perro1=new perro(nombre,edad,raza);
   document.getElementById("textarea").innerHTML =perro1.moverCola(); 
}