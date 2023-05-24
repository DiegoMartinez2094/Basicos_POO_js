
 function saludar() {
     let nombre1 = document.getElementById("nombre").value;
     let edad1 = document.getElementById("edad").value;
     let sexo1 = document.getElementById("sexo").value;
     console.log(nombre1,edad1,sexo1)

  class persona {
   
    constructor({nombre1, edad1, sexo1}) {
      this.nombre = nombre1;
      this.edad = edad1;
      this.sexo = sexo1;
    }
  }

  let persona1= new persona({nombre:"carlos"});
  console.log(persona1);
  document.getElementById("textarea").innerHTML = `Hola ${persona1}`;
}


