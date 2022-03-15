
const helpers = {}

randomNumber = (quantity) => {
  let nums = [];
  for (let i = 1; i <= quantity; i++) {
    nums[i] = Math.random() * 1000;
  }
  return nums;
}

helpers.pushNumbers = (message) => {
  if (message > 1) {
    let random = randomNumber(message);
    return random;
  } else {
    let random = randomNumber(Math.pow(10, 8));
    return random
  }
}

module.exports = helpers
