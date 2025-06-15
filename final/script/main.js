import { loadItems } from '../api.js';
import { initModal } from '../modal.js';
import { saveUserPreference, loadUserPreference } from '../storage.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('item-container');
  const menuButton = document.getElementById('menu-button');
  const navLinks = document.getElementById('nav-links');

  // Responsive menu toggle
  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Load and display items
  if (container) {
    try {
      const items = await loadItems();

      items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h3>${item.name}</h3>
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <p>${item.description}</p>
          <p><strong>Price:</strong> $${item.price}</p>
        `;
        container.appendChild(card);
      });
    } catch (error) {
      console.error("Error loading items:", error);
      container.innerHTML = "<p>Error loading items. Please try again later.</p>";
    }
  }

  // Initialize modal
  initModal();

  // Load and apply user preferences if needed
  const preferences = loadUserPreference();
  if (preferences) {
    // Example: apply dark mode or layout choice
    document.body.classList.toggle('dark-mode', preferences.darkMode);
  }
});
