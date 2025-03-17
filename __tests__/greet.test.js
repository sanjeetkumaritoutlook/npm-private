const { greet, farewell } = require('../index');

describe('Greet Function', () => {
  test('should return a greeting message in English', () => {
    const result = greet('Sanjeet');
    expect(result).toContain('Sanjeet');
  });

  test('should return a greeting message in Hindi', () => {
    const result = greet('Sanjeet', 'hi');
    expect(result).toContain('नमस्ते');
  });

  test('should return a greeting message in Spanish', () => {
    const result = greet('Sanjeet', 'es');
    expect(result).toContain('¡Hola');
  });
});

describe('Farewell Function', () => {
  test('should return a farewell message in English', () => {
    const result = farewell('Sanjeet');
    expect(result).toContain('Goodbye');
  });

  test('should return a farewell message in Hindi', () => {
    const result = farewell('Sanjeet', 'hi');
    expect(result).toContain('अलविदा');
  });

  test('should return a farewell message in Spanish', () => {
    const result = farewell('Sanjeet', 'es');
    expect(result).toContain('¡Adiós');
  });
});
