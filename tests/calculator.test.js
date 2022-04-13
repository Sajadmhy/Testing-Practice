import {add, sub, div, mul} from '../codes/calculator'


test('add done' , function() {
    expect(add(1,2)).toBe(3);
});

test('subtract done' , function() {
    expect(sub(1,2)).toBe(-1);
});

test('divide done' , function() {
    expect(div(1,2)).toBe(0.5);
});

test('muliply done' , function() {
    expect(mul(1,2)).toBe(2);
});

