// Obtener una referencia al contenedor del menú
const menuContainer = document.getElementById("menuItems");

// Definir los elementos del menú
const menuItems = [
  { text: "About", link: "#" },
  { text: "Speakers", link: "#" },
  { text: "Agenda", link: "#" },
  { text: "News", link: "#" },
];

// Generar los elementos del menú dinámicamente
menuItems.forEach((item) => {
  const menuItem = document.createElement("a");
  menuItem.href = item.link;
  menuItem.textContent = item.text;
  menuContainer.appendChild(menuItem);
});