

class persona {//clase padre persona
constructor(nombre, edad, sexo) {
  this.nombrePersona = nombre; //se reciben los 3 parametros(nombre, edad, sexo) y los agg a las porpiedades de la clase con this. 
  this.edadPersona = edad;
  this.sexoPersona = sexo;
}
saludar(){ //metodo
 return "Hola " + this.nombrePersona;
}
 }



 class estudiante extends persona{ //clase hijo estudiante

  constructor(nombre,edad,sexo,materia){
    super(nombre,edad,sexo); //no es nesesario hacer el this.nombre por que esos ya están en la clase padre, solo de las nuevas del hijo
    //en el super debo poner todos los parametros que traigo de la clase padre
    this.materia=materia
  }

    saludarEstudiante(){
    return super.saludar() + " Tú materia es: " + this.materia//llamo al metodo de la super clase
    }
 }





 function saludar() {
     let nombre = document.getElementById("nombre").value;
     let edad = document.getElementById("edad").value;
     let sexo = document.getElementById("sexo").value;
     let materia = document.getElementById("materia").value;
     
     //creamos la persona:
    //  let objPersona= new persona(nombre,edad,sexo,materia);
      // console.log(objPersona.saludar())

    //  document.getElementById("textarea").innerHTML =objPersona.saludar() ;

       let objestudiante =new estudiante(nombre, edad, sexo, materia);

       document.getElementById("textarea").innerHTML =objestudiante.saludarEstudiante() ;
 }


