export const initialItems = new Array(2999).fill(0).map((_, i) => {
    return {
      id: i,
      isSelected: i === 2999,
    };
  });