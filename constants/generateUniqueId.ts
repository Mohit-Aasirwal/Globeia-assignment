export const generateUniqueId = (existingIds: Set<number>): number => {
  let uniqueId: number;
  do {
    uniqueId = Math.floor(Math.random() * 101); // Random number between 0 and 100
  } while (existingIds.has(uniqueId));
  existingIds.add(uniqueId);
  return uniqueId;
};
