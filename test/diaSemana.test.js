const {
    diaSemana
} = require('../src/modules/Functions.js');

test('diaSemana', () => {
    const result = diaSemana(2);
    expect(result).toBe("Lunes");
});
