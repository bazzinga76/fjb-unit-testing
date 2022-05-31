const {
    arrayEsPar
} = require('../src/modules/Functions.js');

test('Array es par', () => {
    const result = arrayEsPar([2,4,6,8,10]);
    expect(result).toBe("SI");
});
