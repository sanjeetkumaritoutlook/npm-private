function farewell(name, lang = 'en') {
    const farewells = {
      en: `Goodbye, ${name}! 👋`,
      hi: `अलविदा, ${name}! 👋`,
      es: `¡Adiós, ${name}! 👋`,
    };
  
    return farewells[lang] || farewells['en'];
  }
  
  module.exports = { farewell };
  