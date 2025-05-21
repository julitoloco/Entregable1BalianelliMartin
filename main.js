import { articulos } from "./Utils/objetosFerreteria.js";	
const categoria = prompt(
  "Ingrese una categoría: Herramientas, Maquinarias o Electricidad"
);

//Función para filtrar artículos por categoría
function filtrarPorCategoria(categoria) {
  return articulos.filter((articulo) => articulo.categoria === categoria);
}

console.log("Herramientas:", filtrarPorCategoria("Herramientas"));
console.log("Maquinarias:", filtrarPorCategoria("Maquinarias"));
console.log("Electricidad:", filtrarPorCategoria("Electricidad"));


function filtrarPorStock(articulos) {
  return articulos.filter((articulo) => articulo.stock > 0);
}       

console.log("Articulos Disponibles:", filtrarPorStock(articulos))

function filtrarPorPrecio(articulos) {
  return articulos.filter((articulo) => articulo.precio < 1000);
}
console.log("Articulos con precio menor a $1000:", filtrarPorPrecio(articulos))


// funcion que filtra por categoria de acuerdo a lo que elige el usuario
// una vez que elige, se le muestra los articulos disponibles en esa categoria
// y le da la posibilidad de elegir uno

const articulosFiltrados = filtrarPorCategoria(categoria);

if (articulosFiltrados.length > 0) {
  const listado = articulosFiltrados
    .map((articulo, index) => `${index + 1}. ${articulo.nombre}`)
    .join("\n");

  let seleccionado = null;

  while (seleccionado === null) {
    const seleccion = prompt(
      `Artículos en la categoría "${categoria}":\n\n${listado}\n\nIngrese el número del artículo que desea ver:`
    );

    if (seleccion === null) {
      alert("Selección cancelada.");
      break;
    }

    const indiceSeleccionado = parseInt(seleccion) - 1;

    if (
      !isNaN(indiceSeleccionado) &&
      indiceSeleccionado >= 0 &&
      indiceSeleccionado < articulosFiltrados.length
    ) {
      const articulo = articulosFiltrados[indiceSeleccionado];

      const confirmacion = confirm(
        `Seleccionaste:\n\n${articulo.nombre}\nPrecio: $${articulo.precio}\nMarca: ${articulo.marca}\nDescripción: ${articulo.descripcion}\n\n¿Deseás confirmar esta selección?`
      );

      if (confirmacion) {
        alert(`¡Gracias! Seleccionaste: ${articulo.nombre}`);
        seleccionado = articulo;
      } else {
        alert("Operación cancelada. Volviendo al panel de selección...");
      }
    } else {
      alert("Selección inválida. Por favor, intentá nuevamente.");
    }
  }
} else {
   if (categoria === null) {
    alert("Selección cancelada.");
} else {
    alert(`No se encontraron artículos para la categoría: ${categoria}`);
}
}

