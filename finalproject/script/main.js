import { loadItems } from '../api.js';
import { initModal } from '../modal.js';
import { saveUserPreference, loadUserPreference } from '../storage.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('item-container');
  try {
    const items = await loadItems();
    items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${item.name}</h3>
        <img src="${item.image}" alt="${item.name}">
        <p>${item.description}</p>
        <p><strong>Price:</strong> $${item.price}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p>Error loading items. Please try again later.</p>";
    console.error(error);
  }

  initModal();
});
