(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-menu-open]'),
    closeModalBtn1: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };
  console.log(refs.closeModalBtn);

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn1.addEventListener('click', toggleModal);

  function toggleModal() {
    console.log(refs.modal);

    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
