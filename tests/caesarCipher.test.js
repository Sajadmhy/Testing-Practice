import { cCipher } from '../codes/caesarCipher';


test('normal text passed' , function() {
    expect(cCipher('sajad')).toBe('uclcf');
});

test('overflow text passed' , function() {
    expect(cCipher('zebra')).toBe('bgdtc');
});

test('keeping the same case' , function() {
    expect(cCipher('hello Sajad')).toBe('jgnnq Uclcf');
});

test('keeping punctuation' , function() {
    expect(cCipher('hi, there')).toBe('jk, vjgtg');
});