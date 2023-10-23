// let math = +prompt("How much?")
// while (isNaN(math) || math == 0) {
//     math = +prompt("i said to you how much?")
// }
// for (let i = 0; i > math; i++) {
//     function summ(max) {
//         let a = Math.round(Math.random * 15 + 1)
//     }

//     function summ2(min) {
//         let b = Math.round(Math.random * 16 + 1)
//     }
//     if (summ(a) < summ2(b)) {
//         alert(`${summ(a)} + ${summ2(b)}`)
//     } else if (summ(a) == summ2(b)) {
//         alert(`${summ(a)}% ${summ2(b)}`)
//     } else if (summ(a) > summ2(b)) {
//         alert(`${summ(a)}-${summ2(b)}`)
//     } else if (summ(a) >= summ2(b)) {
//         alert(`${summ(a)}/ ${summ2(b)}`)
//     } else if (summ(a) <= summ2(b)) {
//         alert(`${summ(a)}+${summ2(b)}`)
//     } else {
//         alert(`${summ(a)} * ${summ2()}`)
//     }
// }


let math = +prompt("How much?");
while (isNaN(math) || math == 0) {
    math = +prompt("i said to you how much?");
}

function summ() {
    return Math.round(Math.random() * 15 + 1);
}

function summ2() {
    return Math.round(Math.random() * 16 + 1);
}

for (let i = 0; i < math; i++) {
    let a = summ();
    let b = summ2();

    if (a < b) {
        let q = +prompt(`${a} + ${b}`);
        if (q == a + b) {
            console.log("true");
        } else {
            console.log(" correct one is " + (a+b)); 
        }
        
    } else if (a == b) {
        let w = +prompt(`${a} % ${b}`);
        if (w == a % b) {
            console.log("true");
        } else {
            console.log(" correct one is " + (a%b)); 
        }
    } else if (a > b) {
        let e = +prompt(`${a} - ${b}`);
        if (e == a - b) {
            console.log("true");
        } else {
            console.log(" correct one is "+ (a-b)); 
        }
    } else if (a >= b) {
        let t = +prompt(`${a} / ${b}`);
        if (t == a / b) {
            console.log("true");
        } else {
            console.log(" correct one is " + (a/b)); 
        }
    } else if (a <= b) {
        let y = +prompt(`${a} + ${b}`);
        if (y == a + b) {
            console.log("true");
        } else {
            console.log(" correct one is " + (a+b)); 
        }
    } else {
        let u = +prompt(`${a} * ${b}`);
        if (u == a * b) {
            console.log("true");
        } else {
            console.log(" correct one is " + (a*b)); 
        }
    }
    
}
// mmmm