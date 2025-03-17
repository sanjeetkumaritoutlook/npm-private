const { getRandomEmoji } = require('./emoji');

function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

function greet(name, lang = 'en') {
  const greetings = {
    en: `${getTimeBasedGreeting()}, ${name}! ${getRandomEmoji()}`,
    hi: `नमस्ते, ${name}! ${getRandomEmoji()}`,
    es: `¡Hola, ${name}! ${getRandomEmoji()}`,
  };

  return greetings[lang] || greetings['en'];
}

module.exports = { greet };
