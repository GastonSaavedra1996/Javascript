const stockProductos = [
  {
    id: 1,
    nombre: "Remera adidas negra",
    cantidad: 1,
    desc: "remera adidas hombre",
    precio: 1500,
    img: "./img2/remera-adidas-negra.jfif",
  },
  {
    id: 2,
    nombre: "Remera Converse",
    cantidad: 1,
    desc: "remera converse mujer",
    precio: 1400,
    img: "./img2/remera-converse-m.jfif",
  },
  {
    id: 3,
    nombre: "Remera Converse",
    cantidad: 1,
    desc: "remera converse mujer",
    precio: 1700,
    img: "./img2/remera-converse-m2.jfif",
  },
  {
    id: 4,
    nombre: "Remera Converse",
    cantidad: 1,
    desc: "remera converse hombre",
    precio: 1500,
    img: "img2/remera-converse.jfif",
  },
  {
    id: 5,
    nombre: "Remera Nike",
    cantidad: 1,
    desc: "remera nike hombre",
    precio: 1800,
    img: "./img2/remera-nike-h.jpg",
  },
  {
    id: 6,
    nombre: "Zapatillas adidas court",
    cantidad: 1,
    desc: "zapatillas adidas hombre",
    precio: 700,
    img: "./img2/zapatilla-adidas-court.jfif",
  },
  {
    id: 7,
    nombre: "Zapatillas fila",
    cantidad: 1,
    desc: "zapatillas mujer fila",
    precio: 2500,
    img: "./img2/zapatilla-fila-mujer.jfif",
  },
  {
    id: 8,
    nombre: "Zapatillas nike airmax excee",
    cantidad: 1,
    desc: "zapatillas nike mujer",
    precio: 5800,
    img: "./img2/zapatilla-airmax-excee-m.jfif",
  },
  {
    id: 9,
    nombre: "Zapatillas nike airmax",
    cantidad: 1,
    desc: "zapatilla nike mujer",
    precio: 6500,
    img: "./img2/zapatilla-airmax-sc-m.jfif",
  },
  {
    id: 10,
    nombre: "Zapatillas converse",
    cantidad: 1,
    desc: "zapatillas mujer converse",
    precio: 700,
    img: "./img2/zapatilla-chuk-taylor-converse-m.jfif",
  },
  {
    id: 11,
    nombre: "Zapatillas fila racer advantage",
    cantidad: 1,
    desc: "zapatillas fila mujer",
    precio: 3200,
    img: "./img2/zapatilla-fila-racer-advantage-m.jfif",
  },
  {
    id: 12,
    nombre: "Zapatillas fila racer advantage",
    cantidad: 1,
    desc: "zapatillas fila hombre",
    precio: 2850,
    img: "./img2/zapatilla-fila-ranger-advance-h.jfif",
  },
  {
    id: 13,
    nombre: "Zapatillas nike airmax",
    cantidad: 1,
    desc: "zapatillas airmax hombre",
    precio: 8700,
    img: "./img2/zapatilla-nike-air-max.jfif",
  },
  {
    id: 14,
    nombre: "Zapatillas nike airforce",
    cantidad: 1,
    desc: "zapatillas nike hombre",
    precio: 7800,
    img: "./img2/zapatilla-nike-airforce.jfif",
  },
  {
    id: 15,
    nombre: "Zapatillas puma caven",
    cantidad: 1,
    desc: "zapatillas puma hombre",
    precio: 3400,
    img: "./img2/zapatilla-puma-caven.jfif",
  },
  {
    id: 16,
    nombre: "Short converse",
    cantidad: 1,
    desc: "short converse mujer",
    precio: 1800,
    img: "./img2/short-converse-m.jfif",
  },
  {
    id: 17,
    nombre: "Short nike",
    cantidad: 1,
    desc: "short nike hombre",
    precio: 2100,
    img: "./img2/short-nike-cahllenger-m.jfif",
  },
  {
    id: 18,
    nombre: "Campera boca",
    cantidad: 1,
    desc: "campera boca adidas hombre",
    precio: 11500,
    img: "./img2/campera-adidas-boca.jpg",
  },
  {
    id: 19,
    nombre: "Short river",
    cantidad: 1,
    desc: "short river adidas hombre",
    precio: 2600,
    img: "./img2/short-river.jfif",
  },
  {
    id: 20,
    nombre: "Campera independiente",
    cantidad: 1,
    desc: "campera independiente puma mujer",
    precio: 8700,
    img: "./img2/campera-independiente-m.jfif",
  },
  {
    id: 21,
    nombre: "Camiseta Seleccion Argenina",
    cantidad: 1,
    desc: "camiseta argentina adidas hombre",
    precio: 5800,
    img: "img2/camiseta-arg-hombre.jfif",
  },
  {
    id: 22,
    nombre: "Camiseta Seleccion Argentina",
    cantidad: 1,
    desc: "camiseta argentina adidas nino",
    precio: 3200,
    img: "img2/camiseta-argentina.jfif",
  },
  {
    id: 23,
    nombre: "Camiseta lanus",
    cantidad: 1,
    desc: "camiseta peak lanus hombre",
    precio: 2900,
    img: "img2/camiseta-lanus.jpg",
  },
  {
    id: 24,
    nombre: "Camiseta racing",
    cantidad: 1,
    desc: "camiseta racing kappa hombre",
    precio: 3250,
    img: "img2/camiseta-racing-h.jfif",
  },
  {
    id: 25,
    nombre: "Camiseta river",
    cantidad: 1,
    desc: "camiseta river adidas hombre",
    precio: 3800,
    img: "img2/camiseta-river.jfif",
  },
  {
    id: 26,
    nombre: "Botines adidas sense",
    cantidad: 1,
    desc: "botines adidas hombre",
    precio: 9900,
    img: "./img2/botines-de-futbol-adidas-sense.jpg",
  },
  {
    id: 27,
    nombre: "Botines nike",
    cantidad: 1,
    desc: "botines nike hombre",
    precio: 10700,
    img: "./img2/botines-nike-h.jpg",
  },
  {
    id: 28,
    nombre: "Botines nike",
    cantidad: 1,
    desc: "botines nike nino",
    precio: 5500,
    img: "./img2/botines-nike-n.jpg",
  },
  {
    id: 29,
    nombre: "Ojotas adidas hombre",
    cantidad: 1,
    desc: "ojotas adidas hombre",
    precio: 2100,
    img: "./img2/ojota-adidas.jfif",
  },
  {
    id: 30,
    nombre: "Ojotas puma mujer",
    cantidad: 1,
    desc: "ojotas puma mujer",
    precio: 1800,
    img: "./img2/ojota-puma-m.jpg",
  },
  {
    id: 31,
    nombre: "Buzo adidas",
    cantidad: 1,
    desc: "buzo adidas hombre",
    precio: 6600,
    img: "./img2/buzo-adidas-h.jpg",
  },
  {
    id: 32,
    nombre: "Buzo adidas",
    cantidad: 1,
    desc: "buzo adidas mujer",
    precio: 4900,
    img: "./img2/buzo-adidas-m.jpg",
  },
  {
    id: 33,
    nombre: "Buzo adidas",
    cantidad: 1,
    desc: "buzo adidas nino",
    precio: 2600,
    img: "./img2/buzo-adidas-n.jpg",
  },
  {
    id: 34,
    nombre: "Buzo converse",
    cantidad: 1,
    desc: "buzo converse hombre",
    precio: 3600,
    img: "./img2/buzo-converse-m.jfif",
  },
  {
    id: 35,
    nombre: "Buzo nike",
    cantidad: 1,
    desc: "buzo nike hombre",
    precio: 3200,
    img: "./img2/buzo-nike-h.jpg",
  },
  {
    id: 36,
    nombre: "Buzo nike",
    cantidad: 1,
    desc: "buzo nike mujer",
    precio: 2200,
    img: "./img2/buzo-nike-m.jpg",
  },
];
const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago');
const inputBuscar = document.getElementById('buscar');
const celdas = document.getElementsByTagName('h6')
let carrito = [];

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();

  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}
