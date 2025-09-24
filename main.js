import { Header } from "./componentes/header/headerComponents.js";
import { seccion1 } from "./componentes/seccion1/seccion1Components.js";
import { formularioCompras } from "./componentes/formulario/formularioComponents.js";
import { obtenerProductos, guardarProductos } from "./control/miLocalStorage.js";

function seccion() {
    let seccion = document.createElement('section');
    seccion.className = 'todo';

    // Obtener lista del localStorage
    let listaProductos = obtenerProductos();

    // Inicializar localStorage si está vacío
    if (!listaProductos || listaProductos.length === 0) {
        listaProductos = [];
        guardarProductos(listaProductos);
    }

    console.log("Productos cargados:", listaProductos);

    // Renderizar componentes
    seccion.appendChild(Header());
    seccion.appendChild(seccion1());
    seccion.appendChild(formularioCompras());

    return seccion;
}

// 🔹 Montamos en #root
const root = document.querySelector('#root');
root.appendChild(seccion());