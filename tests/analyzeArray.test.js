import {analA} from '../codes/analyzeArray'

test('average' , function() {
    expect(analA([1,8,3,4,2,6]).average).toBe(4);
});

test('min' , function() {
    expect(analA([1,8,3,4,2,6]).min).toBe(1);
});

test('max' , function() {
    expect(analA([1,8,3,4,2,6]).max).toBe(8);
});

test('length' , function() {
    expect(analA([1,8,3,4,2,6]).length).toBe(6);
});