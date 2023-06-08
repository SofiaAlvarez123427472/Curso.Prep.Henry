// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1)
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb() //:D
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var valor = 0
  const suma = numeros.reduce((numeroActual, acumulador) => numeroActual + acumulador, valor)
  return cb(suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach((elemento) => { //llamas al elemento
    return cb(elemento) //haces que el elemento sea callback
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo 
  // array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código: 
  var nuevoArray = array.map(function(el) { //declarar nuevo array y decirle que haga lo del map, el function
                                            //element es el numero en el que esta.
    return cb(el);  // lo retornas como cb
  });
  return nuevoArray;
}
  //errores (dios esto me cuesta help)
  //array.map((elemento) => {
  // cb(elemento) 
  // const array2 = newArray[cb(elemento)]
  //  return array2
  //})


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = []; //declara un nuevo array
  for (i=0; i<array.length; i++) { //i es 0, y mientras i sea menor que el largo del array, se suma a 1.
    if (array[i].charAt(0) === "a") { //si cualquiera de estos elementos empieza con "a"
      nuevoArray.push(array[i]) //se suben al nuevo array
    }
  }
return nuevoArray
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
