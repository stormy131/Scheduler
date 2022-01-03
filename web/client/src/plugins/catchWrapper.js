const catchWrapper = (func, handler, args) => {
  return func(args).catch((error) => handler(error));
};

export default catchWrapper;
