const {
    esPar
} = require('../util/Functions.js');

//import { name, esPar, arrayEsPar, calculateLength, diaSemana, horaActual,  ordenaArray, mayusculas } from '../utils/Functions.js';

test('esPar con número par', () => {
    const result = esPar(2);
    expect(result).toBe("SI");
});

describe('Dado el número 2', () => {
    describe('Si es par', () => {
        it('Then map colonias', () => {
            const result = esPar(2);
            expect(result).toBe("SI");
        });
    });
    describe('Si no es par', () => {
        it('Then throw an error', () => {
            const result = esPar(2);
            expect(result).toThrow();
        });
    });
});