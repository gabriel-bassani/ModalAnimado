const ShowModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);

  if (openBtn && modalContainer) {
    openBtn.addEventListener("click", () => {
      modalContainer.classList("show-modal");
    });
  }
};

ShowModal("open-modal", "modal-container");
