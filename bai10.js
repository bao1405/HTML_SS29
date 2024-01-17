function mangConTongLonNhat(arr) {
    if (arr.length === 0) {
        return "Mảng trống.";
    }
    let maxTong = arr[0];
    let hienTaiTong = arr[0];
    let startIndex = 0;
    let currentStartIndex = 0;
    let endIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > hienTaiTong + arr[i]) {
            hienTaiTong = arr[i];
            currentStartIndex = i;
        } else {
            hienTaiTong += arr[i];
        }

        if (hienTaiTong > maxTong) {
            maxTong = hienTaiTong;
            startIndex = currentStartIndex;
            endIndex = i;
        }
    }

    return arr.slice(startIndex, endIndex + 1);
}
let mang = [1, -2, 3, 4, -1, 2, 1, -5, 4];
console.log("Mảng đã khai báo: ", mang);
console.log("Mảng con có tổng phần tử lớn nhất: ", mangConTongLonNhat(mang));