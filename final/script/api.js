export async function loadItems() {
  try {
    const response = await fetch('/wdd231/final/data/items.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch items: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading items:', error);
    throw error;
  }
}
