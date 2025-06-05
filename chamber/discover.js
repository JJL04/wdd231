// Show visit message based on localStorage
const message = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else {
    message.textContent = `You last visited ${days} day${days > 1 ? "s" : ""} ago.`;
  }
}
localStorage.setItem('lastVisit', now);

// Show loading message while fetching
const container = document.getElementById('cards-container');
container.textContent = "Loading highlights...";

// Fetch and display cards from JSON
fetch('data/discover.json')
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    container.textContent = ''; // Clear loading message

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = "card";

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button type="button">Learn More</button>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error loading discover.json:", err);
    container.innerHTML = "<p>Sorry, we couldn't load the highlights at this time.</p>";
  });

// Optional: Update footer year dynamically
document.getElementById('year').textContent = new Date().getFullYear();
