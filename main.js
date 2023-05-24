
class persona {
  nombre
  edad
  sexo
constructor({nombre1, edad1, sexo1}) {
  this.nombre = nombre1;
  this.edad = edad1;
  this.sexo = sexo1;
}
saludar1(nom){
  document.getElementById("textarea").innerHTML = `Hola ${nom}`;
}
 }

 function saludar() {
     let nombre1 = document.getElementById("nombre").value;
     let edad1 = document.getElementById("edad").value;
     let sexo1 = document.getElementById("sexo").value;
     console.log(nombre1,edad1,sexo1)


     let persona1= new persona({nombre1,edad1,sexo1});
     persona1.saludar1(nombre1)
     
 }


