const {
    horaActual
} = require('../src/modules/Functions.js');

test('horaActual', () => {
    const result = horaActual();
    expect(result).toBe("19:37");
});
