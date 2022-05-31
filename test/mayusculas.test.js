const {
    mayusculas
} = require('../src/modules/Functions.js');

test('mayusculas', () => {
    const result = mayusculas("minusculas");
    expect(result).toBe("MINUSCULAS");
});