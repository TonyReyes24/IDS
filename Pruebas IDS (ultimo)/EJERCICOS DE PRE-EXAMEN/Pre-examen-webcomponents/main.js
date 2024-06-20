// Función para consultar datos de una API (simulación)
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
}
  
  // Llamamos a la función para obtener los datos
  fetchData().then(users => {
    console.log('Usuarios obtenidos:', users);
    // Aquí puedes procesar los datos como lo necesites
});


function datos() {
    // Creamos un div donde se mostrarán los chistes
    const jokesDiv = document.getElementById('dato');

    // Hacemos un bucle para realizar 1 peticion
    for (let i = 0; i < 17; i++) {
        // Hacemos una petición a la API de Chuck Norris para obtener un chiste
        fetch('https://api.datos.gob.mx/v1/calidadAire')
            .then(response => response.json())
            .then(data => {
                // Una vez que recibimos la respuesta, creamos un elemento de párrafo en el html
                const jokeParagraph = document.createElement('p');
                // Asignamos el chiste al contenido del párrafo
                jokeParagraph.textContent = data.value;
                /*Agregamos el párrafo al div donde se mostrarán los chistes
                Appenchild es para mover un archivo de la pagina
                es decir el jokesDiv es el nombre del id en el que se imprimiran los chistes en 
                el HTML y appenchild lo que hara es llelet el valor almacenado del chiste como un elemento
                parrafo al html para poder imprimirlo
                */
                jokesDiv.appendChild(jokeParagraph);
            })
            //este catch servira para mostrar un error en caso de ue el codigo de arriba no pueda hacer
            //el consumo de la API 
            .catch(error => {
                // Si hay un error, lo mostramos en la consola
                console.error('Error al consultar chistes:', error);
            });
    }
}
  