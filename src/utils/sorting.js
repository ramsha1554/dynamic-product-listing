/**
 * Utility functions for sorting products
 */

export const sortProducts = (products, sortBy) => {
  if (!products || !Array.isArray(products)) return [];

  const sortedList = [...products];

  switch (sortBy) {
    case 'price-low':
      return sortedList.sort((a, b) => a.price - b.price);
    
    case 'price-high':
      return sortedList.sort((a, b) => b.price - a.price);
    
    case 'rating':
      // Sorted by rate, then by count for tie-breaking
      return sortedList.sort((a, b) => {
        if (b.rating.rate !== a.rating.rate) {
          return b.rating.rate - a.rating.rate;
        }
        return b.rating.count - a.rating.count;
      });
    
    case 'name-az':
      return sortedList.sort((a, b) => a.title.localeCompare(b.title));
    
    case 'name-za':
      return sortedList.sort((a, b) => b.title.localeCompare(a.title));
    
    case 'relevant':
    default:
      // Return original order (assuming the array passed is in its "relevant" order)
      return sortedList;
  }
};
