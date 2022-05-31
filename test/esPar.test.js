const {
    esPar
} = require('../src/modules/Functions.js');

test('esPar con número par', () => {
    const result = esPar(2);
    expect(result).toBe("SI");
});


