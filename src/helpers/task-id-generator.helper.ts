export const generateTaskID = (): string => {
  return Math.random().toString(36).substring(2, 12);
};
