function staircase(n) {
    for (let index = 1; index <= n; index += 1) {
        let hashtagLine = ""
        for (let index1 = 0; index1 < n; index1 += 1) {
            if (index1 < n-index) {
                hashtagLine += " ";
            } else {
                hashtagLine += "#";
            }
        }
        console.log(hashtagLine);
    }
}
console.log(staircase(5));
