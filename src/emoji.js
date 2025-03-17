const emojis = ['🌟', '🚀', '😊', '🎉', '🔥', '💻'];

function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

module.exports = { getRandomEmoji };
