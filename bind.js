Function.prototype.newBind = function(newThis) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  let currentFunction = this;
  let bindArguments = Array.prototype.slice.call(arguments, 1); // get all arguments from arguments object but not the context
  return function closureFunction() {
    let closureArguments = Array.prototype.slice.call(arguments); // get closure arguments from arguments object
    return currentFunction.apply(
      newThis,
      bindArguments.concat(closureArguments)
    );
  };
};
