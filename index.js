const { greet } = require('./src/greet');
const { farewell } = require('./src/farewell');
const { getRandomEmoji } = require('./src/emoji');
const { toUpperCase, toLowerCase } = require('./src/text-utils');
const { getCurrentDate, formatDate } = require('./src/date-utils');
const { getRandomNumber } = require('./src/number-utils');

module.exports = {
  greet,
  farewell,
  getRandomEmoji,
  toUpperCase,
  toLowerCase,
  getCurrentDate,
  formatDate,
  getRandomNumber,
};