if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "./compra.html";
    }
  });
}

// PINTAR CARDS

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-4 card-principal" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h6 class="card-title ">${nombre}</h6>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text articulo">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()
};

// CARRITO DE COMPRAS

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto class"": ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Todavia no compraste nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Fijate tu carrito!");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const ropaId = id;
  carrito = carrito.filter((ropa) => ropa.id !== ropaId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const persona = document.querySelector('#persona').value
   const email = document.querySelector('#correo').value

   if(email === '' || persona == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

// Correo agregado con emailjs

  const btn = document.getElementById('button');

   btn.value = 'Enviando mail...';
   const serviceID = 'default_service';
   const templateID = 'template_8vx3u3k';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      Swal.fire(
        'Realizaste tu compra con exito!',
        'Fijate tu correo!',
        'success'
      )
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
;
    
// LOADING...
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()
 }

// Funcion Filtrar

 const formularioFiltro = document.querySelector('#formulario')
 const boton = document.querySelector('boton')
 
 
 const filtrar = () =>{
 
     contenedor.innerHTML = '';
 const texto = formularioFiltro.value.toLowerCase();
 for (let stockProducto of stockProductos){
     let nombre = stockProducto.desc.toLowerCase();
     if(nombre.indexOf(texto) !== -1){
         contenedor.innerHTML += `
     <div class="card mt-4 card-principal" style="width: 18rem;">
     <img class="card-img-top mt-2" src="${stockProducto.img}" alt="Card image cap">
     <div class="card-body">
       <h6 class="card-title ">${stockProducto.nombre}</h6>
       <p class="card-text">Precio: ${stockProducto.precio}</p>
       <p class="card-text articulo">Descripcion: ${stockProducto.desc}</p>
       <p class="card-text">Cantidad: ${stockProducto.cantidad}</p>
       <button class="btn btn-primary" onclick="agregarProducto(${stockProducto.id})">Comprar Producto</button>
     </div>
   </div>
     `;
     }
 }
 if(contenedor.innerHTML === '')
 console.log('no se encontro el producto');
 
 }
 
 formularioFiltro.addEventListener('keyup', filtrar)
 filtrar();

