const element = document.getElementById("list-element");
const menu = document.getElementsByClassName("dropdown")[0];

element.onclick = () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};
