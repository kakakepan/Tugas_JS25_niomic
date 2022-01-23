function deret(array) {
    let sebelumnya = array;
    console.log("Sebelumnya : " + sebelumnya.join(','));
    let asc = array.sort();
    console.log("Ascending : " + asc.join(","));
    let desc = array.reverse();
    console.log("Descending : " + desc.join(","));
    let pil = array.filter(angka => angka > 10);
    console.log("Filter > 10 : " + pil.join(","));
}
deret([2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]);