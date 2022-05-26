


function esPar(numero){
    if(numero%2==0){
        return("SI");
    }else{
        return("NO");
    }
}

function calculateLength(cadena){
    return cadena.length;
}


console.log(esPar(3));
console.log(calculateLength("Hola"));




// const express = require('express');
// const app = express();

// const port = 3000;

// app.get('/', (req, res) => {
//     console.log("solicitaron una respuesta")
//     res.send("hola desde express")
// });

// app.listen(port, () => console.log(`running en el puerto ${port}`));