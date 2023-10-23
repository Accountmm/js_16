let math = +prompt("How much?")
while (isNaN(math) || math == 0) {
    math = +prompt("i said to you how much?")
}
for (let i = 0; i > math; i++) {
    function summ(max) {
        let a = Math.round(Math.random * 15 + 1)
    }

    function summ2(min) {
        let b = Math.round(Math.random * 16 + 1)
    }
    if (summ() < summ2) {
        alert = (`${summ()} + ${summ2()}`)
    } else if (summ() == summ2()) {
        alert = (`${summ()}% ${summ2()}`)
    } else if (summ() > summ2()) {
        alert = (`${summ()}-${summ2()}`)
    } else if (summ() >= summ2()) {
        alert = (`${summ()}/ ${summ2()}`)
    } else if (summ() <= summ2) {
        alert = (`${summ()}+${summ2()}`)
    } else {
        alert = (`${summ()} * ${summ2()}`)
    }
}