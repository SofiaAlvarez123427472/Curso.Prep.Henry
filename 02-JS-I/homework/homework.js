// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "AAA";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return str 
}

function suma(x = 6, y = 3) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var productodesuma = x + y;
  return productodesuma;
  
}

function resta(x = 6, y = 3) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var productoderesta = x - y;
  return productoderesta;
  
}

function multiplica(x = 6, y = 3) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var productodemultiplicacion = x * y;
  return productodemultiplicacion;
}

function divide(x = 6, y = 3) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var productodedivision = x / y;
  return productodedivision;
  
}

function sonIguales(x = 6, y = 3) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var iguales = x = y;
  return iguales;
}

function tienenMismaLongitud(str1 = "Si", str2 = "No") {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

function menosQueNoventa(num = 3) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true
  }
}

function mayorQueCincuenta(num = 51) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true
  }
}

function obtenerResto(x = 6, y = 3) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x % y;
  return resto;
}

function esPar(num = 5) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return false
}

function esImpar(num = 7) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return true
}

function elevarAlCuadrado(num = 4) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
 return Math.pow (num, 2);

}

function elevarAlCubo(num = 2) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow (num, 3);
}

function elevar(num = 4, exponent = 321) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow (num, exponent);
}

function redondearNumero(num = 7.6) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}

function redondearHaciaArriba(num = 7.6) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}

function esPositivo(numero = 71) {
  //La función va a recibir un entero. Devuelve como resultado una cadena 
  //de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return "Es positivo";
  } 
  if (numero < 0) {
    return "Es negativo";
  }
  if (numero = 0) {
    return false;
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
 return str + "!";
}

function combinarNombres(nombre = "Soy", apellido = "Henry") {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido;
}

function obtenerSaludo(nombre = "Martin") {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre + "!";
}

function obtenerAreaRectangulo(alto = 3, ancho = 5) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}


function retornarPerimetro(lado = 4){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4;
}


function areaDelTriangulo(base = 3, altura = 4){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
 return base * altura / 2;
}


function deEuroAdolar(euro = 1){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20
}


function esVocal(letra = "a"){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra = "a") {
    return "Es vocal";
  } else 
  if (letra = "e") {
    return "Es vocal"; } else
    if (letra = "i") {
      return "Es vocal"; } else 
      if (letra = "o") {
        return "Es vocal"; } else 
        if (letra = "u") {
          return "Es vocal";
  } else {
    "Dato incorrecto";
  }
  if (letra.length > 1) {
    "Dato incorrecto";
}
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
