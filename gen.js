let seg_1 = function () {
    do {
        seg = Math.floor(Math.random() * 999);
    } while (seg % 111 == 0);
    return seg.toString();
};

let dgtSum = function (value) {
    let sum = 0;

    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    return sum;
};

let seg_2 = function () {
    do {
        seg = Math.floor(Math.random() * 9999999);
    } while (
        dgtSum(seg) % 7 != 0 ||
        ["0", "8", "9"].includes(seg.toString()[seg.toString().length - 1])
    );
    return seg.toString();
};

let gen = function () {
    seg1 = document.getElementById("seg1");
    seg2 = document.getElementById("seg2");

    sege = [];
    sege[0] = seg_1();
    sege[1] = seg_2();

    let j = 3;

    for (let i = 0; i < 2; ++i) {
        while (sege[i].length < j) sege[i] = "0" + sege[i];
        j = 7;
    }

    seg1.innerHTML = sege[0];
    seg2.innerHTML = sege[1];
};
