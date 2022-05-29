(() => {
  const refs = {
    openMenuBtn: document.querySelector('.tel-menu-open'),
    closeMenuBtn: document.querySelector('.tel-menu-close'),
    menu: document.querySelector('.tel-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
