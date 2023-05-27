class empleado{
    constructor(nombre, edad, sueldo){
        this.nombreEmpleado=nombre;
        this.edadEmpleado=edad;
        this.sueldoEmpleado=sueldo;
    }
    calcularSalarioAnual(){
        return "el salario anual del empleado: "+this.nombreEmpleado+ " es: " + (this.sueldoEmpleado*12)
    }
    static generarIdEmpleado(){
        let id=0;
        id++;
        return "el ID del empleado es:"+id
    }
}


class gerente extends empleado{
    constructor(nombre, edad, sueldo, departamento){
        super(nombre,edad, sueldo)
        this.departamento=departamento;
    }
    calcularSalarioAnual(){
        return "el salario anual del empleado: "+ this.nombreEmpleado+ " es: "+ (this.sueldoEmpleado*12)+" más bono 10%= "+((this.sueldoEmpleado*0.1)*12) + " para un total de: "+((this.sueldoEmpleado*12)+((this.sueldoEmpleado*0.1)*12));
    }
}


let btnCrearEmpleado = document.querySelector("#btnCrearEmpleado");
btnCrearEmpleado.addEventListener("click",CREAREMPLEADO);

function CREAREMPLEADO(){
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector('#edad').value;
    let sueldo = Number(document.querySelector("#sueldo").value);
    let empleado1 = new empleado(nombre, edad, sueldo);
    document.querySelector("#textareaEmpleado").innerHTML= empleado1.calcularSalarioAnual();
}

let btnCrearGerente = document.querySelector("#btnCrearGerente");
btnCrearGerente.addEventListener("click",CREARGERENTE);

function CREARGERENTE(){
    let nombre =document.querySelector("#nombreGerente").value;
    let edad =document.querySelector('#edadGerente').value;
    let sueldo = Number(document.querySelector("#salarioGerente").value) ;
    let departamento = Number(document.querySelector("#departamentoGerente").value) ;
    let gerente1 = new gerente(nombre, edad, sueldo, departamento);
    document.querySelector("#textareaGerente").innerHTML= gerente1.calcularSalarioAnual();
}