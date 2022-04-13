function analA(array){
    const length = array.length;
    const average = array.reduce((a, b) => a + b)/length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    return {
        length,
        average,
        min,
        max
    };
}

export {analA}