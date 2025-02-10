function createLogger() {
  const arr = [];
  const logger = {
    log(arg) {
      arr.push(arg);
    },
    getLog() {
      console.log(arr);
    },
  };

  return logger;
}

const logger = createLogger();

// logger.log("first log");
// logger.log("second log");
// logger.getLog();

function createRandomGenerator(min, max) {
  return function () {
    return Math.round(min + Math.random() * (max - min));
  };
}
const rand = createRandomGenerator(8, 15);
// console.log(rand());
