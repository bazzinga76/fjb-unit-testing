const {
    calculateLength
} = require('../src/modules/Functions.js');

test('calcula Longitud', () => {
    const result = calculateLength("HOLA");
    expect(result).toBe(4);
});
