const {
    ordenaArray
} = require('../src/modules/Functions.js');

test('ordenaArray', () => {
    const result = ordenaArray([3,5,2,4,1]);
    expect(result).toBe([1, 2, 3, 4, 5]);
});