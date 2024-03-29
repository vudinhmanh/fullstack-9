function Menu(e) {
  let list = document.querySelector('ul');
  if (e.name === 'menu') {
    e.name = "close";
    list.classList.add('right-[35%]');
  } else {
    e.name = "menu";
    list.classList.remove('right-[35%]');
  }
}