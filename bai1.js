function kiemTraChanLe(so) {
    if (so % 2 === 0) {
        return "Số " + so + " là số chẵn";
    } else {
        return "Số " + so + " là số lẻ";
    }
}
let so1 = Math.floor(Math.random() * 100) + 1;
let so2 = Math.floor(Math.random() * 100) + 1;
let so3 = Math.floor(Math.random() * 100) + 1;
console.log(kiemTraChanLe(so1));
console.log(kiemTraChanLe(so2));
console.log(kiemTraChanLe(so3));