function phanTuCoDoDaiLonNhat(arr) {
    if (arr.length === 0) {
        return "Mảng trống.";
    }
    let phanTuLonNhat = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > phanTuLonNhat.length) {
            phanTuLonNhat = arr[i];
        }
    }
    return phanTuLonNhat;
}
let mang = ["abc", "abcdef", "a", "abcd", "abcdefgh"];
console.log("Mảng đã khai báo: ", mang);
console.log("Phần tử có độ dài lớn nhất trong mảng: ", phanTuCoDoDaiLonNhat(mang));