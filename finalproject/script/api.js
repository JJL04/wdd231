export async function loadItems() {
  const response = await fetch('../data/items.json');
  if (!response.ok) throw new Error('Failed to fetch items');
  return await response.json();
}
