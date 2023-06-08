// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  const gato = { //const o var hubiera sido lo mismo
    nombre: nombre,
    edad: edad,
    meow: function() { //pedia que la funcion este dentro del metodo
      return "Meow!"
    } 
  } 
  return gato
  //errores
  //function meow() {
  //return "Meow!"
  }



function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
objeto[property] = null //no se por que 
return objeto
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  var result = objetoMisterioso.numeroMisterioso * 5 //argumento.propiedad  
  return result

  //errores
//objetoMisterioso[numeroMisterioso]
//var producto = resultado;
//resultado = numeroMisterioso * 5;
//return producto
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad]; //se elimina la propiedad de la que no se sabe el nombre.
  return objeto
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
const user = {
  nombre: nombre,
  email: email,
  password: password,
}
return user
//a la primera
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email != null) {
    return true
  } else {
    return false
  }
  //a la primera (wow)
}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]) { //si el objeto tiene una propiedad llamada propiedad. Los corchetes sirven para saber si existe
    return true
  } else {
    return false
  }
  //if (objeto.[key] = "propiedad") {
  //  return true
  //} else {
  //  return false
  //}
  // EN MI DEFENSA en las soluciones te lo pedia asi: "Devuelve "true" si el objeto tiene el valor del 
  //argumento "propiedad"
  //no es mas clean?
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if (usuario["password"] === password) { //bueno NO DECIA QUE LA PROPIEDAD PASSWORD ERA UNA STRING
    return true 
  } else {
    return false
  }

}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword //declaras que ahora esa propiedad es igual a nuevaPassword
  return usuario
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
usuario.amigos.push(nuevoAmigo) //argumento.array.push(nuevocoso) --> genial
return usuario
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium" //usuario.esPremium
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for(var i = 0; i < usuarios.length; i++) { //va auentando y eso
    usuarios[i].esPremium = true; // cada usuario premium va a devolver true
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array //usuario.posts
  // "posts" es un array de objetos "post" // usuario.posts.post
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer) //usuario.posts.post.likes
  // Suma todos los likes de todos los objetos "post" 
  // Devuelve la suma
  // Tu código:
  var suma = 0
  for(var i = 0; i < usuario.posts.length; i++) { //va auentando y eso
    suma = suma + usuario.posts[i].likes
  }
  return suma;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") 
  // y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() { //llamas la propiedad aca y le das la funcion
return this.precio - ( this.precio * this.porcentajeDeDescuento ); //usas el metodo this para invocar los objetos
  }
return producto
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
