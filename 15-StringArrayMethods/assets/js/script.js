//  ---------------------------String Methods--------------------


const text = "I am frontend DEVELOPER I LEARN Javascript";

// ---------------------------==  TASK - 1  ----------------------


function saitler(sait) {
  const herf= [];
  const herfler = "aoueiAIOUE";
  
  for (let i = 0; i < sait.length; i++) {
    if (herfler.includes(sait[i])) {
      herf.push(sait[i]);
    }
  }
  
  return herf;
}

console.log("Saitler:", saitler(text));

//  ---------------------------==  TASK - 2  ----------------------

function say(str) {
    const words = str.split(' ');
    return words.length;
  }
  
  console.log("Sozlerin sayi:", say(text));

//  ---------------------------==  TASK - 3  ----------------------

function findlongest(str) {
    const words = str.split(' ');
    let longestWord = '';
    
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    
    return longestWord;
  }
  
  console.log("En uzun soz:", findlongest(text));
//  ---------------------------==  TASK - 4  ----------------------

function uppercase(str) {
  const words = str.split(' ');
  const result = [];
  
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].toUpperCase()) {
      result.push({
        word: words[i],
        index: i
      });
    }
  }
  
  return result;
}

console.log("Tam boyuk herfli sozler:", uppercase(text));

//  ---------------------------==  TASK - 5  ----------------------

function twouppercase(str) {
    const words = str.split(' ');
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
      let upperCount = 0;
      
      for (let j = 0; j < words[i].length; j++) {
        if (words[i][j] === words[i][j].toUpperCase() && words[i][j] !== words[i][j].toLowerCase()) {
          upperCount++;
        }
      }
      
      if (upperCount > 2) {
        result.push(words[i]);
      }
    }
    
    return result;
  }
  
  console.log("2-den cox boyuk herfli sozlerr:", twouppercase(text));

//  ---------------------------==  TASK - 6  ----------------------

function Initials(str) {
    const words = str.split(' ');
    let initials = '';
    
    for (let i = 0; i < words.length; i++) {
      const firstChar = words[i][0];
      if (firstChar === firstChar.toUpperCase() &&  firstChar !== firstChar.toLowerCase()) {
        initials += firstChar;
      }
    }
    
    return initials;
  }

  console.log("Bas herflerin birlesimi", Initials(text));


//  ---------------------------==  TASK - 7  ----------------------

function ixtisarsozler(word) {
    if (word.length < 4) return word;
    
    const first = word[0];
    const last = word[word.length - 1];
    const middleCount = word.length - 2;
    
    return first + middleCount + last;
  }
  
  function ixtisarcumle(str) {
    const words = str.split(' ');
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
      result.push(ixtisarsozler(words[i]));
    }
    
    return result.join(' ');
  }
  
  console.log("Ixtisar edilmis cumle:", ixtisarcumle(text));



// -------------------------    Array Methods:    -------------------



// ------------------   TASK - 1   ------------------

function removeDuplicates(arr) {
    const count = {};
    const Array = [];
    
    arr.forEach(num => {
      if (count[num]) {
        count[num]++;
      } else {
        count[num] = 1;
        Array.push(num);
      }
    });
    
    return {
      Array,
      duplicatesCount: Object.fromEntries(
        Object.entries(count).filter(([key, value]) => value > 1)
      )
    };
  }
  
  const numbers = [1, 2, 3, 2, 4, 5, 4, 4];
  const result = removeDuplicates(numbers);
  
  console.log("Tekrarlanan reqemler:", result.duplicatesCount);

  // ------------------   TASK - 2   ------------------

  function Palindrome(word) {
    const cleanedWord = word.toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  
  console.log("121 :", Palindrome("121"));
  console.log("356 :", Palindrome("356"));

 // ------------------   TASK - 3   ------------------

 function smallernum(arr, num) {
    return arr.filter(item => item < num).length;
  }
  
  const numberarray = [5, 2, 8, 1, 4];
  console.log("3-den kicik elementlerin sayi:", smallernum(numberarray, 3));

// ------------------   TASK - 4   ------------------

const customers = [
    {
      name: "Tyrone",
      personal: {
        age: 33,
        hobbies: ["Bicycling", "Camping"],
      },
    },
    {
      name: "Elizabeth",
      personal: {
        age: 25,
        hobbies: ["Guitar", "Reading", "Gardening"],
      },
    },
    {
      name: "Penny",
      personal: {
        age: 36,
        hobbies: ["Comics", "Chess", "Legos"],
      },
    },
  ];
  
  function getAllHobbies(customers) {
    return customers.reduce((acc, customer) => {
      return [...acc, ...customer.personal.hobbies];
    }, []);
  }
  
  console.log("Butun hobbi listi:", getAllHobbies(customers));

    // ------------------   TASK - 5   ------------------

    function Randoms(length, min, max) {

        const randomArray = Array.from({length}, () => 
          Math.floor(Math.random() * (max - min + 1)) + min);
        
        const sum = randomArray.reduce((a, b) => a + b, 0);
        const average = sum / randomArray.length;
        const maxNum = Math.max(...randomArray);
        const minNum = Math.min(...randomArray);
        const squares = randomArray.map(num => num * num);
        
        return {
          randomArray,
          sum,
          average,
          maxNum,
          minNum,
          squares
        };
      }
      
      const analysis = Randoms(10, 1, 100);
      console.log("Random array:", analysis.randomArray);
      console.log("Toplama:", analysis.sum);
      console.log("Ortalama:", analysis.average);
      console.log("Ən boyuk:", analysis.maxNum);
      console.log("Ən kicik:", analysis.minNum);
      console.log("Kvadratlar:", analysis.squares);