const catchWrapper = (handler, func, ...args) => {
  return func(...args).catch((error) => handler(error));
};

export default catchWrapper;
