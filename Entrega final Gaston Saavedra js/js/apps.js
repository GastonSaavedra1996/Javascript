const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("templateCard").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
const carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
cards.addEventListener("click", (e) => {
  addCarrito(e);
});

const fetchData = async () => {
  try {
    const res = await fetch("./productos/elementos.json");
    const data = await res.json();
    // console.log(data);
    pintarCards(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarCards = (data) => {
  data.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.nombre;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard.querySelector("img").setAttribute("src", producto.img);
    templateCard.querySelector(".btn-dark").dataset.id = producto.id;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const addCarrito = (e) => {
  // console.log(e.target);
  // console.log(e.target.classList.contains('btn-dark'))
  if (e.target.classList.contains("btn-dark")) {
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCarrito = (objeto) => {
  // console.log(objeto);
  const producto = {
    id: objeto.querySelector(".btn-dark").dataset.id,
    title: objeto.querySelector("h5").textContent,
    precio: objeto.querySelector("p").textContent,
    cantidad: 1,
  };

  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }

  carrito[producto.id] = { ...producto };

};

const pintarCarrito = () => {
//   console.log(carrito);
items.innerHTML = ''
 Object.values(carrito).forEach(producto => {
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
    templateCarrito.querySelector("span").textContent =
      producto.cantidad * producto.precio;
    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
};
