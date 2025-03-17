const emojis = ['🌟', '🚀', '😊', '🎉', '🔥', '💻'];

function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

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

function farewell(name, lang = 'en') {
  const farewells = {
    en: `Goodbye, ${name}! 👋`,
    hi: `अलविदा, ${name}! 👋`,
    es: `¡Adiós, ${name}! 👋`,
  };

  return farewells[lang] || farewells['en'];
}

module.exports = { greet, farewell };
