//  ---------------------------------     TASK - 1    ------------------------------------------


function riyaziemeller(a, b) {
    return {
        toplama: a + b,
        cixma: a - b,
        vurma: a * b,
        bolme: a / b,
        mod: a % b
    };
}

console.log(riyaziemeller(10, 7));


//  ---------------------------------     TASK - 2    ------------------------------------------


function tekcut(...numbers) {
    const tekler = numbers.filter(num => num % 2 !== 0);
    const cutler = numbers.filter(num => num % 2 === 0);
    return { tekler, cutler };
}

console.log(tekcut(14, 20, 35, 40, 57, 60, 100));


//  ---------------------------------     TASK - 3    ------------------------------------------


function bolunenlerincemi(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 4 === 0 && num % 5 === 0) {
            sum += num;
        }
    }
    return sum;
}

console.log(bolunenlerincemi([14, 20, 35, 40, 57, 60, 100]));


//  ---------------------------------     TASK - 4    ------------------------------------------


function simvolsayi(cumle, simvol) {
    let say = 0;
    for (let i = 0; i < cumle.length; i++) {
        if (cumle[i].toLowerCase() === simvol.toLowerCase()) say++;
    }
    return say;
}

console.log(simvolsayi("Yoxlanis ucun cumle", "u"));


//  ---------------------------------     TASK - 5    ------------------------------------------


function abundantdeficient(eded) {
    let bolenlercemi = 0;
    for (let i = 1; i < eded; i++) {
        if (eded % i === 0) bolenlercemi += i;
    }
    return bolenlercemi > eded ? "Abundant" : "Deficient";
}

console.log(abundantdeficient(12)); // Abundant
console.log(abundantdeficient(13)); // Deficient


//  ---------------------------------     TASK - 6    ------------------------------------------


function kvadratarray(arr) {
    const kvadratlar = [];
    for (let i = 0; i < arr.length; i++) {
        kvadratlar.push(arr[i] * arr[i]);
    }
    return kvadratlar;
}

console.log(kvadratarray([1, 2, 3, 4, 5]));


//  ---------------------------------     TASK - 7    ------------------------------------------


function yasferqi(users) {
    let minyas = users[0].age;
    let maxyas = users[0].age;
    
    for (let i = 1; i < users.length; i++) {
        if (users[i].age < minyas) minyas = users[i].age;
        if (users[i].age > maxyas) maxyas = users[i].age;
    }
    
    return [minyas, maxyas, maxyas - minyas];
}

const users = [
    { name: "Ferid", age: 25 },
    { name: "Medet", age: 30 },
    { name: "Ilkin", age: 20 }
];
console.log(yasferqi(users)); // [20, 30, 10]