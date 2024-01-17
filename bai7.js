function timCapSoTongBang(mang, soNhap) {
    let daXemQua = {};
    for (let i = 0; i < mang.length; i++) {
        let soCanTim = soNhap - mang[i];
        if (daXemQua[soCanTim] !== undefined) {
            return [soCanTim, mang[i]];
        }
        daXemQua[mang[i]] = i;
    }
    return null;
}
let mangSoNguyen = prompt("Nhập vào mảng số nguyên, cách nhau bằng dấu phẩy: ");
mangSoNguyen = mangSoNguyen.split(',').map(Number);
let soNhap = parseInt(prompt("Nhập vào số nguyên: "));
console.log("Mảng đã nhập: ", mangSoNguyen);
console.log("Số đã nhập: ", soNhap);
console.log("Cặp số có tổng bằng số đã nhập: ", timCapSoTongBang(mangSoNguyen, soNhap));
