function rev(str) {
    const arStr = Array.from(str);
    const revStr = arStr.reverse();
    return revStr.join("");
}

export {rev};