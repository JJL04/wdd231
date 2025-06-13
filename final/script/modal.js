export function initModal() {
  const modal = document.getElementById('myModal');
  const openBtn = document.getElementById('open-modal');
  const closeBtn = document.getElementById('close-modal');

  if (!modal || !openBtn || !closeBtn) {
    console.warn('Modal elements not found in the DOM.');
    return;
  }

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Optional: close modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
}
