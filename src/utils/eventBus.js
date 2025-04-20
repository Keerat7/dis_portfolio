const subscribers = new Set();

export const subscribeToHover = (callback) => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};

export const triggerHover = (message) => {
  subscribers.forEach((callback) => callback(message));
};