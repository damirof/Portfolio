// ----------------------  TASK - 1   -------------------------------
// ----------------------  TASK - 2   -------------------------------

function vurmacedveli() {
    for (let i = 1; i <= 10; i++) {
      for (let VC = 1; VC <= 10; VC++) {
        console.log(`${i} x ${VC} = ${i * VC}`);
      }
    }
  }
  console.log(vurmacedveli());
  


// ----------------------  TASK - 3   -------------------------------

let users = [
    { ad: "Ferid", yas: 21 },
    { ad: "Medet", yas: 20 },
    { ad: "Ilkin", yas: 30 },
    { ad: "Sahib", yas: 40 },
    { ad: "Vusal", yas: 41 }
  ];
  
  function yasfilter() {
    let boyuk30 = [];
    let kicik30 = [];
    
    for (let i = 0; i < users.length; i++) {
      if (users[i].yas > 30) {
        boyuk30.push(users[i]);
      } else if (users[i].yas < 30) {
        kicik30.push(users[i]);
      }
    }
    
    console.log("30-dan boyuk:", boyuk30);
    console.log("30-dan kicik:", kicik30);
  }
  
  yasfilter();


// ----------------------  TASK - 4   -------------------------------

function edediorta() {
    let ededler = [1, 2, 3, 4, 5];
    let say = 0;
    let cem = 0;  
    while (say < 3) {
      let eded = Number(prompt(`${say + 1}. ədədi daxil edin:`));
      ededler.push(eded);
      cem += eded;
      say++;
    }
    
    let orta = cem / ededler.length;
    console.log(orta);
  }
  
 


// ----------------------  TASK - 5   -------------------------------

function mod() {
    const eded1 = parseFloat(prompt("Birinci"));
    const eded2 = parseFloat(prompt("İkinci"));
    
    const mod = eded1 % eded2;
    console.log(`${eded1} % ${eded2} = ${mod}`);
  }
  
  mod();


// ----------------------  TASK - 6   -------------------------------

let arr = [203, 19, 2, 13, 196, 86, 35, 77];

function enboyukeded() {
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  console.log(`En boyuk eded: ${max}`);
}

enboyukeded();


// ----------------------  TASK - 7   -------------------------------


let arr = [203, 19, 2, 13, 196, 86, 35, 77];

function yerdeyisme() {
  let min = arr[0];
  let max = arr[0];
  let minindex = 0;
  let maxindex = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minindex = i;
    }
    if (arr[i] > max) {
      max = arr[i];
      maxindex = i;
    }
  }
  
  [arr[minindex], arr[maxindex]] = [arr[maxindex], arr[minindex]];
  console.log("Yerdeyisme:", arr);
}

yerdeyisme();


// ----------------------  TASK - 8   -------------------------------


let arr = [203, 19, 2, 13, 196, 86, 35, 77];

function cemtap() {
  let min = arr[0];
  let max = arr[0];
  let cem = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  for (let num of arr) {
    if (num !== min && num !== max) {
      cem += num;
    }
  }
  
  console.log(`Min ve max xaric cem: ${cem}`);
}

cemtap();


// ----------------------  TASK - 9   -------------------------------


let arr = [203, 19, 2, 13, 196, 86, 35, 77];

function axtar() {
  const eded = Number(prompt("Eded axtar:"));
  let tapildi = false;
  
  for (let num of arr) {
    if (num === eded) {
      tapildi = true;
      break;
    }
  }
  
  alert(tapildi ? "Eded var :)" : "Eded yoxdur :(");
}

axtar();


// ----------------------  TASK - 10   -------------------------------


let arr = [203, 19, 2, 13, 196, 86, 35, 77];

function reqemsayi() {
    let birreqemli = 0;
    let ikireqemli = 0;
    let ucreqemli = 0;

    for (let i = 0; i < arr.length; i++) {
        let eded = arr[i];
        
        if (eded >= 0 && eded <= 9) {
            birreqemli++;
        } 
        else if (eded >= 10 && eded <= 99) {
            ikireqemli++;
        } 
        else if (eded >= 100 && eded <= 999) {
            ucreqemli++;
        }
    }

    console.log("Bir reqemli ededler: " + birreqemli);
    console.log("İki reqemli ededler: " + ikireqemli);
    console.log("Uc reqemli ededler: " + ucreqemli);
}

reqemsayi();