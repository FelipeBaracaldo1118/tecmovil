let productosEnCarrito = (localStorage.getItem("productos-en-carrito"));
productosEnCarrito = JSON.parse(productosEnCarrito);


const ContenedorcarritoVacio = document.querySelector("#carrito-vacio");
const ContenedorcarritoProductos = document.querySelector("#carrito-productos");
const ContenedorcarritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar =document.querySelectorAll(".producto-eliminar")

function cargarProductosCarrito(){
if(productosEnCarrito){

   

    ContenedorcarritoVacio.classList.add("disabled");
    ContenedorcarritoProductos.classList.remove("disabled");
    ContenedorcarritoAcciones.classList.remove("disabled");

    ContenedorcarritoProductos.innerHTML = "";

    productosEnCarrito.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML =`
         <img class="carrito-producto-imagen" src="${producto.imagen} " alt="${producto.titulo}">
                        <div class="carrito-producto-titulo">
                            <small>Titulo</small>
                            <h3>${producto.titulo}</h3>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small> Cantidad </small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>COP</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>COP</p>
                        </div>
                        <button id=${producto.id} class="producto-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                          </svg></button>
        
                    
                
        
        `;
        ContenedorcarritoProductos.append(div);
    })
     
}else{

    ContenedorcarritoVacio.classList.remove("disabled");
    ContenedorcarritoProductos.classList.add("disabled");
    ContenedorcarritoAcciones.classList.add("disabled");

}

    actualizarBotonesEliminar();    
}
cargarProductosCarrito();

actualizarBotonesEliminar();

function actualizarBotonesEliminar (){
    botonesEliminar = document.querySelectorAll(".producto-eliminar");
    botonesEliminar.forEach(boton => {
      boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);

    cargarProductosCarrito();

    localStorage.setItem("porudctos-en-carrito", JSON.stringify(productosEnCarrito))
}