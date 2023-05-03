let ul = document.querySelector("ul")
let tareas =[]


const crearLista = (texto) => {
    // let contenedor = document.querySelector("#contenedor")
    let lista = tareas.map((texto) => 
        `<li class="list-group-item">${texto}</li><button onclick="eliminarProducto('${texto}')">Eliminar</button>`    
    );
    ul.innerHTML = lista.join().replaceAll(",","")
    document.querySelector("#texto-lista").value = "";
}

const agregarItem = (event) => {
    event.preventDefault();
    let texto = document.querySelector("#texto-lista").value;
    tareas.push(texto);
    crearLista(texto);

}

function eliminarProducto(texto){
    tareas = tareas.filter((ingresado) => (ingresado !== texto))
    let tarea_actualizada = tareas.map(
        (texto) =>
        `<li class="list-group-item">${texto}</li><button onclick="eliminarProducto('${texto}')">Eliminar</button>`
    )
    ul.innerHTML = tarea_actualizada.join().replaceAll(",","")
} 