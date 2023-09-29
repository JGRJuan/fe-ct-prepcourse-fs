/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
      return nombre.charAt(0). toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   cb(num1, num2)
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   //primero hay que definir la variable suma
   let suma = 0;
   //Luego acumular la suma de todos los elementos del array
   for(var i = 0; i < arrayOfNumbers.length; i++) {
   //realizar la suma
   suma = suma + arrayOfNumbers[i]; 
   }
   //llamado al cb
   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   //1era forma usando el for
   for(var i = 0; i < array.length; i++)  {
      cb(array[i])
   }
}
   //2da forma 
   //array.forEach((elemento) => cb(elemento))
   //}
   //OJO el let y var cumplen la misma funcion. El let tiene alcance solo dentro de la funcion, 
   //por ejemplo en el ejercicio anterior, esta variable 'suma' solo va a existir dentro de mi funcion,
   //cuando yo ejecute mi funcion, nace, le asigno un valor,la uso, y una vez que termino de ejecutarlo
   //se pierde. No es que yo lo puedo recuperar por ejemplo en otra funcion usar la variable 'suma', 
   //eso es lo que nos dice el let.
   //Mientras que el 'var', nos dice que las variables son dealcance global y cuando nsotros la definimos
   //tenemos la posibilidad de utilizarla fuera del lugar del ambito donde nosotros la definimos. Nos da
   //un alcance global.

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var newArray = []
   for(var i = 0; i < array.length; i++)  {
      newArray.push(cb(array[i]))
   }
   return newArray
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var newArray = []
   for(var i = 0; i < arrayOfStrings.length; i++)  {
      if (arrayOfStrings[i][0] === 'a' ) {
         newArray.push(arrayOfStrings[i])
         }
      }
   return newArray
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
