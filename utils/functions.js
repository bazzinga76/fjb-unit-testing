export const name = 'functions';


// * crear una funcion para verificar numeros pares (verificar con SI/NO) y escribir su test
function esPar(numero){
    let resp = (numero%2==0) ?  "SI" : "NO";
    return resp;
}

// * crear una funcion que me diga si todos los numeros son pares en un array con SI/NO
function arrayEsPar(numeros){
    // let resp = numeros.some(impar => (numeros%2!==0)) ? "NO" : "SI"; 
    let resp = "SI";
    for(let i = 0; i< numeros.length; i++) {
        if (numeros[i]%2!==0) {
          resp = "NO";
          break;
        }
      }    
    return resp;
}

// * escribir una funcion que me diga la longitud de un string
function calculateLength(cadena){
    return cadena.length;
}

// * escribir una funcion que dado un numero me retorne el dìa de la semana, comenzando con domingo
function diaSemana(numero){
    let diasSemana = [
        { dia: "Domingo", num: 1 }, 
        { dia: "Lunes", num: 2}, 
        { dia: "Martes", num: 3}, 
        { dia: "Miercoles", num: 4}, 
        { dia: "Jueves", num: 5},
        { dia: "Viernes", num: 6},
        { dia: "Sabado", num: 7},
      ];
      const diaSem = diasSemana.filter(diaSem => diaSem.num === numero);
      return diaSem[0].dia;
}

// * escribir una funcion que me retorne la hr actual
function horaActual(){
    let hoy = new Date();
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    return hora;
}

// * crear una funcion que me ordene numeros dado un array
function ordenaArray(array){
    return array.sort((a, b) => a - b);
}

// * escribir una funcion que retorne una palabra en mayusculas dada una palabra en minusculas
function mayusculas(palabra){
    return palabra.toUpperCase();
}

export { esPar, arrayEsPar, calculateLength, diaSemana, horaActual,  ordenaArray, mayusculas};